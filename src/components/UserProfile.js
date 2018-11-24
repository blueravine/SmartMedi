import React, { Component } from 'react';
import { Image,StyleSheet,TouchableHighlight,TouchableOpacity,ImageBackground,AsyncStorage,BackHandler,TextInput,PixelRatio,
    Dimensions,ScrollView,Alert,Keyboard,StatusBar} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab, Button, Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.31
import SmartPicker from 'react-native-smart-picker'
import Iconns from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Icoon from 'react-native-vector-icons/MaterialIcons';
import MultiToggleSwitch from 'react-native-multi-toggle-switch';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation'
import { TextField } from 'react-native-material-textfield';
import ImagePicker from 'react-native-image-picker';
var params;
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iccon from 'react-native-vector-icons/Entypo';
import Icoons from 'react-native-vector-icons/SimpleLineIcons';
import Iccons from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const MARGIN = 40;
var testtdetail;
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null};
var testarray=[];
import { Dialog } from 'react-native-simple-dialogs';
// import { BottomNavigation } from 'react-native-material-ui';
// var Accordion = require('react-native-accordion');
const card      = {card: {width: 100,height:300,borderWidth: 3,
        borderRadius: 3,
        borderColor: '#FFFFFF',
        padding: 10}};
const cardItem = {cardItem: {fontSize: 40}};
import Accordion from 'react-native-collapsible/Accordion';
import Moment from "moment/moment";
var paramsmobile={tempnumber:''};
var genderselect = [
    {
    value: 'MALE',
}, {
    value: 'FEMALE',
}
]; 
export default class UserProfile extends Component {


    constructor() {
        super();

        this.state= {
            activeTab: 'profile',
            avatarSource: null,
            name: '',
            email   : '',
            gender: '',
            phone:'',
            username:'',
            countrycode:'',
            headername:' User Profile',
            ageofuser:'',
            usereditableflag:false,
            invalidemail:'',
            feedbacknotes:''
        };
        this._validateemail = this._validateemail.bind(this);
        this.onChangegenderTextPress=this.onChangegenderTextPress.bind(this);
    }

    tabs = [
        {
            key:"home",
            // icon={<Image source={require('../Images/home_icon.png')} color="#2eacde" name="Search" style={{ width: 20, height: 20 }} />}
            label:"Tests",
            icon : 'description',
            barColor: '#4d6bcb',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"reports",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'timeline' ,
            label:"Reports",
            barColor: '#4d6bcb',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"alerts",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'schedule' ,
            label:"Alerts",
            barColor: '#4d6bcb',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"profile",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'person-pin' ,
            label:"Profile",
            barColor: '#4d6bcb',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"feedback",
            // icon={<Image source={require('../Images/home_icon.png')} color="#2eacde" name="Search" style={{ width: 20, height: 20 }} />}
            label:"Feedback",
            icon : 'comment',
            barColor: '#4d6bcb',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
    ];


    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="white" name={icon} />

    )

    state = {}

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    _handleTabPress(pressedKey) {
        switch (pressedKey) {
            case 'home':
                Actions.homeScreen();
                break;
            case 'reports':
                Actions.trendScreen();
                break;
            case 'alerts':
                Actions.alertScreen();
                break;
            case 'profile':
                // Actions.profileScreen();
                break;
                case 'feedback':
                (this.openDialog(true))
                    break;
            default:

        }
    }


