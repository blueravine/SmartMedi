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
import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation';
import { Dialog } from 'react-native-simple-dialogs';
var renderCategory=[];
var renderCard=[];
var rendertypelabel=[];
var rendertypeactual=[];
var rendertypenormal=[];
const users = {
    name: 'John Doe',
    mobile: 9674892081
};
var selecttest;
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
var renderResultName=[];
var renderResultValue=[];
var renderResultNormal=[];
var testtdetail;
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null};
var testarray=[];
// var temptestarr = {countrcode:null,testname:null,testunit:null,testagemin:null,testagemax:null,testgender:null,normalmin:null,normalmax:null,normalcomparator:null,category:null};
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            favticket:[],
            activeTab: 'home',
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
            selectedtestValue:'',
            selectedName:'',
            istestSorted: false,
            result:[],
            gestureName: 'none',
            feedbacknotes:''

    };
    this.getusertestdata = this.getusertestdata.bind(this);
    this.refreshtestresults = this.refreshtestresults.bind(this);
        // this.handleAppStateChange = this.handleAppStateChange.bind(this);
        // this._onButtonPressed = this._onButtonPressed.bind(this);
    }

    // swiper:Object;


    tabs = [
        {
            key:"home",
            // icon={<Image source={require('../Images/home_icon.png')} color="#2eacde" name="Search" style={{ width: 20, height: 20 }} />}
            label:"Home",
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

    state = {}

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    
    _handleTabPress(pressedKey) {
        
        callerscreen = currentscreen;
        
        switch (pressedKey) {
            case 'home':
                break;
            case 'reports':
                // this.displayTrend(testtypes[0].testname ? testtypes[0].testname : 'FBS', this.state.selectedDate);
                Actions.trendScreen();
                break;
            case 'alerts':
                Actions.alertScreen();
                break;
            case 'profile':
                Actions.profileScreen();
                break;
            case 'feedback':
            (this.openDialog(true))
                break;
            default:

        }
    };
     async getusertestdata(){
        await  AsyncStorage.getItem('userInfo')
        .then((userInfo) => {
            let tempuserdata = userdata;
           let  jsonuserinfo = userInfo ? JSON.parse(userInfo) : tempuserdata;
          
           userdata =jsonuserinfo;
            
        }).done(() => {

       fetch('https://interface.blueravine.in/smartmedi/test', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
        method: 'POST', // USE GET, POST, PUT,ETC
        headers: { //MODIFY HEADERS
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //    application/x-www-form-urlencoded
        },
        body: JSON.stringify({countrycode:userdata.countrycode,  
                             gender:userdata.gender,
                              age:userdata.age})
    })
        .then((response) => response.json())
        .then((responseJson) => {

            if (responseJson.messagecode===3006) {
                testarray = responseJson.Test.slice();
                AsyncStorage.setItem('testInfo',JSON.stringify(testarray))
                    .then((testInfo) => {
                        
                    }).done();
            
        }
            else 
            {
                alert("An error occurred while getting all tests! Please try again..");
            }
        
            }).catch((error) => {
            alert(error);
        });
    } );

        await AsyncStorage.getItem('usertestInfo')
        .then((usertestInfo) => {
        let tempusertestdata = testdata;
        testdata = usertestInfo ? JSON.parse(usertestInfo) : tempusertestdata;

        }).done(() => {
        if(!(testdata.length)) {
        fetch('https://interface.blueravine.in/smartmedi/testresult/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
                    outdates.sort().reverse().forEach((currdate, dateidx) => {
                        let eachdata = 
                            {label: currdate.toString().substring(6, 8)
                                + '/' + currdate.toString().substring(4, 6) + '/'
                                + currdate.toString().substring(0, 4),
                                key: currdate};
                
                        testdates.push(eachdata);
                    }); //forEach
                    this.setState({selectedDate: testdates.length ? testdates[0].key : ''});
                    // this.setState({selectedName: testdata.testname});
                    
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
        outdates.sort().reverse().forEach((currdate, dateidx) => {
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
    }

    async refreshtestresults(){
        
        fetch('https://interface.blueravine.in/smartmedi/testresult/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
                    outdates.sort().reverse().forEach((currdate, dateidx) => {
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
    }

    componentDidMount() {
        currentscreen='home';

        this.getusertestdata();
       
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
        
        callerscreen = currentscreen;
        Actions.addtestScreen();
    };

    onNametextPress = () => {
        
        callerscreen = currentscreen;
        Actions.profileScreen();
    };

    displayTrend(treandtestname, trendtestdate) {
        // Toast.show(" current result name" +msg,Toast.LONG)
        testtdetail.testname=treandtestname;
        // testtdetail.testdate=trendtestdate;
        
        callerscreen = currentscreen;
        Actions.trendScreen(testtdetail);
    };

    filterByTestDate(newDate){
        this.setState( {filteredTestResult: testtypes.filter( (testresult) =>
            {return testresult.testdate === newDate}) });
        };

    filterByTestName(searchText, nDate){
        this.setState({selectedTestName: searchText});

        this.setState( {filteredTestResult: testtypes.filter( (testresult) =>
            {return (testresult.testname.toLowerCase().includes(searchText.toLowerCase()) || testresult.category.toLowerCase().includes(searchText.toLowerCase())
                || testresult.notes.toLowerCase().includes(searchText.toLowerCase())) && testresult.testdate === nDate}) });
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
        if(testdates.length){this.filterByTestDate(testdates[newdateindex].key);}
    }

    ShowHidesearchActivityIndicator = () =>{

        this.setState({isloading: true});
        // if(this.state.feedbacknotes){
        setTimeout(() => {
            this._OnfeedbackSubmit();
            // Actions.homeScreen();
            // Snackbar.show({
            //     title: 'FeedBack Submitted succesfully.',
            //     duration: Snackbar.LENGTH_LONG,
            // });
        }, 500)
    // }
        // this.setState({loading: false})
    };
    _OnfeedbackSubmit(){
        Keyboard.dismiss();
        fetch('https://interface.blueravine.in/feedback/feedback/register', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
            method: 'POST', // USE GET, POST, PUT,ETC
            headers: { //MODIFY HEADERS
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //    application/x-www-form-urlencoded
            },
            body: JSON.stringify({id:parseInt(Moment().format('YYYYMMDDhhmmssSSS'))+Math.floor(Math.random() * 100),
                                name:userdata.name,
                                mobile:userdata.mobile,
                                appversion:'1.0.2',
                                appname:'SmartMedi',
                                countrycode:userdata.countrycode,
                                feedback:this.state.feedbacknotes})
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.messagecode === 1002) {
                    // Actions.homeScreen();
                     callerscreen = currentscreen;
                    Actions.homeScreen();
                    Snackbar.show({
                        title: 'FeedBack Submitted succesfully.',
                        duration: Snackbar.LENGTH_LONG,
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
    render() {
        testtdetail = {};
        testtdetail = {
            testdate:this.state.selectedDate,
            // edittestdate:this.state.selectedDate,
            testname:'',
            // edittestsname:this.state.selectedName,
            // edittestvalue:this.state.selectedtestValue,
            // testage:userdata.age

        };
        let localFilteredResult = this.state.filteredTestResult;

        renderResultName = localFilteredResult.map( (currentResult, resultIndex) => {
            
            return(
                    <TouchableOpacity onPress={() => {
                        callerscreen = currentscreen;
                        Actions.trendScreen(currentResult.testname)}}>
                        {/*{(currentResult.testname.length!==15) &&*/}
                        <Text style={{marginBottom:10,justifyContent:'flex-start'}}>{(currentResult.testname.length >12) ? 
                            (currentResult.testname.substring(0,12))+ '..': (currentResult.testname)}</Text>
                    </TouchableOpacity>
                    
                    );
        });

        renderResultValue = localFilteredResult.map( (currentResult, resultIndex) => {
            return(
                <TouchableOpacity onPress={() => {
                    callerscreen = currentscreen;
                    Actions.addtestScreen(currentResult)}}>
            <View>
                    {(currentResult.result==="high") &&
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#F80617',marginBottom:10, textAlign:'center'}}> {currentResult.value}</Text>
                    <Icoons type='FontAwesome' name='pencil' size={12} color="#818181" style={{marginLeft:5,marginTop:5}}/>
                    </View>
                    }
                    {(currentResult.result==="normal") &&
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#0db75a',marginBottom:10,textAlign:'center'}}> {currentResult.value}</Text>
                    <Icoons type='FontAwesome' name='pencil' size={12} color="#818181" style={{marginLeft:5,marginTop:5}}/>
                    </View>
                    }
                    {(currentResult.result==="between") &&
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#0db75a',marginBottom:10,textAlign:'center'}}>{currentResult.value}</Text>
                    <Icoons type='FontAwesome' name='pencil' size={12} color="#818181" style={{marginLeft:5,marginTop:5}}/>
                    </View>
                    }
                    {((currentResult.result !=="between") && (currentResult.result !=="high") && (currentResult.result !=="normal") ) &&
                    <Text style={{color:'#000',marginBottom:10,textAlign:'center'}}>{currentResult.value}</Text>
                    }
            </View>
                    </TouchableOpacity>
                    );
        });

        renderResultNormal = localFilteredResult.map( (currentResult, resultIndex) => {
            return(
                <TouchableOpacity onPress={() => {
                    callerscreen = currentscreen;
                    Actions.addtestScreen(currentResult)}}>
                <View>
                    {(currentResult.normalcomparator === "lessthan") &&
                    <Text style={{marginBottom:10,justifyContent:'flex-end'}}> &#x0003C; {currentResult.normalmax} {currentResult.testunit}</Text>
                    }
                    {(currentResult.normalcomparator === "between") &&
                    <Text style={{marginBottom:10,justifyContent:'flex-end'}}> {currentResult.normalmin}-{currentResult.normalmax} {currentResult.testunit} </Text>
                    }
                </View>
                </TouchableOpacity>
                );
                
        });

      
        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#1C306F'/>
                </View>
                    
                <View style={[styles.headerview]}>

                    <View style={{flexDirection:"row",backgroundColor:'#4d6bcb',height:50}}>
                    <View style={{flex:3,flexDirection:"row"}}>
                    <TouchableOpacity 
                                         onPress={this.onNametextPress}>
                        <Text note style={{fontSize:16,textAlign:'left',marginTop:10,marginLeft:10,color:'#FFFFFF'}} > {userdata.name}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
                        <TouchableOpacity 
                                         onPress={this.refreshtestresults}>
                                         <View style={{flexDirection:"column",alignItems:'center',marginTop:10}}>
                            <Iccon type='SimpleLineIcons' name='refresh' size={24} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                    Refresh </Text>
                            </View>
                        </TouchableOpacity>
                    
                        <TouchableOpacity 
                                          onPress={this.onTestNameShowpicker}>
                                          <View style={{flexDirection:"column",alignItems:'center',marginTop:11}}>
                            <Iconns type='EvilIcons' name='calendar' size={30} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                    Search</Text>
                            </View>
                        </TouchableOpacity>
                        <ModalFilterPicker
                            visible={this.state.pickervisible2}
                            onSelect={this.onTestNameSelectpicker}
                            onCancel={this.onTestNameCancelpicker}
                            options={testdates}
                            // optionTextStyle={style={fontSize:16}}
                        />
                        <TouchableOpacity 
                                          onPress={this.onplusButtonPress}>
                                          <View style={{flexDirection:"column",alignItems:'center',marginTop:5}}>
                            <Icons type='MaterialCommunityIcons' name='plus' size={30} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                    Add Test  </Text>
                            </View>

                        </TouchableOpacity>
                        </View>
                    
                    </View>
                  
                    <Card style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                    <TouchableOpacity style={{alignItems:'center',marginTop:180}} onPress={() => this.onSwipeLeft(this.state.selectedDate)}>
                        <Iccon type='SimpleLineIcons' name='arrow-left' size={18} color="#000"/>
                    </TouchableOpacity>

                    <GestureRecognizer
                            onSwipeLeft={() => this.onSwipeLeft(this.state.selectedDate)}
                            onSwipeRight={() => this.onSwipeRight(this.state.selectedDate)}
                        >
                            <View style={{width:300}}>
                                {/*<View style={{flexDirection:'column',justifyContent:'space-evenly',marginTop:15}}>*/}

                                <Text style={{textAlign:'center',marginTop:10,textDecorationLine:'underline'}}>
                                    Date of Test</Text>
                                <Text style={{textAlign:'center',fontWeight:'bold'}}>
                                    {this.state.selectedDate.toString().substring(6, 8)
                                + '/' + this.state.selectedDate.toString().substring(4, 6) + '/'
                                + this.state.selectedDate.toString().substring(0, 4)}</Text>
                                <View
                                style={{
                                    borderBottomColor: '#f1f1f1f1',
                                    borderBottomWidth: 1,
                                }}
                                />
                                {/*</View>*/}
                                <TextField label="Search Test By Name"
                                           lineHeight={30}
                                           value={this.state.selectedTestName}
                                           editable={true}
                                           fontSize={16}
                                           onChangeText={(itemValue) => {this.filterByTestName(itemValue, this.state.selectedDate)} }
                                           containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginLeft:20,marginRight:5,justifyContent:'flex-end'}}/>

                        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderColor:'#f1f1f1f1'}}>
                        <View style={{flexDirection:'column',marginLeft:5}}>
                        <TouchableOpacity onPress={() => this.sortByTestName(this.state.selectedDate)}>
                                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'bold'}}>Test Name</Text>
                                <Icoons type='FontAwesome' name='sort' size={18} color="#000" style={{marginLeft:5}}/>
                                </View>
                            </TouchableOpacity>

                             {renderResultName}
                            {/* {renderResultCard} */}
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'bold',textAlign:'center'}}>Actual</Text>
                             {renderResultValue}
                            </View>
                            <View style={{flexDirection:'column'}}>
                            <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'bold',textAlign:'center'}}>Normal</Text>
                             {renderResultNormal}
                            </View>
                        </View>

</View>
                        </GestureRecognizer>
                        <TouchableOpacity style={{alignItems:'center',marginTop:180}} onPress={() => this.onSwipeRight(this.state.selectedDate)}>
                            <Iccon type='SimpleLineIcons' name='arrow-right' size={18} color="#000"/>
                        </TouchableOpacity>
                    </Card>

                    {/*</Card>*/}
                    <Dialog 
                        visible={this.state.showDialog} 
                        title="We value your Feedback."
                        onTouchOutside={() => this.openDialog(false)}
                        contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                        animationType="fade">
                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                    {/* <View style={styles.inputContainer}> */}
                         <TextField label="Feedback"
                                           lineHeight={30}
                                        //    value={this.state.feedbacknotes}
                                           editable={true}
                                           fontSize={16}
                                           multiline = {true}
                                           returnKeyType={"done"}
                                           onChangeText={(itemValue) => this.setState({feedbacknotes: itemValue})}
                                           containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>
                    {/* </View> */}
                       <Button transparent style={{height: 25,width:width-880,backgroundColor: '#FFFFFF',marginBottom:10,marginTop:10
                        }}
                        onPress={() => {
                            if(!(this.state.feedbacknotes)){
                                                    Snackbar.show({
                                title: 'FeedBack cannot be empty!',
                                duration: Snackbar.LENGTH_LONG,
                            });
                        }
                        else{
                            (this.openDialog(false)),this.ShowHidesearchActivityIndicator()}}}
                                 >
                            <Text style={{fontWeight: "bold",fontSize:16,color:'#4d6bcb',flex:2
                                ,textAlign:'center'}}>Submit</Text>
                        </Button>

                        <Button transparent style={{height: 25,width:width-880,backgroundColor: '#FFFFFF',marginBottom:10
                        }}
                                onPress={() => {(this.openDialog(false));
                                                callerscreen = currentscreen;
                                                Actions.homeScreen()}} >
                            <Text style={{fontWeight: "bold",fontSize:16,color:'#4d6bcb',flex:2
                                ,textAlign:'center'}}>Close</Text>
                        </Button>

                         {
                        // Here the ? Question Mark represent the ternary operator.
                        //style={{backgroundColor:'#FFFFFF',width:width-220}}
                        this.state.loading ?  <ActivityIndicator color = '#4d6bcb'
                                                                 size = "large" style={{padding: 20}} /> : null
                    }
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
        backgroundColor: '#f1f1f1f1',

    },
    inputContainer: {
        borderBottomColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:105,
        marginBottom:20,
        marginLeft:50,
        flexDirection: 'row',
        justifyContent:"space-evenly",
        alignItems:'center'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    headerview: {
        // height: hp('70%'), // 70% of height device screen
        // width: wp('80%'),   // 80% of width device screen
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