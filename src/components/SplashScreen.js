import React, { Component } from 'react';

import { Platform, StyleSheet,Dimensions, View, Text, Image,AsyncStorage, TouchableOpacity,StatusBar, Alert } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Moment from "moment/moment";
// import Registration from "./Registration"; // 4.0.0-beta.31
// var mobiledata={mobile: null};
// var paramsmobile ;
export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

        setTimeout(() => {
             // AsyncStorage.getItem('mobileno')
             //    .then((mobileno) => {
             //        // let tempfavticket = favoriteticketdata;
             //        // alert("all tick"+favs+"favticket");
             //        mobiledata.mobile = mobileno;
             //        // this.setState({favticket: favoriteticketdata});
             //        // AsyncStorage.setItem('number', (favoriteticketdata.mobile));
             //        // alert("all tick"+(mobiledata.mobile) + 'varvalue' + mobileno);
             //    }).done(() => {
             //     if(!(mobiledata.mobile)) {
             //         Actions.registerScreen();
             //         // alert("b4reg"+(mobiledata.mobile));
             //     }
             //     else{
             //         Actions.homeScreen();
             //         // alert("b4home"+(mobiledata.mobile));
             //     }
             //
             // });
            Actions.homeScreen();
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

                {/*<Image source={require('../Images/SmarTran_newlogo.png')}*/}
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