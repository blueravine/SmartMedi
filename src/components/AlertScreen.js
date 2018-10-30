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
import Iconns from 'react-native-vector-icons/EvilIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
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
const medicinetypes=[
    {
        id: 1267,
        medicinename: 'Insulin',
        medfrequency:'Daily',
        repeat1: '8AM',
        repeat2: '11AM',
        repeat3: '4PM',
        repeat4: '10PM',
        weekday:null,
        meddate: null,
        startdate:20181016,
        enddate:20181123,
    },
    { id: 1268,
        medicinename: 'losar',
        medfrequency:'Daily',
        repeat1: '8AM',
        repeat2: '10PM',
        repeat3: null,
        repeat4: null,
        weekday:null,
        meddate: null,
    },
    {	id: 1267,
        medicinename: 'Atorvastatin',
        medfrequency:'Daily',
        repeat1: '8AM',
        repeat2: '10PM',
        repeat3: null,
        repeat4: null,
        weekday:null,
        meddate: null,
        startdate:20181016,
        enddate:20181123,
    },
    {	id: 1267,
        medicinename: 'Thironum',
        medfrequency:'Daily',
        repeat1: '8AM',
        repeat2: '10AM',
        repeat3: null,
        repeat4: null,
        weekday:null,
        meddate: null,
        startdate:20181016,
        enddate:20181123,
    },
    { id: 1268,
        medicinename: 'uprise d3',
        medfrequency:'Daily',
        repeat1: '8AM',
        repeat2: '10PM',
        repeat3: null,
        repeat4: null,
        weekday:null,
        meddate: null,
        startdate:20181016,
        enddate:20181123,

    },
    { id: 1268,
        medicinename: 'Insulin',
        medfrequency:'Monthly',
        weekday:null,
        repeat1: null,
        repeat2: null,
        repeat3: null,
        repeat4: null,
        meddate: 8,
        startdate:20181016,
        enddate:20181123,

    },
    {
        id: 1267,
        medicinename: 'Insulin',
        medfrequency:'Weekly',
        weekday:'Monday',
        repeat1: null,
        repeat2: null,
        repeat3: null,
        repeat4: null,
        meddate: null,
        startdate:20180814,
        enddate:201810914,
    },
    { id: 1268,
        medicinename: 'losar',
        medfrequency:'Daily',
        repeat1: '8AM',
        repeat2: '10PM',
        repeat3: null,
        repeat4: null,
        weekday:null,
        meddate: null,
        startdate:20180814,
        enddate:201810914,
    },
    {	id: 1267,
        medicinename: 'Atorvastatin',
        medfrequency:'Daily',
        repeat1: '8AM',
        repeat2: '10PM',
        repeat3: null,
        repeat4: null,
        weekday:null,
        meddate: null,
        startdate:20180814,
        enddate:201810914,
    },
    { id: 1267,
        medicinename: 'uprise d3',
        medfrequency:'Monthly',
        weekday:null,
        repeat1: null,
        repeat2: null,
        repeat3: null,
        repeat4: null,
        meddate: 10,
        startdate:20180814,
        enddate:201810914,

    },

    {	id: 1267,
        medicinename: 'Atorvastatin',
        medfrequency:'Weekly',
        weekday:'Monday',
        repeat1: null,
        repeat2: null,
        repeat3: null,
        repeat4: null,
        meddate: null,
        startdate:20180612,
        enddate:20180714,
    },
    {	id: 1267,
        medicinename: 'Thironum',
        medfrequency:'Daily',
        repeat1: '8AM',
        repeat2: '10AM',
        repeat3: null,
        repeat4: null,
        weekday:null,
        meddate: null,
        startdate:20180612,
        enddate:20180714,
    },
    { id: 1268,
        medicinename: 'uprise d3',
        medfrequency:'Weekly',
        weekday:'Monday',
        repeat1: null,
        repeat2: null,
        repeat3: null,
        repeat4: null,
        meddate: null,
        startdate:20180612,
        enddate:20180714,

    },

    { id: 1268,
        medicinename: 'uprise d3',
        medfrequency:'Monthly',
        weekday:null,
        repeat1: null,
        repeat2: null,
        repeat3: null,
        repeat4: null,
        meddate: 12,
        startdate:20180612,
        enddate:20180714,

    },
];


