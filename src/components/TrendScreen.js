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
import Iccon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import { Dropdown } from 'react-native-material-dropdown';
import Iccons from 'react-native-vector-icons/FontAwesome'
import { Dialog } from 'react-native-simple-dialogs';
import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation';
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
var testdetail;
var testData;
var trendchartdata = [];
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null};
var testdata=[];
var testInfodata=[];
var testtypesdata=[];
// import Chart from 'react-native-simple-charts';
import PureChart from 'react-native-pure-chart';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
// import {LineChart} from 'react-native-charts-wrapper';
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

var trentestresultname = [
    // {
    //     key: 'FBS',
    //     label: 'FBS',
    // },
    // {
    //     key: 'PPBS',
    //     label: 'PPBS',
    // },
    // {
    //     key: 'Tri Glycer',
    //     label: 'Tri Glycer',
    // },
    // {
    //     key: 'Cholestrol',
    //     label: 'Cholestrol',
    // },
    // {
    //     key: 'LDL',
    //     label: 'LDL',
    // },
    // {
    //     key: 'HDL',
    //     label: 'HDL',
    // },
    // {
    //     key: 'TSH',
    //     label: 'TSH',
    // },
    // {
    //     key: 'Vitamin D',
    //     label: 'Vitamin D',
    // },
];
var filteredTrendResult=[];
export default class TrendScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            activeTab: 'reports',
            active: 'false',
            pickervisible1: false,
            selectedtestname:'',
            testrange:'',
            feedbacknotes:''
        };
        // this.handleAppStateChange = this.handleAppStateChange.bind(this);
        // this._onButtonPressed = this._onButtonPressed.bind(this);
    }

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
        switch (pressedKey) {
            case 'home':
                Actions.homeScreen();
                break;
            case 'reports':

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


    async componentDidMount() {
//#####

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

        // await  AsyncStorage.getItem('testInfo')
        // .then(() => {
            // alert(JSON.stringify(userInfo));
            // let temptestdata = testInfodata;
            // testInfodata = testInfo ? JSON.parse(testInfo) : temptestdata;
        
            // testtypesdata = JSON.parse(testInfodata).slice();

            // testInfodata.countrycode = jsontestinfo.countrycode;
            // testInfodata.testname = jsontestinfo.testname;
            // testInfodata.testunit = jsontestinfo.testunit;
            // testInfodata.testagemin = jsontestinfo.testagemin;
            // testInfodata.testagemax = jsontestinfo.testagemax;
            // testInfodata.testgender = jsontestinfo.testgender;
            // testInfodata.normalmin = jsontestinfo.normalmin;
            // testInfodata.normalmax = jsontestinfo.normalmax;
            // testInfodata.normalcomparator = jsontestinfo.normalcomparator;
            // testInfodata.category = jsontestinfo.category;
            // alert((testInfodata.mobile)+(userdata.jwt))
            
        // }).done( (testInfo) => {
            
        //     // testtypesdata = JSON.parse(testInfo).slice();
        // });

        await AsyncStorage.getItem('testInfo')
        .then((testInfo) => {
        // alert(JSON.stringify(userInfo));
        let temptestdata = testInfodata;
        testInfodata = testInfo ? JSON.parse(testInfo) : temptestdata;
        }).done(() => {
        if(!(testInfodata.length)) {
            Actions.homeScreen();
        } //if no test results in Async Storage
        else {
                testtypesdata = testInfodata.slice();
                // alert(JSON.stringify(testtypesdata));
           }

        });

        await AsyncStorage.getItem('usertestInfo')
        .then((usertestInfo) => {
        // alert(JSON.stringify(userInfo));
        let tempusertestdata = testdata;
        testdata = usertestInfo ? JSON.parse(usertestInfo) : tempusertestdata;


        // alert("initial fetch " +JSON.stringify(testdata));

        }).done(() => {
        if(!(testdata.length)) {
            Actions.homeScreen();
        } //if no test results in Async Storage
        else {
                testtypes = testdata.slice();

                let tnames = [], outnames = [], l = testdata.length, i;
                for( i=0; i<l; i++) {
                    if( tnames[testdata[i].testname]) continue;
                    tnames[testdata[i].testname] = true;
                    outnames.push(testdata[i].testname);
                }

                trentestresultname = [];
                outnames.forEach((currname, dateidx) => {
                let eachname = {label: currname, key: currname};

                trentestresultname.push(eachname);
                }); //forEach

                if(this.props.data){
                    this.setState({selectedtestname:this.props.data});
            }
            else if(trentestresultname.length){
                this.setState({selectedtestname: trentestresultname[0].key});
                }
                              

            }

        });
//#####
        // this.setState({selectedtestname: this.props.testname});
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        // Toast.show(" current result name" +testdetail.testname+ " " +testdetail.testdate,Toast.LONG);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        Actions.homeScreen(testdetail);
        return true;
    };


    onTrendTestNameShowpicker = () => {
        this.setState({ pickervisible1: true });
    };

    onTrendTestNameSelectpicker = (picked) => {
        this.setState({
            selectedtestname: picked,
            pickervisible1: false,
        });
        // this.filterByTestDate(picked);
    };

    onTrendTestNameCancelpicker = () => {
        this.setState({
            pickervisible1: false
        });
    };

    onSwipeLeft(swipedLeftName) {
        let newnameindex=0;
        let nameindex = trentestresultname.findIndex(function(currentname, idx){
            return currentname.key === swipedLeftName;
        });

        if(nameindex === (trentestresultname.length-1)){
            newnameindex=0;
        } else{
            newnameindex = nameindex + 1;
        }

        this.setState({selectedtestname: trentestresultname[newnameindex].key});

        // alert("Swiped left "+ testdates[newdateindex].key);
        // this.filterByTestDate(testdates[newdateindex].key);

    }

    onSwipeRight(swipedRightName) {
        let newnameindex=0;
        let nameindex = trentestresultname.findIndex(function(currentname, idx){
            return currentname.key === swipedRightName;
        });

        if(nameindex === 0){
            newnameindex=(trentestresultname.length-1);
        } else{
            newnameindex = nameindex - 1;
        }

        this.setState({selectedtestname: trentestresultname[newnameindex].key});


        // alert("Swiped Right "+ testdates[newdateindex].key);
        // this.filterByTestDate(testdates[newnameindex].key);
    }



    render() {


        testdetail = {};
        testdetail = {
            // testdate:this.props.testdate.toString().substring(6, 8) + '/' + this.props.testdate.toString().substring(4, 6) + '/' + this.props.testdate.toString().substring(0, 4),
            testname:this.state.selectedtestname,
            // testrange:this.state.testrange

        };

         filteredTrendResult = testtypes.filter((trendresult) => {return trendresult.testname === this.state.selectedtestname});

        filteredTrendResult.sort((a,b) =>
        {
            if (a.testdate < b.testdate) {
                return 1;
            } else if (a.testdate > b.testdate) {
                return -1;
            }
            return 0;
        });


        trendchartdata = [];

        var renderTrendCard = filteredTrendResult.map( (currentTrend, trendIndex) => {
            testData =
                {x: currentTrend.testdate.toString().substring(6, 8)
                    + '/' + currentTrend.testdate.toString().substring(4, 6) + '/'
                    + currentTrend.testdate.toString().substring(0, 4),
                    y: currentTrend.value};

            trendchartdata.push(testData);

            return(
                <View style={{flexDirection:'row' , justifyContent:'space-evenly',marginBottom:5,borderWidth:1,borderColor:'#f1f1f1f1'}}>
                    <Text style={{marginBottom:5}} >{currentTrend.testdate.toString().substring(6, 8)
                    + '/' + currentTrend.testdate.toString().substring(4, 6) + '/'
                    + currentTrend.testdate.toString().substring(0, 4)}</Text>
                    {(currentTrend.result === "high") &&
                    <Text style={{textAlign:'center',color:'#F80617',marginBottom:5}}>{currentTrend.value}</Text>
                    }
                    {(currentTrend.result === "normal") &&
                    <Text style={{textAlign:'center',color:'#0db75a',marginBottom:5,fontWeight:'bold'}}>{currentTrend.value}</Text>
                    }
                    {(currentTrend.result === "between") &&
                    <Text style={{textAlign:'center',color:'#0db75a',marginBottom:5,fontWeight:'bold'}}>{currentTrend.value}</Text>
                    }
                    {/* <Text>{currentTrend.normalmax}</Text> */}
                </View>

            );
        });

        var testNormalRange = testtypesdata.map((currTest) => {
            if((currTest.countrycode === userdata.countrycode) && (currTest.testname === this.state.selectedtestname)) {
                return (
                    <View>
                    {(currTest.normalcomparator === "lessthan")&&
                    <Text style={{textAlign:'center',fontStyle: 'italic',fontSize:12}}>Normal range &#x0003C; {currTest.normalmax + '-' + currTest.testunit}</Text>
                    }
                    {(currTest.normalcomparator === "between") &&
                    <Text style={{textAlign:'center',fontStyle: 'italic',fontSize:12}}>Normal range {currTest.normalmin + '-' + currTest.normalmax + '-' + currTest.testunit}</Text>
                    }
                    </View>
                );
            }
        });

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#1C306F'/>
                </View>

                <View style={[styles.headerview]}>
                    <View style={{flexDirection:"row",paddingRight:10,
                        paddingLeft:10,backgroundColor:'#4d6bcb',height:50}}>
                        <TouchableOpacity style={{marginTop:10}}
                                          onPress={() => Actions.homeScreen()}>
                            <Icon type='MaterialIcons' name='arrow-back' size={30} color="#FFFFFF"/>
                        </TouchableOpacity>
                        <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  Test Result Trend</Text>
                    </View>
                 <ScrollView><View style={{marginBottom:200}}>

                    {/*<Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,*/}
                        {/*borderTopLeftRadius:10,borderLeftWidth:10}} >*/}
                        <Card style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
                            <TouchableOpacity style={{alignItems:'center',marginTop:180}} onPress={() => this.onSwipeLeft(this.state.selectedtestname)}>
                                <Icons type='SimpleLineIcons' name='arrow-left' size={18} color="#000"/>
                            </TouchableOpacity>
                        {/* <GestureRecognizer
                            onSwipeLeft={() => this.onSwipeLeft(this.state.selectedtestname)}
                            onSwipeRight={() => this.onSwipeRight(this.state.selectedtestname)}
                        > */}

                            <View style={{width:300}}>
                            {/* <GestureRecognizer
                            onSwipeLeft={() => this.onSwipeLeft(this.state.selectedtestname)}
                            onSwipeRight={() => this.onSwipeRight(this.state.selectedtestname)}> */}
                            <View>
                                <View style={{flexDirection:'row' , justifyContent:'space-evenly',marginTop:10}}>

                            <TouchableOpacity onPress={this.onTrendTestNameShowpicker}>
                            <Text style={{textAlign:'center',color:'#000',textsize:12,paddingLeft:5,paddingRight:5, borderRadius:30,borderColor:'#0A68FF',borderWidth:1}}>{this.state.selectedtestname.toString().toUpperCase()}</Text>
                            </TouchableOpacity>
                            <ModalFilterPicker
                                visible={this.state.pickervisible1}
                                onSelect={this.onTrendTestNameSelectpicker}
                                onCancel={this.onTrendTestNameCancelpicker}
                                options={trentestresultname}
                                optionTextStyle={style={fontSize:16}}
                            />
                            
                        </View>
                        {testNormalRange}
                        <View style={{marginTop:5,flexDirection:'row',justifyContent:'space-evenly',borderWidth:1,borderColor:'#f1f1f1f1'}}>
                            <Text style={{marginBottom:5,marginLeft:20,textDecorationLine:'underline',fontWeight:'bold'}}>Test Date</Text>
                            <Text style={{marginBottom:5,marginLeft:20,textDecorationLine:'underline',fontWeight:'bold'}}>Actual</Text>
                            {/* <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'bold'}}>Normal</Text> */}
                        </View>

                        {renderTrendCard}
                        </View>
                        {/* </GestureRecognizer> */}
                        <View style={{marginTop:2,flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{textAlign:'center'}}>Click </Text>
                        <TouchableOpacity onPress={this.onTrendTestNameShowpicker}>
                            <Text style={{textAlign:'center',color:'#0A68FF',textDecorationLine:'underline',fontWeight:'bold'}}>here</Text>
                            </TouchableOpacity>
                            <Text style={{textAlign:'center'}}> to change to different test</Text>
                        </View>
                       
                        <Card style={{marginBottom:90}}>
                        <PureChart
                            width={100}
                            height={100}
                            data={trendchartdata.reverse()}
                            type='line' />
                            </Card>
                      
                      <View>

                      </View>

                            </View>

                        {/* </GestureRecognizer> */}
                            <TouchableOpacity style={{alignItems:'center',marginTop:180}} onPress={() => this.onSwipeRight(this.state.selectedtestname)}>
                                <Icons type='SimpleLineIcons' name='arrow-right' size={18} color="#000"/>
                            </TouchableOpacity>
                        </Card>
                        </View>
</ScrollView>
                    {/*</Card>*/}

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
        backgroundColor: '#f1f1f1f1',

    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    chart: {
        flex: 1
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