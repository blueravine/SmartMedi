import React, { Component,PropTypes } from 'react';
import { Image,ScrollView,StyleSheet,TouchableOpacity,StatusBar,AsyncStorage,ActivityIndicator,BackHandler,AppState,
    UIManager, findNodeHandle,Alert,Keyboard,
    TouchableHighlight,Dimensions,Animated,Easing } from 'react-native';
import { Container, Header, Content, Card, CardItem, Spinner,Thumbnail,Picker,DeckSwiper, Text,Item,icon,Input,View,Fab, Button,  Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iccon from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconns from 'react-native-vector-icons/EvilIcons';
import Icoons from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';
import Iccons from 'react-native-vector-icons/FontAwesome'
import { Dialog } from 'react-native-simple-dialogs';
import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation';

var renderCategory=[];
var renderCard=[];
var rendertypelabel=[];
var rendertypeactual=[];
var rendertypenormal=[];
const users = {
    name: 'John Doe',
    mobile: 9674892081
};
const testtypes=[
    // {
    //     id: 1267,
    //     testname: 'FBS',
    //     value: 146,
    //     normalmin: null,
    //     normalmax: 100,
    //     normalcomparator: 'lessthan',

    //     result: 'high',
    //     testdate: 20181016,
    //     catid: 1142,
    //     catname: "Blood Test",
    //     testunit:"mg/dl",

    // },
    // { id: 1268,
    //     testname: 'PPBS',
    //     value: 127,
    //     normalmin: null,
    //     normalmax: 140,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20181016,
    //     catid: 1142,
    //     catname: "Blood Test",
    //     testunit:"mg/dl",
    // },
    // {	id: 1267,
    //     testname: 'Tri Glycer',
    //     value: 277,
    //     normalmin: null,
    //     normalmax: 150,
    //     normalcomparator: 'lessthan',

    //     result: 'high',
    //     testdate: 20181016,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:"mg/dl",
    // },
    // { id: 1268,
    //     testname: 'Cholestrol',
    //     value: 105,
    //     normalmin: null,
    //     normalmax: 200,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20181016,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:"mg/dl",
    // },
    // { id: 1268,
    //     testname: 'LDL',
    //     value: 27,
    //     normalmin: null,
    //     normalmax: 100,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20181016,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:" mEq/dl",
    // },
    // { id: 1268,
    //     testname: 'HDL',
    //     value: 23,
    //     normalmin: 40,
    //     normalmax: 60,
    //     normalcomparator: 'between',

    //     result: 'normal',
    //     testdate: 20181016,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:" mEq/dl",
    // },
    // {	id: 1267,
    //     testname: 'TSH',
    //     value: 3.51,
    //     normalmin: 0.27,
    //     normalmax: 4.2,
    //     normalcomparator: 'between',

    //     result: 'high',
    //     testdate: 20181016,
    //     catid: 1144,
    //     catname: "Thyroid & Vitamin D Level",
    //     testunit:"U/ml",
    // },
    // { id: 1268,
    //     testname: 'Vitamin D',
    //     value: 28.97,
    //     normalmin: null,
    //     normalmax: 50,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20181016,
    //     catid: 1144,
    //     catname: "Thyroid & Vitamin D Level",
    //     testunit:"ng/dl",

    // },
    // {	id: 1267,
    //     testname: 'FBS',
    //     value: 126,
    //     normalmin: null,
    //     normalmax: 100,
    //     normalcomparator: 'lessthan',

    //     result: 'high',
    //     testdate: 20180814,
    //     catid: 1144,
    //     catname: "Blood Test",
    //     testunit:"mg/dl",

    // },
    // { id: 1268,
    //     testname: 'PPBS',
    //     value: 107,
    //     normalmin: null,
    //     normalmax: 140,
    //     normalcomparator: 'lessthan',

    //     result: 'normal'
    //     ,
    //     testdate: 20180814,
    //     catid: 1144,
    //     catname: "Blood Test",
    //     testunit:"mg/dl",
    // },
    // {	id: 1267,
    //     testname: 'Tri Glycer',
    //     value: 257,
    //     normalmin: null,
    //     normalmax: 150,
    //     normalcomparator: 'lessthan',

    //     result: 'high',
    //     testdate: 20180814,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:"mg/dl",
    // },
    // { id: 1268,
    //     testname: 'Cholestrol',
    //     value: 85,
    //     normalmin: null,
    //     normalmax: 200,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20180814,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:"mg/dl",
    // },
    // { id: 1268,
    //     testname: 'LDL',
    //     value: 7,
    //     normalmin: null,
    //     normalmax: 100,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20180814,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:" mEq/dl",
    // },
    // { id: 1268,
    //     testname: 'HDL',
    //     value: 3,
    //     normalmin: 40,
    //     normalmax: 60,
    //     normalcomparator: 'between',

    //     result: 'normal',
    //     testdate: 20180814,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:" mEq/dl",
    // },
    // {	id: 1267,
    //     testname: 'Tri Glycer',
    //     value: 267,
    //     normalmin: null,
    //     normalmax: 150,
    //     normalcomparator: 'lessthan',

    //     result: 'high',
    //     testdate: 20180612,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:"mg/dl",
    // },
    // { id: 1268,
    //     testname: 'Cholestrol',
    //     value: 95,
    //     normalmin: null,
    //     normalmax: 200,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20180612,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:"mg/dl",
    // },
    // { id: 1268,
    //     testname: 'LDL',
    //     value: 17,
    //     normalmin: null,
    //     normalmax: 100,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20180612,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:" mEq/dl",
    // },
    // { id: 1268,
    //     testname: 'HDL',
    //     value: 13,
    //     normalmin: 40,
    //     normalmax: 60,
    //     normalcomparator: 'between',

    //     result: 'normal',
    //     testdate: 20180612,
    //     catid: 1143,
    //     catname: "Cholestrol Level",
    //     testunit:" mEq/dl",
    // },
    // {	id: 1267,
    //     testname: 'TSH',
    //     value: 3.31,
    //     normalmin: 0.27,
    //     normalmax:  4.2,
    //     normalcomparator: 'between',

    //     result: 'high',
    //     testdate: 20180612,
    //     catid: 1144,
    //     catname: "Thyroid & Vitamin D Level",
    //     testunit:"U/ml",
    // },
    // { id: 1268,
    //     testname: 'Vitamin D',
    //     value: 26.87,
    //     normalmin: null,
    //     normalmax: 50,
    //     normalcomparator: 'lessthan',

    //     result: 'normal',
    //     testdate: 20180612,
    //     catid: 1144,
    //     catname: "Thyroid & Vitamin D Level",
    //     testunit:"ng/dl",

    // }
];
var testdata=[];
import ActionButton from 'react-native-action-button';
var PushNotification = require('react-native-push-notification');
// import Spinner from 'react-native-spinkit';
import Drawer from 'react-native-drawer';
import DatePicker from 'react-native-datepicker';
import ModalFilterPicker from 'react-native-modal-filter-picker';
import { TextField } from 'react-native-material-textfield';
import Snackbar from 'react-native-snackbar';
const ICON_SIZE = 24;
import { Actions, ActionConst } from 'react-native-router-flux'; // 4.0.0-beta.31
import Toast from 'react-native-simple-toast';

import SendSMS from 'react-native-sms-x';
// import Select from 'react-select';
import Divider from 'react-native-divider';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
// import { BottomNavigation } from 'react-native-material-ui';
import DateTimePicker from 'react-native-modal-datetime-picker';
// const card      = {card: {width: 300,height:500}};
const cardItem = {cardItem: {fontSize: 40}};
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

var testdates = [
//     {
//         key: 20181016,
//         label: '2018/10/16',
//     },
//     {
//         key: 20180814,
//         label: '2018/08/14',
//     },
//     {
//         key: 20180612,
//         label: '2018/06/12',
//     }
];
// var filteredTestResult=[];
var renderResultCard=[];
var testtdetail;
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null};
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            favticket:[],
            activeTab: 'tests',
            active: 'false',
            isDateTimePickerVisible: false,
            selectedItem: undefined,
            selected2: '',
            results: {
                items: []
            },
            pickervisible1: false,
            pickervisible2: false,
            date: new Date(),
            selected1: '',
            currIndex: 0,
            targetIndex: 0,
            selectedDate:'',
            filteredTestResult:[],
            selectedTestName:'',
            istestSorted: false,
            result:[],
            gestureName: 'none',

    };
        // this.handleAppStateChange = this.handleAppStateChange.bind(this);
        // this._onButtonPressed = this._onButtonPressed.bind(this);
    }

    // swiper:Object;


    tabs = [
        {
            key:"tests",
            // icon={<Image source={require('../Images/home_icon.png')} color="#2eacde" name="Search" style={{ width: 20, height: 20 }} />}
            label:"Tests",
            icon : 'description',
            barColor: '#FFFFFF',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"reports",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'timeline' ,
            label:"Reports",
            barColor: '#FFFFFF',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"alerts",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'schedule' ,
            label:"Alerts",
            barColor: '#FFFFFF',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"profile",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'person-pin' ,
            label:"Profile",
            barColor: '#FFFFFF',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ];

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color="gery" name={icon} />

    );


    renderTab = ({ tab, isActive }) => (
        <ShiftingTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    );

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });


    _hideDateTimePicker = () => {this.setState({ isDateTimePickerVisible: false })};

    _handleDatePicked = (date) => {
        this.setState({
            date :  date
        });
        this._hideDateTimePicker();
    };

    handleChange(value) {
        this.setState({
            selected: value
        });
    };

    _SwapPickerText(){
        let temploc=this.state.picked1;
        this.setState({picked1: this.state.picked2, picked2:temploc});
    };

    _handleTabPress(pressedKey) {
        switch (pressedKey) {
            case 'tests':
                break;
            case 'reports':
                this.displayTrend(testtypes[0].testname ? testtypes[0].testname : 'FBS', this.state.selectedDate);
                // Actions.trendScreen();
                break;
            case 'alerts':
                Actions.alertScreen();
                break;
            case 'profile':
                Actions.profileScreen();
                break;
            default:

        }
    };


    ShowHideActivityIndicator = () =>{

        this.setState({loading: true});
        setTimeout(() => {
            Actions.searchScreen(params);
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        }, 2000)
        // this.setState({loading: false})
    };
   async  componentDidMount() {
      await  AsyncStorage.getItem('userInfo')
                .then((userInfo) => {
                    // alert(JSON.stringify(userInfo));
                    let tempuserdata = userdata;
                   let  jsonuserinfo = userInfo ? JSON.parse(userInfo) : tempuserdata;
                  
                   userdata.name = jsonuserinfo.name;
                    userdata.mobile = jsonuserinfo.mobile;
                    userdata.jwt = jsonuserinfo.jwt;
                    userdata.countrycode = jsonuserinfo.countrycode;
                    userdata.email = jsonuserinfo.email;
                    userdata.username = jsonuserinfo.username;
                    userdata.age = jsonuserinfo.age;
                    userdata.gender = jsonuserinfo.gender;
                    // alert((userdata.mobile)+(userdata.jwt))
                    
                }).done();

await AsyncStorage.getItem('usertestInfo')
.then((usertestInfo) => {
    // alert(JSON.stringify(userInfo));
    let tempusertestdata = testdata;
        testdata = usertestInfo ? JSON.parse(usertestInfo) : tempusertestdata;
    

    // alert("initial fetch " +JSON.stringify(testdata));
    
}).done(() => {
    if(!(testdata.length)) {
    fetch('https://smartmedi.blueravine.in/testresult/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
    //     jwtaudience:'SmarTran'  })
    }) //fetch
    .then((response) => response.json())
    .then((responseJson) => {

        if (responseJson.messagecode===2004) {
            testdata = responseJson.TestResult.slice();
            AsyncStorage.setItem('usertestInfo',JSON.stringify(testdata))
                .then((usertestInfo) => {
                    
                }).done(() =>{
                    testtypes = testdata.slice();

                    let tdates = [], outdates = [], l = testdata.length, i;
                    for( i=0; i<l; i++) {
                        if( tdates[testdata[i].testdate]) continue;
                        tdates[testdata[i].testdate] = true;
                        outdates.push(testdata[i].testdate);
                    }
                
                    testdates = [];
                    outdates.forEach((currdate, dateidx) => {
                        let eachdata = 
                            {label: currdate.toString().substring(6, 8)
                                + '/' + currdate.toString().substring(4, 6) + '/'
                                + currdate.toString().substring(0, 4),
                                key: currdate};
                
                        testdates.push(eachdata);
                    }); //forEach
                    this.setState({selectedDate: testdates.length ? testdates[0].key : ''});
               
                    if(testdates.length){ this.filterByTestDate(testdates[0].key)}
                
                                    }); //done
        }
        else {
            //###Need to handle error in retrieving test results from server
        }
    }).catch((error) => {
            alert(error);
        });
    } //if no test results in Async Storage
    else {
        testtypes = testdata.slice();

        let tdates = [], outdates = [], l = testdata.length, i;
        for( i=0; i<l; i++) {
            if( tdates[testdata[i].testdate]) continue;
            tdates[testdata[i].testdate] = true;
            outdates.push(testdata[i].testdate);
        }
    
        testdates = [];
        outdates.forEach((currdate, dateidx) => {
            let eachdata = 
                {label: currdate.toString().substring(6, 8)
                    + '/' + currdate.toString().substring(4, 6) + '/'
                    + currdate.toString().substring(0, 4),
                    key: currdate};
    
            testdates.push(eachdata);
        }); //forEach
        this.setState({selectedDate: testdates.length ? testdates[0].key : ''});
               
    if(testdates.length){ this.filterByTestDate(testdates[0].key)}


    }

});
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton = () => {
        Alert.alert(
            'Exit App',
            'Do you want to exit the app?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            }, ]
            , {
                cancelable: false
            }
        );
        return true;
    };

    onTestNameShowpicker = () => {
        this.setState({ pickervisible2: true });
    };

    onTestNameSelectpicker = (picked) => {
        this.setState({
            selectedDate: picked,
            pickervisible2: false,
        });
        this.filterByTestDate(picked);
    };

    onTestNameCancelpicker = () => {
        this.setState({
            pickervisible2: false
        });
    };

    onplusButtonPress = () => {
        Actions.addtestScreen();
    };

    displayTrend(treandtestname, trendtestdate) {
        // Toast.show(" current result name" +msg,Toast.LONG)
        testtdetail.testname=treandtestname;
        testtdetail.testdate=trendtestdate;
        Actions.trendScreen(testtdetail);
    };

    filterByTestDate(newDate){
        this.setState( {filteredTestResult: testtypes.filter( (testresult) =>
            {return testresult.testdate === newDate}) });
        };

    filterByTestName(searchText, nDate){
        this.setState({selectedTestName: searchText});

        this.setState( {filteredTestResult: testtypes.filter( (testresult) =>
            {return testresult.testname.toLowerCase().includes(searchText.toLowerCase()) && testresult.testdate === nDate}) });
    };

    sortByTestName(sDate) {
        if (this.state.istestSorted === false) {
        this.setState({
            filteredTestResult: testtypes.filter((testresult) => {
                return testresult.testdate === sDate
            }).sort(
                (a, b) => {return a.testname.toLowerCase().localeCompare(b.testname.toLowerCase());
                }
            ),
            istestSorted: true
        });
    } else {
            this.setState({
                filteredTestResult: testtypes.filter((testresult) => {
                    return testresult.testdate === sDate
                }).sort(
                        (a, b) => {return (-1) * (a.testname.toLowerCase().localeCompare(b.testname.toLowerCase()) );
                    }
                ),
                istestSorted: false
            });
        }
        // Toast.show(this.state.filteredTestResult[0].testname,Toast.LONG);
    };

    onSwipeLeft(swipedLeftDate) {
        let newdateindex=0;
        let dateindex = testdates.findIndex(function(currentdate, idx){
            return currentdate.key === swipedLeftDate;
        });

        if(dateindex === (testdates.length-1)){
            newdateindex=0;
        } else{
            newdateindex = dateindex + 1;
        }

        this.setState({selectedDate: testdates.length ? testdates[newdateindex].key : ''});

        // alert("Swiped left "+ testdates[newdateindex].key);
        if(testdates.length){this.filterByTestDate(testdates[newdateindex].key);}

    }

    onSwipeRight(swipedRightDate) {
        let newdateindex=0;
        let dateindex = testdates.findIndex(function(currentdate, idx){
            return currentdate.key === swipedRightDate;
        });

        if(dateindex === 0){
            newdateindex=(testdates.length-1);
        } else{
            newdateindex = dateindex - 1;
        }

        this.setState({selectedDate: testdates.length ? testdates[newdateindex].key : ''});

        // alert("Swiped right "+ testdates[newdateindex].key);
        if(testdates.length){this.filterByTestDate(testdates[newdateindex].key);}
    }


    render() {



        testtdetail = {};
        testtdetail = {
            testdate:this.state.selectedDate,
            testname:''

        };
        let localFilteredResult = this.state.filteredTestResult;

        renderResultCard = localFilteredResult.map( (currentResult, resultIndex) => {
            return(
                <View style={{flexDirection:'row' ,justifyContent:'space-evenly',marginBottom:15}}>
                    <TouchableOpacity onPress={() => {this.displayTrend(currentResult.testname, this.state.selectedDate)}}>
                        {/*{(currentResult.testname.length!==15) &&*/}
                        <Text style={{marginBottom:5,textAlign:'left'}}>{currentResult.testname}</Text></TouchableOpacity>
                    {(currentResult.result==="high") &&
                    <Text style={{textAlign:'center',color:'#F80617',marginBottom:5}}> {currentResult.value}</Text>
                    }
                    {(currentResult.result==="normal") &&
                    <Text style={{textAlign:'center',color:'#0db75a',marginBottom:5,fontWeight:'bold'}}> {currentResult.value}</Text>
                    }
                    {(currentResult.result==="between") &&
                    <Text style={{textAlign:'center',flex:1, color:'#0db75a',marginBottom:5,fontWeight:'bold'}}>{currentResult.value}</Text>
                    }
                    {/*<Text>{currentResult.value}</Text>*/}
                    {(currentResult.normalcomparator === "lessthan") &&
                    <Text style={{marginBottom: 5,textAlign:'right'}}> &#x0003C; {currentResult.normalmax} {currentResult.testunit}</Text>
                    }
                    {(currentResult.normalcomparator === "between") &&
                    <Text style={{marginBottom: 5,textAlign:'right'}}> {currentResult.normalmin}-{currentResult.normalmax} </Text>
                    }
                </View>);
        });

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#f1f1f1f1'/>
                </View>

                <View style={[styles.headerview]}>

                    <View style={{flexDirection:"row",paddingRight:10,
                        paddingLeft:10,backgroundColor:'#4d6bcb',height:50}}>
                        <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  Welcome James</Text>

                        
                        <TouchableOpacity style={{marginTop:10,paddingRight:10,paddingLeft:10}}
                                          onPress={this.onTestNameShowpicker}>
                            <Iconns type='EvilIcons' name='calendar' size={30} color="#FFFFFF"/>
                        </TouchableOpacity>
                        <ModalFilterPicker
                            visible={this.state.pickervisible2}
                            onSelect={this.onTestNameSelectpicker}
                            onCancel={this.onTestNameCancelpicker}
                            options={testdates}
                            optionTextStyle={style={fontSize:16}}
                        />
                        <TouchableOpacity style={{marginTop:5,paddingRight:10,paddingLeft:10}}
                                          onPress={this.onplusButtonPress}>
                            <Icons type='MaterialCommunityIcons' name='plus' size={30} color="#FFFFFF"/>

                        </TouchableOpacity>
                    </View>
                  
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
                    <TouchableOpacity style={{alignItems:'center',marginTop:180}} onPress={() => this.onSwipeLeft(this.state.selectedDate)}>
                        <Iccon type='SimpleLineIcons' name='arrow-left' size={18} color="#000"/>
                    </TouchableOpacity>

                    <GestureRecognizer
                            onSwipeLeft={() => this.onSwipeLeft(this.state.selectedDate)}
                            onSwipeRight={() => this.onSwipeRight(this.state.selectedDate)}
                        >
                            <Card style={{width:300,borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                                borderTopLeftRadius:10,borderLeftWidth:10}}>
                                {/*<View style={{flexDirection:'column',justifyContent:'space-evenly',marginTop:15}}>*/}

                                <Text style={{textAlign:'center',marginTop:10,textDecoration:'underline',fontWeight:'bold'}}>
                                    Test Result {"\n"} {this.state.selectedDate.toString().substring(6, 8)
                                + '/' + this.state.selectedDate.toString().substring(4, 6) + '/'
                                + this.state.selectedDate.toString().substring(0, 4)}</Text>

                                {/*</View>*/}
                                <TextField label="Search Test By Name"
                                           lineHeight={30}
                                           value={this.state.selectedTestName}
                                           editable={true}
                                           fontSize={16}
                                           onChangeText={(itemValue) => {this.filterByTestName(itemValue, this.state.selectedDate)} }
                                           containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:20,marginRight:5,justifyContent:'flex-end'}}/>

                                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
                            {/*<TouchableOpacity style={{alignItems:'center'}} onPress={() => this.onSwipeLeft(this.state.selectedDate)}>*/}
                            {/*<Iccon type='SimpleLineIcons' name='arrow-left' size={18} color="#000"/>*/}
                            {/*</TouchableOpacity>*/}
                            <TouchableOpacity onPress={() => this.sortByTestName(this.state.selectedDate)}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                            <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'bold'}}>
                                Test Name</Text>
                                <Icoons type='FontAwesome' name='sort' size={18} color="#000"/>
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'bold'}}>Actual</Text>
                            <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'bold'}}>Normal</Text>
                            {/*<TouchableOpacity style={{alignItems:'center'}} onPress={() => this.onSwipeRight(this.state.selectedDate)}>*/}
                            {/*<Iccon type='SimpleLineIcons' name='arrow-right' size={18} color="#000"/>*/}
                            {/*</TouchableOpacity>*/}
                        </View>

                            {renderResultCard}

