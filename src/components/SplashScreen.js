import React, { Component } from 'react';

import { Platform, StyleSheet,Dimensions, View, Text, Image,AsyncStorage, TouchableOpacity,StatusBar, Alert } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Moment from "moment/moment";
// import Registration from "./Registration"; // 4.0.0-beta.31
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null};
// var paramsmobile ;
export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

        setTimeout(() => {
             AsyncStorage.getItem('userInfo')
                .then((userInfo) => {
                    // alert(JSON.stringify(userInfo));
                    let tempuserdata = userdata;
                   let  jsonuserinfo = userInfo ? JSON.parse(userInfo) : tempuserdata;
                  
                    userdata.mobile = jsonuserinfo.mobile;
                    userdata.jwt = jsonuserinfo.jwt;
                    userdata.countrycode = jsonuserinfo.countrycode;
                    // alert((userdata.mobile)+(userdata.jwt))
                    
                }).done(() => {
                 if(!(userdata.mobile)) {
                     Actions.registerScreen();
                     // alert("b4reg"+(mobiledata.mobile));
                 }
                 else if(!(userdata.jwt)){
                     Actions.loginScreen();
                     // alert("b4home"+(mobiledata.mobile));
                 }
                 else{
                    fetch('https://smartmedi.blueravine.in/user/token/verify', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
                    method: 'POST', // USE GET, POST, PUT,ETC
                    headers: { //MODIFY HEADERS
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization':'Bearer '+userdata.jwt,
                        'mobile':userdata.mobile,
                        'countrycode':userdata.countrycode,
                        'jwtaudience':'SmartMedi'
                        //    application/x-www-form-urlencoded
                    },
                    // body: JSON.stringify({mobile:userdata.mobile,
                    //     jwtaudience:'SmartMedi'  })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {

                        if (responseJson.messagecode===1006) {
                            // Actions.loginScreen({phone:this.props.phone});
                            Actions.homeScreen();
                            // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                        }
                        else
                        {
                            Actions.loginScreen();
                            // alert("user creation failed");
                        }


                    }).catch((error) => {
                    alert(error);
                });
                 }
             
             });
            // Actions.homeScreen();
            // Actions.registerScreen();

        }, 5000)

    }

    render() {
        // paramsmobile = {};
        // paramsmobile = {
        //     mobileno :this.props.tempnumber,
        // };
        return (
            <View style={styles.SplashScreen_ChildView}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#f1f1f1f1'/>
                </View>
            <View style={{  justifyContent: 'space-between',
                alignItems: 'center',
               }}>

                {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}

                {/*<Image source={require('../Images/SmartMedi_newlogo.png')}*/}
                       {/*style={{justifyContent: 'space-between',*/}
                           {/*alignItems: 'center',}} />*/}
                <View style={{flexDirection:"row",justifyContent:'flex-start',marginTop:10}}>

                    <Text note style={{fontSize:20,color:'#2eacde'}}> Smart </Text>
                    <Text note style={{fontSize:20,color:'#46de21'}}>Medi </Text>
                </View>

            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        SplashScreen_ChildView:
            {
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f1f1f1f1',
                flex:1,
            },
    });