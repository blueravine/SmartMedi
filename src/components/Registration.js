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
export default class Registration extends Component {
    // public static var=sessionid;
    constructor(props) {
        super(props);
        this.state = {
            // mobiles: null,
            name: null,
            email   : null,
            gender: null,
            age:null,
            phone:null,
            username:null,
            countrycode:null
            // cca2: "In",
              
        };
        this._onPress = this._onPress.bind(this);
        this.onPressFlag = this.onPressFlag.bind(this);
        // this.selectCountry = this.selectCountry.bind(this);
    }

    _onPress(){
            try {
                AsyncStorage.setItem('userInfo')
                .then((userInfo) => {
                    userInfo.name = this.state.name;
                    userInfo.mobile = this.state.phone;
                    userInfo.countrycode = this.state.countrycode;
                    userInfo.email = this.state.email;
                    userInfo.username = this.state.username;
                    userInfo.age = this.state.age;
                    userInfo.gender = this.state.gender;
                    userInfo.jwt = null;
                    
                }).done(() =>{
                    alert("calling inside fetch user");
                });
            }
            catch(error)
            {
                alert(error);
            }
        
    
                fetch('http://35.240.245.221:49199/user/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
                    method: 'POST', // USE GET, POST, PUT,ETC
                    headers: { //MODIFY HEADERS
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        //    application/x-www-form-urlencoded
                    },
                    body: JSON.stringify({mobile:this.state.phone,
                                          countrycode:this.state.countrycode })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // alert(responseJson.message);
                        
                        if (responseJson.messagecode===1005){
                            
                          
    
                            fetch('https://2factor.in/API/V1/88712423-890f-11e8-a895-0200cd936042/SMS/'+this.state.phone+'/AUTOGEN/Registration', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
                                method: 'GET', // USE GET, POST, PUT,ETC
                                headers: { //MODIFY HEADERS
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    //    application/x-www-form-urlencoded
                                },
                                // body: JSON.stringify({mobile:this.state.phone})
                            })
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    if (responseJson.Status === "Success") {
    
                                        sessionid = responseJson.Details;
    
                                        
                                        Actions.otpScreen();
                                        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    
                                    }
                                    else {
                                        alert(responseJson.message);
    
                                    }
    
                                })
                                .catch((error) => {
                                    console.error(error);
                                });
                            
                        }
                        else  if(responseJson.messagecode===1007) {
                            AsyncStorage.setItem('userInfo')
                                .then((userInfo) => {
                                    userInfo.name = responseJson.User.name;
                                    userInfo.mobile = responseJson.User.mobile;
                                    userInfo.countrycode = responseJson.User.countrycode;
                                    userInfo.email = responseJson.User.email;
                                    userInfo.username = responseJson.User.username;
                                    userInfo.age = responseJson.User.age;
                                    userInfo.gender = responseJson.User.gender;
                                    userInfo.jwt = null;
                                }).done(() =>{
                               
                                    Actions.loginScreen();
                                
    
                            });
    
                        }
    
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                    
    
    }
    componentDidMount() {
        this.setState({
          pickerData: this.phone.getPickerData(),
        });
      }
    
      onPressFlag() {
        this.countryPicker.openModal();
      }
    
    //   selectCountry(country) {
    //     this.phone.selectCountry(country.cca2.toLowerCase());
    //     this.setState({ cca2: country.cca2 });
    //   }
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
              placeholder="Full Name"
              keyboardType="email-address"
              returnKeyType={"next"}
              value={this.state.name}
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

 <View style={styles.inputContainer}>
                <Icon type='FontAwesome' name='user-circle' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Username"
              keyboardType="email-address"
              returnKeyType={"next"}
              value={this.state.username}
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        {/* <View  style={styles.inputContainercountry}>
        <PhoneInput style={styles.inputscountry}
          ref={(ref) => {
            this.phone = ref;
          }}
          onPressFlag={this.onPressFlag}
        />
         <CountryPicker 
          ref={(ref) => {
            this.countryPicker = ref;
          }}
          onChange={value => this.selectCountry(value)}
          translation="eng"
          cca2={this.state.cca2}
        >
        <View />
        </CountryPicker></View> */}
 <View style={styles.inputContainer}>
 {/* <TextInput style={styles.inputscountry}
             placeholder="+91" 
             editable={false}
             selectTextOnFocus={false}
              underlineColorAndroid='transparent'
              /> */}
            
        <Icon type='FontAwesome' name='phone' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
      
        <View  style={styles.inputContainercountry}>
        <PhoneInput style={styles.inputscountry}
          ref={(ref) => {
            this.phone = ref;
          }}
          onPressFlag={this.onPressFlag}
        />
         <CountryPicker 
          ref={(ref) => {
            this.countryPicker = ref;
          }}
          onChange={(countrycode) => this.setState({countrycode:Number(countrycode)})}
          translation="eng"
        //   cca2={this.state.cca2}
        >
        <View />
        </CountryPicker></View>
          <TextInput style={styles.inputs}
              placeholder="Phone No"
              keyboardType="phone-pad"
              maxLength={10}
              returnKeyType={"next"}
              value={this.state.phone}
              underlineColorAndroid='transparent'
              onChangeText={(phone) => this.setState({phone})}/>
        </View>

        <View style={styles.inputContainer}>
        <Icoon type='MaterialCommunityIcons' name='email-outline' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Email(optional)"
              keyboardType="email-address"
              returnKeyType={"next"}
              value={this.state.email}
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
        <Icons type='Foundation' name='male-female' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Gender"
              keyboardType="email-address"
              returnKeyType={"next"}
              value={this.state.gender}
              underlineColorAndroid='transparent'
              onChangeText={(gender) => this.setState({gender})}/>
        </View>

        <View style={styles.inputContainer}>
        <Icon type='FontAwesome' name='calendar' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Age"
              keyboardType="phone-pad"
              returnKeyType={"done"}
              value={this.state.age}
              underlineColorAndroid='transparent'
              onChangeText={(age) => this.setState({age})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this._onPress}>
          <Text style={styles.signUpText}>Register</Text>
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
            inputContainercountry: {
                width:70,
                marginLeft:20,
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