    renderTab = ({ tab, isActive }) => (
        <ShiftingTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    _onPressediticon(){
        this.setState({usereditableflag: true,
            headername:'Edit User'});
    }

   async _EditUserInformation() {
    Keyboard.dismiss();
    // alert('testing...');
    fetch('https://smartmedi.blueravine.in/user/update/mobile',
     { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
    body: JSON.stringify({  "name": this.state.name,
                            "mobile": this.state.phone,
                            "countrycode": this.state.countrycode,
                            "email": this.state.email,
                            "username": this.state.username,
                            "age": this.state.ageofuser,
                            "gender": this.state.gender })
    }) //fetch
    .then((response) => response.json())
    .then((responseJson) => {

    if (responseJson.messagecode===1008) {
        userdata.name = responseJson.User.name;
        userdata.age = responseJson.User.age;
        userdata.email = responseJson.User.email;
        userdata.gender = responseJson.User.gender;
        // alert(JSON.stringify(userdata));
        AsyncStorage.setItem('userInfo',JSON.stringify(userdata))
            .then((userInfo) => {
                //do nothing
            }).done(); //done
    }
    else {
        //###Need to handle error in retrieving test results from server
    }
    }).catch((error) => {
        alert(error);
    });
   }

   async componentDidMount() {
    await AsyncStorage.getItem('userInfo')
    .then((userInfo) => {
        // alert(userInfo);
        let tempuserdata = userdata;
        let  jsonuserinfo = userInfo ? JSON.parse(userInfo) : tempuserdata;
        userdata.name = jsonuserinfo.name;
        userdata.mobile = jsonuserinfo.mobile;
        this.setState({phone : jsonuserinfo.mobile,
            username : jsonuserinfo.username,
            name : jsonuserinfo.name,
            countrycode : jsonuserinfo.countrycode,
            ageofuser : jsonuserinfo.age,
            gender : jsonuserinfo.gender,
            email : jsonuserinfo.email});
        userdata.countrycode = jsonuserinfo.countrycode;
        userdata.email = jsonuserinfo.email;
        userdata.username = jsonuserinfo.username;
        userdata.age = jsonuserinfo.age;
        userdata.gender = jsonuserinfo.gender;
        userdata.jwt = jsonuserinfo.jwt;
    }).done(() => {
        // alert(JSON.stringify(userdata.jwt));
    });
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        Actions.homeScreen();
        return true;
    }
    
    _validateemail(emailtext){
        let reg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ;
        
        if(reg.test(emailtext) === false)
        {
            // alert("Please enter a valid email.");
            this.setState({email:emailtext,
                            invalidemail:'Please enter a valid email.'})
            return false;
         }
        else {
            this.setState({email:emailtext,
                invalidemail:''})
        }
    }


    ShowHideActivityIndicator = () =>{

        this.setState({loading: true});
        setTimeout(() => {
            this._EditUserInformation();
            // Actions.homeScreen();
            this.setState({usereditableflag: false,
                            headername:'User Profile',
                            invalidemail:''});
            Snackbar.show({
                title: 'User Updated  succesfully',
                duration: Snackbar.LENGTH_SHORT,
            });
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        }, 500)
        // this.setState({loading: false})
    };

    
    onChangegenderTextPress(value){

        // this.setState({selectedvalue: value});
        this.setState({gender: value});
    }
    _onPresstext(){
        Alert.alert(
            'Exit App',
            'Are you sure you want to login with different Mobile Number?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => this._onPresschangeMobileNo()
            }, ]
            , {
                cancelable: false
            }
        );
        // Actions.registerScreen();
     }
     _onPresschangeMobileNo(){
         
        AsyncStorage.removeItem('userInfo')
        AsyncStorage.removeItem('testInfo')
        AsyncStorage.removeItem('usertestInfo')
        AsyncStorage.removeItem('useralertInfo')
        Actions.registerScreen();
     }
     _onPressCancel(){
        this.setState({usereditableflag: false,
            headername:'User Profile',
            invalidemail:'',
            phone : userdata.mobile,
            username : userdata.username,
            name : userdata.name,
            countrycode : userdata.countrycode,
            ageofuser : userdata.age,
            gender : userdata.gender,
            email : userdata.email});

     }

    render() {

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#1C306F'/>
                </View>
                {/*<ScrollView >*/}
                <View style={[styles.headerview]}>
                    <ScrollView ref={ (c) => {this.scroll = c}} >
                        {/*<Container style={[styles.headerview]}>*/}
                        {/*<Content>*/}
                        <View style={{flexDirection:"row",justifyContent:'flex-start',backgroundColor:'#4d6bcb',height:50}}>
                            <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  {this.state.headername}</Text>
                            
                            {(this.state.usereditableflag) &&
                            <TouchableOpacity style={{marginTop:10,paddingRight:10,paddingLeft:10}}
                            onPress={this.ShowHideActivityIndicator}>
                            <Icon type='MaterialIcons' name='done' size={25} color="#FFFFFF"/>
                            
                            {/* <Text>ADD</Text> */}
                            </TouchableOpacity>
                            }
                            {(this.state.usereditableflag) &&
                            <TouchableOpacity style={{marginTop:10,paddingRight:10,paddingLeft:10}}
                            onPress={() => {this._onPressCancel()}}>
                            <Icon type='MaterialIcons' name='close' size={25} color="#FFFFFF"/>
                            
                            {/* <Text>ADD</Text> */}
                            </TouchableOpacity>
                            }
                            {/* {this._onPressediticon} */}
                            {(!this.state.usereditableflag) &&
                            <TouchableOpacity style={{marginTop:10,paddingRight:10,paddingLeft:10}}
                            onPress={() => {this._onPressediticon()}}>
                            <Icon type='MaterialIcons' name='edit' size={25} color="#FFFFFF"/>
                            {/* <Text>EDIT</Text> */}
                            </TouchableOpacity>
                            }
                        </View>
                         
                        <Card style={{height:500, borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                            borderTopLeftRadius:10,borderLeftWidth:10,shadowColor:"#f1f1f1f1",borderColor:'#FFFFFF'}}>
                           
                            <View style={{flexDirection:'row',justifyContent:'space-evenly',height:50}}>
                                <Iconns type='FontAwesome' name='user-circle' size={30} color="grey"/>
                                <Text note style={{fontSize:18,textAlign:'left',color:'#000'}} > User Information  </Text>
                               
                            </View>
                            <TouchableOpacity style={{marginLeft:20}}
                                onPress={() => {this._onPresstext()}}>
                                <Text note style={{fontSize:12,textAlign:'right',color:'#4d6bcb'}} >
                                                        Click to change Mobile Number  </Text>
                                                        </TouchableOpacity>
                                <View style={{flexDirection:"column",justifyContent:"space-evenly"}}>
                            
                                    <TextField label="Phone No"
                                               lineHeight={30}
                                               keyboardType='phone-pad'
                                               value={"+"+this.state.countrycode+this.state.phone}
                                               editable={false}
                                               fontSize={16}
                                        // onChangeText={(itemValue) => this.setState({selected2: itemValue})}
                                               containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>


                                    <TextField label="Name"
                                               lineHeight={30}
                                        value={this.state.name}
                                               editable={this.state.usereditableflag}
                                               fontSize={16}
                                        onChangeText={(itemValue) => this.setState({name: itemValue})}
                                               containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>


                                {/* onChangeText={(itemValue) => this.setState({email: itemValue})} */}
                                <TextField label="Email"
                                               lineHeight={30}
                                        value={this.state.email}
                                        editable={this.state.usereditableflag}
                                               fontSize={16}
                                               onChangeText={this._validateemail}
                                               containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>
                                   {(this.state.usereditableflag) &&
                                    <Text note style={{fontSize:10,textAlign:'left',color:'#F80617'}} >
                                    {this.state.invalidemail}  </Text>
                                   }
                                    <TextField label="Username"
                                               lineHeight={30}
                                        value={this.state.username}
                                               editable={false}
                                               fontSize={16}
                                        onChangeText={(itemValue) => this.setState({username: itemValue})}
                                               containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>


                                        <TextField label="Age"
                                                   lineHeight={30}
                                            value={this.state.ageofuser.toString()}
                                            editable={this.state.usereditableflag}
                                                   keyboardType='phone-pad'
                                                   fontSize={16}
                                            onChangeText={(itemValue) => this.setState({ageofuser: itemValue})}
                                                   containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>



                                    {/* <TextField label="Gender"
                                               lineHeight={30}
                                        value={this.state.gender}
                                        editable={this.state.usereditableflag}
                                               fontSize={16}
                                               returnKeyType={"done"}
                                        onChangeText={(itemValue) => this.setState({gender: itemValue})}
                                               containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/> */}
                                               <Dropdown
                                           placeholder='Please select gender'
                                            value={this.state.gender}
                                            baseColor={'#000'}
                                            textColor={'#000'}
                                            selectedItemColor={'#000'}
                                            itemColor={'#000'}
                                            fontSize={13}
                                            disabled={!this.state.usereditableflag}
                                            itemPadding={8}
                                            dropdownPosition={0}
                                            // pickerStyle={{paddingLeft:200}}
                                            containerStyle={{width:250,height:45,marginTop:15,borderRadius:20,paddingTop:2,paddingBottom:5,paddingLeft:width*0.04}}
                                            rippleCentered={true}
                                            overlayStyle={{position:'absolute',width:250,marginLeft:10,marginTop:450}}
                                            inputContainerStyle={{ borderBottomColor: '#000' }}
                                            dropdownOffset={top= 0}
                                            data={genderselect}
                                            // valueExtractor={({value})=> value}
                                            onChangeText={(value)=>{this.onChangegenderTextPress(value)}}
                                        />
                            </View>

                            
                        </Card>
                        
                    </ScrollView>
                    <Dialog 
                        visible={this.state.showDialog} 
                        title="SmartMedi"
                        onTouchOutside={() => this.openDialog(false)}
                        contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                        animationType="fade">
                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>

                         <TextField label="Feedback"
                                           lineHeight={30}
                                           value={this.state.feedbacknotes}
                                           editable={true}
                                           fontSize={16}
                                           multiline = {true}
                                           returnKeyType={"done"}
                                           onChangeText={(itemValue) => this.setState({feedbacknotes: itemValue})}
                                           containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>

                       <Button transparent style={{height: 25,width:width-880,backgroundColor: '#FFFFFF',marginBottom:10
                        }}
                                 >
                            <Text style={{fontWeight: "bold",fontSize:16,color:'#4d6bcb',flex:2
                                ,textAlign:'center'}}>Submit</Text>
                        </Button>

                        <Button transparent style={{height: 25,width:width-880,backgroundColor: '#FFFFFF',marginBottom:10
                        }}
                                onPress={() => {(this.openDialog(false)),Actions.homeScreen()}} >
                            <Text style={{fontWeight: "bold",fontSize:16,color:'#4d6bcb',flex:2
                                ,textAlign:'center'}}>Close</Text>
                        </Button>
                        </View>
                    </Dialog>
                </View>

                <View style={[styles.footer]}>
                    <BottomNavigation
                        tabs={this.tabs}
                        activeTab={this.state.activeTab}
                        onTabPress={newTab => {this.setState({ activeTab: newTab.key }),this._handleTabPress(newTab.key)}}
                        renderTab={this.renderTab}
                        // useLayoutAnimation
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor:'#f1f1f1f1',
    },
    headerview: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#2EACDE',
        position: 'absolute',
        // paddingRight:5,
        // paddingLeft:5,
        // paddingTop:15,
        backgroundColor:'#f1f1f1f1',
        left: 0,
        right: 0,
        top:0,
        bottom:0,

    },
    footer: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: '#8BC34A'
    },
    headermoretitle: {
        backgroundColor: '#FFFFFF',
        // padding: 0,

        // borderTopEndRadius:5,
        // borderWidth:1,
        flex: 1,
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        borderTopColor: 'black',
        borderTopWidth: 1,
        width: width - 20,
        borderColor:'#f1f1f1f1',
        // borderBottomColor:'#FFFFFF',
        marginBottom:0,
        marginRight:5,
        marginLeft:5,
    },
    contentmore: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginRight:5,
        marginLeft:5,
        textAlign:'right'
    },

    headercardbackground:{
        flex:8,
        width:null,
        alignSelf:'stretch',

    },
    headermore:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor:'rgba(0,0,0,0.5)',

    },
    profilepicWrap:{
        width:100,
        height:100,
        borderRadius:100,
        borderColor:'rgba(0,0,0,0.4)',
        borderWidth:16,

    },
    profilepic:{
        flex:1,
        width:null,
        alignSelf:'stretch',
        borderRadius:100,
        borderColor:'#FFFFFF',
        borderWidth:4,

    },
    myname:{
        marginTop:20,
        fontSize:16,
        color:'#FFFFFF',
        fontWeight:'bold',

    },
    quarterHeight: {
        flex: .5,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },

    orTextView1:{
        fontSize: 16,
        color:'#2CA8DB',
        marginTop: 12


    },
    orText1:{
        fontSize: 18,
        color:'#2CA8DB',
        marginTop: 20,

        paddingLeft:15,
        textDecorationLine: 'underline'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2eacde',
        height: 60,
        fontSize: 16,
        width:DEVICE_WIDTH - 10,
        // borderRadius: 15,
        color:'#FFFFFF',
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
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: 'white',
        fontSize:20,
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },

    loginFormTextInputnonedit:{
        height: 45,
        fontSize: 14,
        width:DEVICE_WIDTH - 120,
        borderWidth: 0.5,
        borderRadius:10,
        borderColor: '#bbbfbc',
        backgroundColor: '#fafafa',
        padding:4,
        paddingLeft: 5,
        marginLeft:15,
        marginRight: 15,
        marginTop: 30,
        marginBottom:10,
        textAlign: 'center',
        alignSelf: 'center'
    },
    loginFormTextInput1:{
        height: 45,
        fontSize: 14,
        width:DEVICE_WIDTH - 120,
        borderWidth: 0.5,
        borderRadius:10,
        borderColor: '#2CA8DB',
        backgroundColor: '#fafafa',
        padding:4,
        paddingLeft:5,
        marginLeft:15,
        marginRight: 10,
        marginTop: 20,
        marginBottom:10,
        textAlign: 'center',
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
        textAlign: 'center',
        alignSelf: 'center'
    },
    ImageStyle: {
        padding: 10,
        paddingLeft:45,
        paddingRight:45,
        margin: 105,
        marginRight:100,
        marginLeft:300,
        marginTop:1,
        height: 150,
        width: 150,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        marginLeft:60,
        marginTop:10,
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150
    }
});