import React, { Component } from 'react';

import { Platform, StyleSheet,Dimensions, View, Text, Image,AsyncStorage, TouchableOpacity,StatusBar, Alert } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Moment from "moment/moment";
// import Registration from "./Registration"; // 4.0.0-beta.31
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null,secretquestionid:null};
// var paramsmobile ;
global.callerscreen ;
global.currentscreen ;
export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        currentscreen='splash';

        setTimeout(() => {
             AsyncStorage.getItem('userInfo')
                .then((userInfo) => {
                    
                    let tempuserdata = userdata;
                   let  jsonuserinfo = userInfo ? JSON.parse(userInfo) : tempuserdata;
                  
                    userdata.mobile = jsonuserinfo.mobile;
                    userdata.jwt = jsonuserinfo.jwt;
                    userdata.countrycode = jsonuserinfo.countrycode;
                    
                }).done(() => {
                 if(!(userdata.mobile)) {
                     callerscreen = currentscreen;
                     Actions.registerScreen();
                 }
                 else{
                     //check if mobile number exists in server
        fetch('https://interface.blueravine.in/smartmedi/user/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
            method: 'POST', // USE GET, POST, PUT,ETC
            headers: { //MODIFY HEADERS
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //    application/x-www-form-urlencoded
            },
            body: JSON.stringify({mobile:userdata.mobile,
                                  countrycode:userdata.countrycode })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                
                if (responseJson.messagecode===1005){
                    //User not found in server
                    
                    callerscreen = currentscreen;
                    Actions.registerScreen();
                }
                else  if(responseJson.messagecode===1007) {
                    
                            userdata.name = responseJson.User.name;
                            userdata.mobile = responseJson.User.mobile;
                            userdata.countrycode = responseJson.User.countrycode;
                            userdata.email = responseJson.User.email;
                            userdata.username = responseJson.User.username;
                            userdata.age = responseJson.User.age;
                            userdata.gender = responseJson.User.gender;
                            userdata.secretquestionid = responseJson.User.secretquestionid;


                    AsyncStorage.setItem('userInfo',JSON.stringify(userdata))
                        .then((userInfo) => {
                            
                        }).done(() =>{
                       
                            // Actions.loginScreen();
                     //************
                     if(!(userdata.jwt)){
                         
                     callerscreen = currentscreen;
                        Actions.loginScreen();
                    }
                    else{
                        fetch('https://interface.blueravine.in/smartmedi/user/token/verify', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
                                
                     callerscreen = currentscreen;
                                Actions.homeScreen();
                                // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                            }
                            else
                            {
                                
                     callerscreen = currentscreen;
                                Actions.loginScreen();
                            }


                        }).catch((error) => {
                        alert(error);
                    });
                    }
                    //***********
                       

                    });


                }

            })
            .catch((error) => {
                console.error(error);
            });
                     

                }
             });
            // Actions.homeScreen();
            // Actions.registerScreen();

        }, 3000)

    }

    render() {
        return (
            <View style={styles.SplashScreen_ChildView}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#4d6bcb'/>
                </View>
            <View style={{  justifyContent: 'space-between',
                alignItems: 'center',
               }}>
                <View style={{flexDirection:"row",justifyContent:'flex-start',marginTop:10}}>

                    <Text note style={{fontSize:20,color:'#2eacde'}}> Smart</Text>
                    <Text note style={{fontSize:20,color:'#46de21'}}>Medi</Text>
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