const testtypes=[
    {
        id: 1267,
        testname: 'FBS',
        value: 146,
        normalmin: null,
        normalmax: 100,
        normalcomparator: 'lessthan',

        result: 'high',
        testdate: 20181016,
        catid: 1142,
        catname: "Blood Test",
        testunit:"mg/dl",

    },
    { id: 1268,
        testname: 'PPBS',
        value: 127,
        normalmin: null,
        normalmax: 140,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20181016,
        catid: 1142,
        catname: "Blood Test",
        testunit:"mg/dl",
    },
    {	id: 1267,
        testname: 'Tri Glycer',
        value: 277,
        normalmin: null,
        normalmax: 150,
        normalcomparator: 'lessthan',

        result: 'high',
        testdate: 20181016,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:"mg/dl",
    },
    { id: 1268,
        testname: 'Cholestrol',
        value: 105,
        normalmin: null,
        normalmax: 200,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20181016,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:"mg/dl",
    },
    { id: 1268,
        testname: 'LDL',
        value: 27,
        normalmin: null,
        normalmax: 100,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20181016,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:" mEq/dl",
    },
    { id: 1268,
        testname: 'HDL',
        value: 23,
        normalmin: 40,
        normalmax: 60,
        normalcomparator: 'between',

        result: 'normal',
        testdate: 20181016,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:" mEq/dl",
    },
    {	id: 1267,
        testname: 'TSH',
        value: 3.51,
        normalmin: 0.27,
        normalmax: 4.2,
        normalcomparator: 'between',

        result: 'high',
        testdate: 20181016,
        catid: 1144,
        catname: "Thyroid & Vitamin D Level",
        testunit:"U/ml",
    },
    { id: 1268,
        testname: 'Vitamin D',
        value: 28.97,
        normalmin: null,
        normalmax: 50,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20181016,
        catid: 1144,
        catname: "Thyroid & Vitamin D Level",
        testunit:"ng/dl",

    },
    {	id: 1267,
        testname: 'FBS',
        value: 126,
        normalmin: null,
        normalmax: 100,
        normalcomparator: 'lessthan',

        result: 'high',
        testdate: 20180814,
        catid: 1144,
        catname: "Blood Test",
        testunit:"mg/dl",

    },
    { id: 1268,
        testname: 'PPBS',
        value: 107,
        normalmin: null,
        normalmax: 140,
        normalcomparator: 'lessthan',

        result: 'normal'
        ,
        testdate: 20180814,
        catid: 1144,
        catname: "Blood Test",
        testunit:"mg/dl",
    },
    {	id: 1267,
        testname: 'Tri Glycer',
        value: 257,
        normalmin: null,
        normalmax: 150,
        normalcomparator: 'lessthan',

        result: 'high',
        testdate: 20180814,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:"mg/dl",
    },
    { id: 1268,
        testname: 'Cholestrol',
        value: 85,
        normalmin: null,
        normalmax: 200,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20180814,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:"mg/dl",
    },
    { id: 1268,
        testname: 'LDL',
        value: 7,
        normalmin: null,
        normalmax: 100,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20180814,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:" mEq/dl",
    },
    { id: 1268,
        testname: 'HDL',
        value: 3,
        normalmin: 40,
        normalmax: 60,
        normalcomparator: 'between',

        result: 'normal',
        testdate: 20180814,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:" mEq/dl",
    },
    {	id: 1267,
        testname: 'Tri Glycer',
        value: 267,
        normalmin: null,
        normalmax: 150,
        normalcomparator: 'lessthan',

        result: 'high',
        testdate: 20180612,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:"mg/dl",
    },
    { id: 1268,
        testname: 'Cholestrol',
        value: 95,
        normalmin: null,
        normalmax: 200,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20180612,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:"mg/dl",
    },
    { id: 1268,
        testname: 'LDL',
        value: 17,
        normalmin: null,
        normalmax: 100,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20180612,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:" mEq/dl",
    },
    { id: 1268,
        testname: 'HDL',
        value: 13,
        normalmin: 40,
        normalmax: 60,
        normalcomparator: 'between',

        result: 'normal',
        testdate: 20180612,
        catid: 1143,
        catname: "Cholestrol Level",
        testunit:" mEq/dl",
    },
    {	id: 1267,
        testname: 'TSH',
        value: 3.31,
        normalmin: 0.27,
        normalmax:  4.2,
        normalcomparator: 'between',

        result: 'high',
        testdate: 20180612,
        catid: 1144,
        catname: "Thyroid & Vitamin D Level",
        testunit:"U/ml",
    },
    { id: 1268,
        testname: 'Vitamin D',
        value: 26.87,
        normalmin: null,
        normalmax: 50,
        normalcomparator: 'lessthan',

        result: 'normal',
        testdate: 20180612,
        catid: 1144,
        catname: "Thyroid & Vitamin D Level",
        testunit:"ng/dl",

    }
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
import Icoons from 'react-native-vector-icons/FontAwesome';

var medsfrequecy = [
    {
        key: 'Daily',
        label: 'Daily',
    },
    {
        key: 'Weekly',
        label: 'Weekly',
    },
    {
        key: 'Monthly',
        label: 'Monthly',
    }
];
// var filteredTestResult=[];
var renderResultCard=[];
var testtdetail;
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import DropdownAlert from 'react-native-dropdownalert';
import RNCalendarEvents from 'react-native-calendar-events';
import RNAlarmClock from 'react-native-alarm-clock';
// import Notification from 'react-native-system-notification';
export default class AlertScreen extends Component{

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            favticket:[],
            activeTab: 'alerts',
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
            selectedmedicineDate:20180814,
            selectedmedicinefrequency:'Daily',
            selectedDate:20180814,
            filteredTestResult:[],
            selectedTestName:'',
            istestSorted: false,
            result:[],
            gestureName: 'none',
            timer:500,
            cal_auth: ''

        };
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }


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

    handleChange(value: string) {
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
                Actions.homeScreen();
                break;
            case 'reports':
                this.displayTrend(testtypes[0].testname ? testtypes[0].testname : 'FBS', this.state.selectedDate);
                // Actions.trendScreen(testtypes[0].testname ? testtypes[0].testname : 'FBS', this.state.selectedDate);
                break;
            case 'alerts':
                break;
            case 'profile':
                Actions.profileScreen();
                break;
            default:

        }
    };

    displayTrend(treandtestname, trendtestdate) {
        // Toast.show(" current result name" +msg,Toast.LONG)
        testtdetail.testname=treandtestname;
        testtdetail.testdate=trendtestdate;
        Actions.trendScreen(testtdetail);
    };

    componentDidMount() {
        // await AsyncStorage.getItem('newtest')
        //     .then((ntest) => {
        //
        //         testdata = ntest ? JSON.parse(ntest) : [];
        //
        //         medicinetypes.push(testdata);
        //         // alert(JSON.stringify(testdata));
        //
        //         this.filterByTestDate(this.state.selectedmedicinefrequency);
        //         BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        //
        //     }).done();
        this.filterByTestDate(this.state.selectedmedicinefrequency);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        AppState.addEventListener('change', this.handleAppStateChange);
        // this.fetchData();
        RNCalendarEvents.saveEvent('Title of event', {
            startDate: '2018-10-30T16:28:00+05:30',
            endDate: '2018-10-30T16:28:00+05:30',
            alarms: [{
              date: '2018-10-30T16:28:00+05:30'
            }]
          })

        // this.timer = setInterval(()=> this.fetchData(), 500)
        // setTimeout(() => {
           // Android
    
            
        // }, 500)
        // this.filterByTestDate(this.state.selectedmedicinefrequency);
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        // await AsyncStorage.getItem('favs')
        //     .then((favs) => {
        //         let tempfavticket = favoriteticketdata;
        //         // alert("all tick"+favs+"favticket");
        //         favoriteticketdata = favs ? JSON.parse(favs) : tempfavticket;
        //         // this.setState({favticket: favoriteticketdata});
        //         // alert("all tick"+JSON.stringify(favoriteticketdata.routes));
        //     }).done();
        // await AsyncStorage.getItem('mobileno')
        //     .then((mobileno) => {
        //         // let tempfavticket = favoriteticketdata;
        //         // alert("all tick"+favs+"favticket");
        //         favoriteticketdata.mobile = mobileno;
        //         // this.setState({favticket: favoriteticketdata});
        //         // AsyncStorage.setItem('number', (favoriteticketdata.mobile));
        //         // alert("all tick"+(favoriteticketdata.mobile));
        //         BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        //     }).done();
        // AppState.addEventListener('change',this.handleAppStateChange);
    }
    // fetchData = async () => {
    //     try {
    //         await fetch('https://mywebsite.com/endpoint/');
    //     } catch (error) {
    //         this.dropdown.alertWithType('error', 'Error', error.message);
    //     }
    // };
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        AppState.removeEventListener('change', this.handleAppStateChange);
    }
    handleAppStateChange(appState) {
        // (seconds) => this.setState({ seconds })
        // this.setState({ seconds: true });
        if (appState === 'background') {
            // this.timer = setInterval(()=> this.fetchData(), 500);
        }
    }
    handleBackButton = () => {
        Actions.homeScreen();
        return true;
    };

    onTestNameShowpicker = () => {
        this.setState({ pickervisible2: true });
    };

    onTestNameSelectpicker = (picked) => {
        this.setState({
            selectedmedicinefrequency: picked,
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
        Actions.addeventScreen();
    };

    displayAlert(msg) {
        // Toast.show(" current result name" +msg,Toast.LONG)
        testtdetail.medicinename=msg;
        // Actions.trendScreen(testtdetail);
    };

    filterByTestDate(newfrequency){
        this.setState( {filteredTestResult: medicinetypes.filter( (testresult) =>
            {return testresult.medfrequency === newfrequency}) });
    };

    filterByTestName(searchText, nDate){
        this.setState({selectedTestName: searchText});

        this.setState( {filteredTestResult: medicinetypes.filter( (testresult) =>
            {return testresult.medicinename.toLowerCase().includes(searchText.toLowerCase()) && testresult.startdate === nDate}) });
    };

    sortByTestName(sDate) {
        if (this.state.istestSorted === false) {
            this.setState({
                filteredTestResult: medicinetypes.filter((testresult) => {
                    return testresult.startdate === sDate
                }).sort(
                    (a, b) => {return a.medicinename.toLowerCase().localeCompare(b.medicinename.toLowerCase());
                    }
                ),
                istestSorted: true
            });
        } else {
            this.setState({
                filteredTestResult: medicinetypes.filter((testresult) => {
                    return testresult.startdate === sDate
                }).sort(
                    (a, b) => {return (-1) * (a.medicinename.toLowerCase().localeCompare(b.medicinename.toLowerCase()) );
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

        this.setState({selectedmedicinefrequency: testdates[newdateindex].key});

        // alert("Swiped left "+ testdates[newdateindex].key);
        this.filterByTestDate(testdates[newdateindex].key);

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

        this.setState({selectedmedicinefrequency: testdates[newdateindex].key});


        // alert("Swiped Right "+ testdates[newdateindex].key);
        this.filterByTestDate(testdates[newdateindex].key);
    }

    // fetchData = async () => {
    //    // Creates an alarm with the TAG iDream at 17:30 hrs.
    //     RNAlarm.createAlarm('iDream', 17, 30);          
       
    // };
    render() {



        testtdetail = {};
        testtdetail = {
            medfrequency:this.state.selectedmedicinefrequency,
            startdate:this.state.selectedmedicineDate,
            medicinename:'',
            testdate:this.state.selectedDate,
            testname:''

        };
        let localFilteredResult = this.state.filteredTestResult;

        renderResultCard = localFilteredResult.map( (currentResult, resultIndex) => {
            return(
                <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                    borderTopLeftRadius:10,borderLeftWidth:10}}>
                <View style={{flexDirection:'row' ,marginBottom:25}}>
                        <View style={{flexDirection:"column",justifyContent:'space-evenly',flex:1}}>
                            <Text style={{marginBottom:5}}>Medicine</Text>
                            <Text style={{marginBottom:5}}>Frequency</Text>
                            <Text style={{marginBottom:5}}>Repeat</Text>
                        </View>

                        <View style={{flexDirection:"column",justifyContent:'flex-start',flex:3}}>
                            <TouchableOpacity onPress={() => {this.displayAlert(currentResult.medicinename)}}>
                                <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.medicinename}</Text>
                            </TouchableOpacity>
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.medfrequency}</Text>
                            {(currentResult.medfrequency==="Daily") &&
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.repeat1} {currentResult.repeat2} {currentResult.repeat3} {currentResult.repeat4}</Text>
                            }
                            {(currentResult.medfrequency==="Weekly") &&
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.weekday}</Text>
                            }
                            {(currentResult.medfrequency==="Monthly") &&
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.meddate}th of every month</Text>
                            }

                         </View>
                </View>
                </Card>
                    );
        });

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#f1f1f1f1'/>
                </View>

                <View style={[styles.headerview]}>
                    {/* <View>
                        <DropdownAlert ref={ref => this.dropdown = ref} />
                    </View> */}
                    <ScrollView>
                    <View style={{flexDirection:"row",paddingRight:10,
                        paddingLeft:10,backgroundColor:'#4d6bcb',height:50}}>
                        <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  Welcome James</Text>

                        {/*<TouchableOpacity  style={{marginTop:5,paddingRight:10,paddingLeft:10}}*/}
                        {/*onPress={() => {(this.openDialog(true))}}>*/}
                        {/*<Icons type='FontAwesome' name='search' size={30} color="#FFFFFF"/>*/}
                        {/*</TouchableOpacity>*/}
                        <TouchableOpacity style={{marginTop:10,paddingRight:10,paddingLeft:10}}
                                          onPress={this.onTestNameShowpicker} >

                            <Iconns type='EvilIcons' name='calendar' size={30} color="#FFFFFF"/>
                        </TouchableOpacity>
                        <ModalFilterPicker
                            visible={this.state.pickervisible2}
                            onSelect={this.onTestNameSelectpicker}
                            onCancel={this.onTestNameCancelpicker}
                            options={medsfrequecy}
                            optionTextStyle={style={fontSize:16}}
                        />
                        <TouchableOpacity style={{marginTop:5,paddingRight:10,paddingLeft:10}}
                                          onPress={this.onplusButtonPress}>
                            <Icons type='MaterialCommunityIcons' name='plus' size={30} color="#FFFFFF"/>

                        </TouchableOpacity>
                    </View>

                    <View >
                        <TextField label="Search Medicine By Name"
                                   lineHeight={30}
                                   value={this.state.selectedTestName}
                                   editable={true}
                                   fontSize={16}
                                   onChangeText={(itemValue) => {this.filterByTestName(itemValue, this.state.selectedmedicineDate)} }
                                   containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:60,marginRight:10,justifyContent:'flex-end'}}/>
                        {/*<GestureRecognizer*/}
                            {/*onSwipeLeft={() => this.onSwipeLeft(this.state.selectedmedicineDate)}*/}
                            {/*onSwipeRight={() => this.onSwipeRight(this.state.selectedmedicineDate)}*/}
                        {/*>*/}
                            {/*<Card>*/}

                                {/*<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>*/}
                                    {/*<TouchableOpacity style={{alignItems:'center'}} onPress={() => this.onSwipeLeft(this.state.selectedmedicineDate)}>*/}
                                        {/*<Iccon type='SimpleLineIcons' name='arrow-left' size={18} color="#000"/>*/}
                                    {/*</TouchableOpacity>*/}
                                    {/*<TouchableOpacity onPress={() => this.sortByTestName(this.state.selectedmedicineDate)}>*/}
                                        {/*<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>*/}
                                            {/*<Text style={{marginBottom:5,textDecoration:'underline',fontWeight:'bold',fontStyle:'italic'}}>*/}
                                                {/*Medicine Name</Text>*/}
                                            {/*<Icon type='MaterialIcons' name='sort-by-alpha' size={18} color="#000"/>*/}
                                        {/*</View>*/}
                                    {/*</TouchableOpacity>*/}
                                    {/*<Text style={{marginBottom:5,textDecoration:'underline',fontWeight:'bold',fontStyle:'italic'}}>Frequency</Text>*/}
                                    {/*<Text style={{marginBottom:5,textDecoration:'underline',fontWeight:'bold',fontStyle:'italic'}}>Repeat</Text>*/}
                                    {/*<TouchableOpacity style={{alignItems:'center'}} onPress={() => this.onSwipeRight(this.state.selectedmedicineDate)}>*/}
                                        {/*<Iccon type='SimpleLineIcons' name='arrow-right' size={18} color="#000"/>*/}
                                    {/*</TouchableOpacity>*/}
                                {/*</View>*/}

                                {renderResultCard}

                            {/*</Card>*/}
                        {/*</GestureRecognizer>*/}

                    </View>
                    </ScrollView>
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