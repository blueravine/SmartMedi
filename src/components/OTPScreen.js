import React, { Component } from 'react';
import {Navigator,
    Platform, StyleSheet, View, Text,text,TextInput, Image, TouchableOpacity, Alert,AsyncStorage,
    AppRegistry,TouchableHighlight,StatusBar,Dimensions,Button,ScrollView,Animated,
    Easing,BackHandler,
} from 'react-native';
import {Card,icon} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux'; // 4.0.0-beta.31
import Icon from 'react-native-vector-icons/FontAwesome';
import Icoon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Foundation';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import Toast from 'react-native-simple-toast';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
global.sessionid ;
import PropTypes from 'prop-types';
import Moment from "moment/moment";
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,
    countrycode:null};
export default class OTPScreen extends Component {
    // public static var=sessionid;
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            phone:'',
            countrycode:null,
            username:'',
            otp:'',
              
        };
        this._onVerify = this._onVerify.bind(this);

    }
    _onVerify(){
       
    fetch('https://2factor.in/API/V1/88712423-890f-11e8-a895-0200cd936042/SMS/VERIFY/'+sessionid+'/'+this.state.otp, { // USE THE LINK TO THE SERVER YOU'RE USING mobile
    method: 'GET', // USE GET, POST, PUT,ETC
    headers: { //MODIFY HEADERS
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((responseJson) => {
        if((responseJson.Status==="Success") && (responseJson.Details==="OTP Matched")){

            fetch('https://smartmedi.blueravine.in/user/register', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
                method: 'POST', // USE GET, POST, PUT,ETC
                headers: { //MODIFY HEADERS
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    //    application/x-www-form-urlencoded
                },
                body: JSON.stringify({mobile:userdata.mobile,
                                      password:this.state.password,
                                       name:userdata.name,
                                      countrycode:userdata.countrycode,
                                      email:userdata.email,
                                     username:userdata.username,
                                    gender:userdata.gender,
                                    age:userdata.age })
            })
                .then((response) => response.json())
                .then((responseJson) => {

                    if (responseJson.messagecode===1002) {
                        // Actions.loginScreen({phone:this.props.phone});
                        fetch('https://smartmedi.blueravine.in/user/login  ', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
                            method: 'POST', // USE GET, POST, PUT,ETC
                            headers: { //MODIFY HEADERS
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                //    application/x-www-form-urlencoded
                            },
                            body: JSON.stringify({mobile:userdata.mobile,
                                                  countrycode:userdata.countrycode,  
                                                  password: this.state.password,
                                                  jwtaudience:'SmartMedi'  })
                        })
                            .then((response) => response.json())
                            .then((responseJson) => {

                                if (responseJson.messagecode===1003) {
                                    userdata.jwt = responseJson.token;
                                    AsyncStorage.setItem('userInfo',JSON.stringify(userdata))
                                        .then((userInfo) => {
                                            
                                        }).done(() =>{
                                            Actions.homeScreen();
                                // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                                        });
                                // Actions.homeScreen();
                                // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                                
                            }
                                else if(responseJson.messagecode===1004)
                                {
                                    alert(responseJson.message);
                                }
                                else 
                                {
                                    alert("An error occurred while authenticating user! Please try again..");
                                }

                            }).catch((error) => {
                            alert(error);
                        });
                        // Actions.homeScreen(paramsmobile);
                        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                    }
                    else if(responseJson.messagecode===1010)
                    {
                        alert(responseJson.message);
                    }
                    else{
                        alert("An error occurred while creating user! Please try again..");
                    }


                    }).catch((error) => {
                alert(error);
            });
        }
        else if((responseJson.Status==="Success") && (responseJson.Details==="OTP Mismatched")){
            //sessionid=responseJson.Details;
            alert('Please Check the OTP and type again'+responseJson.Details);


        }
        else if((responseJson.Status==="Success") && (responseJson.Details==="OTP Expired")){
            //sessionid=responseJson.Details;

            alert(responseJson.Details);


        }

    })
    .catch((error) => {
        console.error(error);
    });
        // Actions.homeScreen();
    }
     async componentDidMount(){
    
        await AsyncStorage.getItem('userInfo')
        .then((userInfo) => {
            let tempuserdata = userdata;
            let  jsonuserinfo = userInfo ? JSON.parse(userInfo) : tempuserdata;
            userdata.name = jsonuserinfo.name;
            userdata.mobile = jsonuserinfo.mobile;
            this.setState({phone : jsonuserinfo.mobile});
            this.setState({countrycode : jsonuserinfo.countrycode});
            this.setState({username : jsonuserinfo.username});
            userdata.countrycode = jsonuserinfo.countrycode;
            userdata.email = jsonuserinfo.email;
            userdata.username = jsonuserinfo.username;
            userdata.age = jsonuserinfo.age;
            userdata.gender = jsonuserinfo.gender;
            userdata.jwt = jsonuserinfo.jwt;
        }).done(() => {
            // alert((this.state.phone));
        });
    
    }
    render() {
     
        return(

            <View style = { styles.MainContainer }>

                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#f1f1f1f1'/>
                </View>
                <View style={[styles.headerviewhome]}>
            
                <View style={styles.inputContainer}>
                <Icon type='FontAwesome' name='user-circle' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="email-address"
              returnKeyType={"next"}
              editable={false}
              value={this.state.username}
              underlineColorAndroid='transparent'
             >
             {/* {userdata.username} */}
             </TextInput>
        </View>

 <View style={styles.inputContainer}>
        <Icon type='FontAwesome' name='phone' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Phone No"
              keyboardType="phone-pad"
              returnKeyType={"next"}
              editable={false}
              value={"+"+this.state.countrycode+this.state.phone}
              underlineColorAndroid='transparent'
              >
              {/* {userdata.mobile} */}
              </TextInput>
        </View>
        <View style={styles.inputContainer}>
        <Icon type='FontAwesome' name='phone' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="OTP"
              keyboardType="phone-pad"
              returnKeyType={"next"}
              underlineColorAndroid='transparent'
              onChangeText={(otp) => this.setState({otp})}/>
        </View>
<View style={styles.inputContainer}>
<Icoon type='MaterialCommunityIcons' name='key-variant' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              returnKeyType={"done"}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

<TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this._onVerify}>
          <Text style={styles.signUpText}>Verify</Text>
        </TouchableHighlight>


                </View>

            </View>

        );

    }

}


const styles = StyleSheet.create(
    {
        MainContainer:
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#f1f1f1f1',
                // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
            },
            inputContainer: {
                borderBottomColor: '#FFFFFF',
                backgroundColor: '#FFFFFF',
                borderRadius:30,
                borderBottomWidth: 1,
                width:250,
                height:45,
                marginBottom:20,
                marginLeft:50,
                flexDirection: 'row',
                justifyContent:"space-evenly",
                alignItems:'center'
            },
            inputs:{
                height:45,
                marginLeft:16,
                borderBottomColor: '#FFFFFF',
                flex:1,
                justifyContent:"space-evenly",
                alignItems:"center"
            },
            inputscountry:{
                height:45,
                // marginLeft:16,
                borderBottomColor: '#FFFFFF',
                // flex:1,
                justifyContent:"space-evenly",
                alignItems:"center"
            },
            inputIcon:{
              width:30,
              height:30,
              marginLeft:15,
              justifyContent: 'center'
            },
            buttonContainer: {
              height:45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom:20,
              width:250,
              marginLeft:50,
              borderRadius:30,
            },
            signupButton: {
              backgroundColor: "#4d6bcb",
              marginLeft:50,
              justifyContent:"space-evenly",
            },
            signUpText: {
              color: 'white',
            },
        headerviewhome: {
            // height: 250,
            //borderRadius:25,
            // borderWidth:5,
            // borderColor:'#917cb7',
            position: 'absolute',
            backgroundColor: '#f1f1f1f1',
            paddingRight:15,
            paddingLeft:15,
            paddingTop:55,
            left: 0,
            right: 0,
            top:0,

        },
        halfHeight: {
            flex: .5,
            backgroundColor: '#f1f1f1f1',
            alignItems: 'center',
        },




        quarterHeight: {
            flex: .5,
            marginBottom:10,

            alignItems: 'center',
        },


        orTextView:{
            marginTop: 5,
        }
        ,orText:{
            fontSize: 18,
            fontWeight: 'bold',
            color:'#2CA8DB',
            paddingRight:12,
            marginTop: 85,
        },
        orText1:{
            fontSize: 20,
            fontWeight: 'bold',
            color:'#2CA8DB',
            marginTop: 85,
            paddingLeft:12,
            textDecorationLine: 'underline'
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2eacde',
            height: 60,
            fontSize: 20,
            width:DEVICE_WIDTH - 50,
            // borderRadius: 15,
            color:'#f1f1f1f1',
            borderColor: '#2eacde',
            padding:10,
            paddingLeft:15,
            marginTop: 20,
            marginBottom:10,
            textAlign: 'center',
            alignSelf: 'center',
            zIndex: 100
        },
        circle: {
            height: MARGIN,
            width: MARGIN,
            marginTop: -MARGIN,
            //  borderWidth: 1,
            //   borderColor: '#F035E0',
            //   borderRadius: 100,
            alignSelf: 'center',
            zIndex: 99,
            backgroundColor: '#f1f1f1f1',
        },
        text: {
            color: 'white',
            backgroundColor: 'transparent',
            fontSize: 20,
        },

        loginFormTextInput: {
            height: 45,
            fontSize: 14,
            width:DEVICE_WIDTH - 200,
            borderWidth: 0.5,
            borderRadius:10,
            borderColor: '#2CA8DB',
            backgroundColor: '#fafafa',
            padding:4,
            paddingLeft: 5,
            marginLeft:15,
            marginRight: 15,
            marginTop: 30,
            marginBottom:10,
            textAlign: 'center',
            justifyContent:"space-evenly",
            alignSelf: 'center'

        },
        numberFormTextInput:{
            height: 45,
            fontSize: 16,
            width:DEVICE_WIDTH -300,
            borderWidth: 0.5,
            borderRadius:10,
            borderColor: '#2CA8DB',
            backgroundColor: '#fafafa',
            padding:4,
            paddingLeft:10,
            marginLeft:15,
            marginTop: 20,
            marginBottom:0,
            justifyContent:"space-evenly",
            textAlign: 'center',
            alignSelf: 'center'
        },
        ImageStyle: {
            padding: 5,
            // alignItems:"center",
            justifyContent: 'flex-end',
            marginBottom:35,
            marginLeft:180,
            height: 80,
            width: 150,
            resizeMode : 'stretch',
        },

    });


// AppRegistry.registerComponent('reactTest', () => reactTest);