</Card>
                        </GestureRecognizer>
                        <TouchableOpacity style={{alignItems:'center',marginTop:180}} onPress={() => this.onSwipeRight(this.state.selectedDate)}>
                            <Iccon type='SimpleLineIcons' name='arrow-right' size={18} color="#000"/>
                        </TouchableOpacity>
                    </View>

                    {/*</Card>*/}
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
        backgroundColor: '#f1f1f1f1',

    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    headerview: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#917cb7',
        position: 'absolute',
        backgroundColor: '#f1f1f1f1',
        height:800,
        // paddingRight:15,
        // paddingLeft:15,
        // paddingTop:35,
        left: 0,
        right: 0,
        top:0,

    },
    spinner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF'

    },
    content1: {
        // backgroundColor: '#B7B152',
        marginTop:300,

    },
    footer: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        // borderTopColor:'#00CC77'
        // backgroundColor: '#8BC34A'
    },
    box: {

        backgroundColor: '#f1f1f1f1',
        // marginBottom: 10
        marginRight:5,
        marginLeft:5,

    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    header: {
        backgroundColor: '#f1f1f1f1',
        padding: 10,
        borderTopEndRadius:5,
        borderWidth:2,
        // borderColor:'#0C71B7',
        marginRight:5,
        marginLeft:5,
    },
    headerText: {
        // textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
        // color:'#0C71B7',
    },
    content: {
        padding: 20,
        backgroundColor: '#f1f1f1f1',
        // color:'#B7B152',
        marginRight:5,
        marginLeft:5,
    },
    container1: {},
    view: {
        marginTop: 25,
        backgroundColor: '#FFFFFF',
        width: width - 80,
        margin: 10,
        height: 100,
        borderRadius: 10,
        color:'#000',
        borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
        borderTopLeftRadius:10,borderLeftWidth:10,shadowColor:"#f1f1f1f1",borderColor:'#2eacde'
        //paddingHorizontal : 30
    },
    view2: {
        marginTop: 85,
        backgroundColor: '#FFFFFF',
        width: width - 80,
        margin: 10,
        height: 100,
        borderRadius: 10,
        color:'#000'
        //paddingHorizontal : 30
    },

    wrapper: {
    },
    slide1: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#f1f1f1f1',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1f1',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1f1',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }

});