import React, { Component } from 'react';
import {Navigator,
    Platform, StyleSheet, View, Text,text,TextInput, Image,ActivityIndicator, TouchableOpacity, Alert,AsyncStorage,
    AppRegistry,TouchableHighlight,StatusBar,Keyboard,Dimensions,Button,ScrollView,Animated,
    Easing,BackHandler,
} from 'react-native';
import {Card,icon} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux'; // 4.0.0-beta.31
import Icon from 'react-native-vector-icons/FontAwesome';
import Icoon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Foundation';
import Iccon from 'react-native-vector-icons/Feather'
import PhoneInput from 'react-native-phone-input';
import CountryPicker, {
    getAllCountries
  } from 'react-native-country-picker-modal';
import Toast from 'react-native-simple-toast';
import Snackbar from 'react-native-snackbar';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
global.sessionid ;
global.callerscreen ;
import PropTypes from 'prop-types';
import Moment from "moment/moment";
import { Dropdown } from 'react-native-material-dropdown';
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,
    countrycode:null,countryflag:null,selectedcountry:null,secretquestionid:null};
var genderselect = [
    {
    value: 'MALE',
}, {
    value: 'FEMALE',
}
];    
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
            // countrycode:null,
            usereditableflag:false,
            uservisibiltyflag:false,
            invalidemail:'',
            cca2,
            callingCode,
            selectedcountry:'United States'
            // cca2: "IN",
              
        };
        this._validateemail = this._validateemail.bind(this);
        this._onPress = this._onPress.bind(this);
        this.onChangegenderTextPress=this.onChangegenderTextPress.bind(this);
    }

    async componentDidMount(){
    
        await AsyncStorage.getItem('userInfo')
        .then((userInfo) => {
            let tempuserdata = userdata;
            let  jsonuserinfo = userInfo ? JSON.parse(userInfo) : tempuserdata;
            userdata.name = jsonuserinfo.name;
            userdata.mobile = jsonuserinfo.mobile;
            userdata.countrycode = jsonuserinfo.countrycode;
            userdata.email = jsonuserinfo.email;
            userdata.username = jsonuserinfo.username;
            userdata.age = jsonuserinfo.age;
            userdata.gender = jsonuserinfo.gender;
            userdata.jwt = jsonuserinfo.jwt;
            userdata.countryflag = jsonuserinfo.countryflag;
            userdata.secretquestionid = jsonuserinfo.secretquestionid;
            userdata.selectedcountry = jsonuserinfo.selectedcountry;
        }).done(() => {
                    // alert(JSON.stringify(userdata));

            if(userdata.mobile){
                
            this.setState({phone : userdata.mobile,
                         callingCode : userdata.countrycode,
                         username : userdata.username,
                         name: userdata.name,
                        email   : userdata.email,
                        gender: userdata.gender,
                        age:userdata.age,
                        usereditableflag:true,
                        uservisibiltyflag:true,
                        cca2:userdata.countryflag,
                        selectedcountry:userdata.selectedcountry});
            }
        });
    
    }

    onChangegenderTextPress(value){

        // this.setState({selectedvalue: value});
        this.setState({gender: value});
    }

    ShowHideActivityIndicator = () =>{

        this.setState({loading: true});
                setTimeout(() => {
            this._onPress();
                    // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        }, 500)
            // this.setState({loading: false})
    };

    ShowHideActivityIndicatoruser = () =>{

        this.setState({loading: true});
                setTimeout(() => {
            this._onPhoneEntered();
                    // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        }, 500)
            // this.setState({loading: false})
    };
    _onPress(){
        Keyboard.dismiss();
        fetch('https://2factor.in/API/V1/88712423-890f-11e8-a895-0200cd936042/SMS/+'+this.state.callingCode+this.state.phone+'/AUTOGEN/SmartMediReg', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
                    userdata.countrycode = parseInt(this.state.callingCode);
                    userdata.email = this.state.email;
                    userdata.username = this.state.username;
                    userdata.age = this.state.age;
                    userdata.gender = this.state.gender;
                    userdata.jwt = null;
                    userdata.countryflag=this.state.cca2;
                    userdata.selectedcountry=this.state.selectedcountry;
            AsyncStorage.setItem('userInfo',JSON.stringify(userdata))
                    .then((userInfo) => {
                        //do nothing
                    }).done(() =>{
                        
                        sessionid = responseJson.Details;
                        callerscreen='registration';
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
    _validateemail(emailtext){
        let reg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ;
        
        if(reg.test(emailtext) === false)
        {
            this.setState({email:emailtext,
                            invalidemail:'Please enter a valid email.'})
            return false;
         }
        else {
            this.setState({email:emailtext,
                invalidemail:''})
        }
    }
    _onPhoneEntered(){
        Keyboard.dismiss();
        fetch('https://interface.blueravine.in/smartmedi/user/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
                
                if (responseJson.messagecode===1005){
                    this.setState({uservisibiltyflag: true});
  
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
                            userdata.secretquestionid = responseJson.User.secretquestionid;
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
                        backgroundColor='#4d6bcb'/>
                </View>
                <View style={[styles.headerviewhome]}>
                <ScrollView><View style={{marginBottom:200}}>

            {/* <Card style={{backgroundColor:'#f1f1f1f1'}}> */}
                <Text style={{marginBottom:5,color:'#4d6bcb','textAlign':'center'}}>Please tap on flag to select Country</Text>
     
             <View style={styles.inputselectpickerContainer}>
            
            {/* <Icon type='FontAwesome' name='phone' size={20} color="#4d6bcb" style={{marginLeft:15}}/> */}
          
            <View  style={styles.inputContainercountry}>
            <View style={{flex:3}}>
            <CountryPicker
            //   countryList={NORTH_AMERICA}
              onChange={(value) => {
                this.setState({ cca2: value.cca2, callingCode: value.callingCode,
                selectedcountry: value.name})
              }}
              cca2={this.state.cca2}
              translation="eng"
              showCallingCode={true}
              filterable={true}
              closeable={true}
            />
            </View>
           <Text style={{flex:7}}>{this.state.selectedcountry}</Text>
           </View>
           <View  style={styles.inputContainercountry}>
           <Text style={{marginLeft:20, flex:3}}>(+{this.state.callingCode})</Text>
              <TextInput style={styles.inputsPhone}
                  placeholder="Phone No"
                  keyboardType="phone-pad"
                  maxLength={10}
                  onFocus={() => {
                    this.setState({uservisibiltyflag: false,
                    loading:false});
                  }}
                  onBlur={() => {
                    if(!this.state.phone){
                                // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Phone no field cannot be empty!',
                                    duration: Snackbar.LENGTH_LONG,
                                });
                            }
                            else{
                                this.ShowHideActivityIndicatoruser()}}}
                  returnKeyType={"next"}
                  value={this.state.phone}
              placeholderTextColor={'#000'}
                  underlineColorAndroid='transparent'
                  onChangeText={(phone) => this.setState({phone})}/>
                  <Iccon type='Feather' name='arrow-right-circle' size={20} color="#4d6bcb" style={{marginRight:10}}/>
              </View>
            </View> 
            
            {(this.state.uservisibiltyflag) &&
            <View>
                <View style={styles.inputContainer}>
                <Icon type='FontAwesome' name='user-circle' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Full Name"
            //   editable={this.state.usereditableflag}
              keyboardType="email-address"
              onFocus={() => {
                    this.setState({loading:false});
                  }}
              returnKeyType={"next"}
              value={this.state.name}
              placeholderTextColor={'#000'}
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>

 <View style={styles.inputContainer}>
                <Icon type='FontAwesome' name='user-circle' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Username"
            //   editable={this.state.usereditableflag}
              keyboardType="email-address"
              returnKeyType={"next"}
              value={this.state.username}
              placeholderTextColor={'#000'}
              underlineColorAndroid='transparent'
              onChangeText={(username) => this.setState({username})}/>
        </View>

        <Text  style={{fontSize:10,textAlign:'center',color:'#F80617',marginBottom:2}} >
        {this.state.invalidemail}  </Text>

        <View style={styles.inputContainer}>
        <Icoon type='MaterialCommunityIcons' name='email-outline' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Email(optional)"
              keyboardType="email-address"
            //   editable={this.state.usereditableflag}
              returnKeyType={"next"}
              value={this.state.email}
              placeholderTextColor={'#000'}
              underlineColorAndroid='transparent'
              onChangeText={this._validateemail}/>
              {/* onChangeText={(email) => this.setState({email})}/> */}
        </View>
       
                                   
        <Text style={{fontSize:12,marginBottom:2,color:'#4d6bcb','textAlign':'center',fontStyle: 'italic'}}>Age and Gender are used for determining normal range of test result.</Text>
        <View style={styles.inputContainer}>
        <Icons type='Foundation' name='male-female' size={20} color="#4d6bcb" style={{marginLeft:55}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          {/* <TextInput style={styles.inputs}
              placeholder="Gender"
            //   editable={this.state.usereditableflag}
              keyboardType="email-address"
              returnKeyType={"next"}
              value={this.state.gender}
              underlineColorAndroid='transparent'
              onChangeText={(gender) => this.setState({gender})}/> */}
              
              <Dropdown
              placeholder='Please select gender'
                                            // value={'Please select gender'}
                                            baseColor={'#000'}
                                            value={this.state.gender ? this.state.gender : 'Please select gender'}
                                            textColor={'#000'}
                                            selectedItemColor={'#000'}
                                            itemColor={'#000'}
                                            fontSize={13}
                                            itemPadding={8}
                                            dropdownPosition={0}
                                            // pickerStyle={{paddingLeft:200}}
                                            containerStyle={{width:250,height:45,marginTop:15,marginLeft:50,borderRadius:20,paddingTop:2,paddingBottom:5,paddingLeft:width*0.04}}
                                            rippleCentered={true}
                                            overlayStyle={{position:'absolute',width:250,marginLeft:60,marginTop:390}}
                                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                            dropdownOffset={top= 0}
                                            data={genderselect}
                                            // valueExtractor={({value})=> value}
                                            onChangeText={(value)=>{this.onChangegenderTextPress(value)}}
                                        />
        </View>

        <View style={styles.inputContainer}>
        <Icon type='FontAwesome' name='calendar' size={20} color="#4d6bcb" style={{marginLeft:15}}/>
          {/* <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/> */}
          <TextInput style={styles.inputs}
              placeholder="Age"
            //   editable={this.state.usereditableflag}
              keyboardType="phone-pad"
              returnKeyType={"done"}
              value={this.state.age}
              placeholderTextColor={'#000'}
              underlineColorAndroid='transparent'
              onChangeText={(age) => this.setState({age})}/>
        </View>
     
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} 
        
        onPress={() => {        if(!this.state.username){
                                // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Username field cannot be empty!',
                                    duration: Snackbar.LENGTH_LONG,
                                });
                            }
                            else if(this.state.invalidemail){
                                // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Please provide a valid email address!',
                                    duration: Snackbar.LENGTH_LONG,
                                });
                            }
                            else if(!this.state.gender){
                                // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Gender field cannot be empty!',
                                    duration: Snackbar.LENGTH_LONG,
                                });
                                // this.resetData();
                            }
                            else if(!this.state.name){
                                // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Name field cannot be empty!',
                                    duration: Snackbar.LENGTH_LONG,
                                });
                                // this.resetData();
                            }
                            else if(!this.state.age){
                                // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Age field cannot be empty!',
                                    duration: Snackbar.LENGTH_LONG,
                                });
                                // this.resetData();
                            }
                            else{
                                // Actions.searchScreen(params);
                                this.ShowHideActivityIndicator();
                                // this.saveTestsData();
                                // this._onButtonPressed();
                            }}}>
        
        
        {/* onPress={this.ShowHideActivityIndicator}> */}
          <Text style={styles.signUpText}>Register</Text>
        </TouchableHighlight>
        </View>
    }
    {
                        // Here the ? Question Mark represent the ternary operator.
                        //style={{backgroundColor:'#FFFFFF',width:width-220}}
                        this.state.loading ?  <ActivityIndicator color = '#4d6bcb'
                                                                 size = "large" style={{padding: 20}} /> : null
                    }
                    {/* </Card> */}
                    </View>
                    
    </ScrollView>
   
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
                // width:250,
                // height: 30,
                flexDirection:'row',
                // marginLeft: 10,
                marginBottom: 2,
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            },
            inputselectpickerContainer: {
                borderBottomColor: '#FFFFFF',
                backgroundColor: '#FFFFFF',
                // borderRadius:30,
                borderBottomWidth: 1,
                width:250,
                height:80,
                marginBottom:20,
                marginLeft:50,
                flexDirection: 'column',
                justifyContent:'space-evenly'
            },
            inputs:{
                height:45,
                marginLeft:16,
                borderBottomColor: '#FFFFFF',
                flex:1,
                justifyContent:"space-evenly",
                alignItems:"center"
            },
            inputsPhone:{
                // width: 200,
                // height: 30,
                // marginLeft:16,
                borderBottomColor: '#FFFFFF',
                flex:7,
                // justifyContent:"space-evenly",
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
            bottom:0,
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



