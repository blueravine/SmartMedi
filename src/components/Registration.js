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
import CountryPicker, {
    getAllCountries
  } from 'react-native-country-picker-modal';
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
        // super(props);
        super(props)
        // let userLocaleCountryCode = DeviceInfo.getDeviceCountry()
        const userCountryData = getAllCountries()
        //   .filter(country => NORTH_AMERICA.includes(country.cca2))
        //   .filter(country => country.cca2 === userLocaleCountryCode)
        //   .pop()
        let callingCode = null
        let cca2 = null
        if (!cca2 || !userCountryData) {
          cca2 = 'US'
          callingCode = '1'
        } else {
          callingCode = userCountryData.callingCode
        }
        this.state = {
            // mobiles: null,
            name: null,
            email   : null,
            gender: null,
            age:null,
            phone:null,
            username:null,
            countrycode:null,
            usereditableflag:false,
            cca2,
            callingCode
            // cca2: "IN",
              
        };
        this._onPress = this._onPress.bind(this);
    }


    _onPress(){

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
                    userdata.name = this.state.name;
                    userdata.mobile = this.state.phone;
                    userdata.countrycode = this.state.callingCode;
                    userdata.email = this.state.email;
                    userdata.username = this.state.username;
                    userdata.age = this.state.age;
                    userdata.gender = this.state.gender;
                    userdata.jwt = null;
            AsyncStorage.setItem('userInfo',JSON.stringify(userdata))
                    .then((userInfo) => {
                        //do nothing
                    }).done(() =>{
                        // alert("calling inside fetch user");
                        sessionid = responseJson.Details;
                        Actions.otpScreen();
                });
            }
            else {
                alert(responseJson.message);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    _onPhoneEntered(){
        fetch('https://smartmedi.blueravine.in/user/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
            method: 'POST', // USE GET, POST, PUT,ETC
            headers: { //MODIFY HEADERS
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //    application/x-www-form-urlencoded
            },
            body: JSON.stringify({mobile:this.state.phone,
                                  countrycode:this.state.callingCode })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // alert(responseJson.message);
                
                if (responseJson.messagecode===1005){
                    this.setState({usereditableflag: true});
  
                }
                else  if(responseJson.messagecode===1007) {

                    userdata.name = responseJson.User.name;
                            userdata.mobile = responseJson.User.mobile;
                            userdata.countrycode = responseJson.User.countrycode;
                            userdata.email = responseJson.User.email;
                            userdata.username = responseJson.User.username;
                            userdata.age = responseJson.User.age;
                            userdata.gender = responseJson.User.gender;
                            userdata.jwt = null;
                    AsyncStorage.setItem('userInfo',JSON.stringify(userdata))
                        .then((userInfo) => {
                            
                        }).done(() =>{
                       
                            Actions.loginScreen();
                        

                    });

                }

            })
            .catch((error) => {
                console.error(error);
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
            
            <Icon type='FontAwesome' name='phone' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          
            <View  style={styles.inputContainercountry}>
            <CountryPicker
            //   countryList={NORTH_AMERICA}
              onChange={value => {
                this.setState({ cca2: value.cca2, callingCode: value.callingCode })
              }}
              cca2={this.state.cca2}
              translation="eng"
            />
           </View>
              <TextInput style={styles.inputs}
                  placeholder="Phone No"
                  keyboardType="phone-pad"
                  maxLength={10}
                  onBlur={() => {this._onPhoneEntered()}}
                  returnKeyType={"next"}
                  value={this.state.phone}
                  underlineColorAndroid='transparent'
                  onChangeText={(phone) => this.setState({phone})}/>
            </View> 
                <View style={styles.inputContainer}>
                <Icon type='FontAwesome' name='user-circle' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Full Name"
              editable={this.state.usereditableflag}
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
              editable={this.state.usereditableflag}
              keyboardType="email-address"
              returnKeyType={"next"}
              value={this.state.username}
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>
        <View style={styles.inputContainer}>
        <Icoon type='MaterialCommunityIcons' name='email-outline' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Email(optional)"
              keyboardType="email-address"
              editable={this.state.usereditableflag}
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
              editable={this.state.usereditableflag}
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
              editable={this.state.usereditableflag}
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
                width:20,
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



