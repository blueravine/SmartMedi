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
    // {
    //     id: 1267,
    //     medicinename: 'Insulin',
    //     medfrequency:'Daily',
    //     repeat1: '8AM',
    //     repeat2: '11AM',
    //     repeat3: '4PM',
    //     repeat4: '10PM',
    //     weekday:null,
    //     meddate: null,
    //     startdate:20181016,
    //     enddate:20181123,
    // },
    // { id: 1268,
    //     medicinename: 'losar',
    //     medfrequency:'Daily',
    //     repeat1: '8AM',
    //     repeat2: '10PM',
    //     repeat3: null,
    //     repeat4: null,
    //     weekday:null,
    //     meddate: null,
    // },
    // {	id: 1267,
    //     medicinename: 'Atorvastatin',
    //     medfrequency:'Daily',
    //     repeat1: '8AM',
    //     repeat2: '10PM',
    //     repeat3: null,
    //     repeat4: null,
    //     weekday:null,
    //     meddate: null,
    //     startdate:20181016,
    //     enddate:20181123,
    // },
    // {	id: 1267,
    //     medicinename: 'Thironum',
    //     medfrequency:'Daily',
    //     repeat1: '8AM',
    //     repeat2: '10AM',
    //     repeat3: null,
    //     repeat4: null,
    //     weekday:null,
    //     meddate: null,
    //     startdate:20181016,
    //     enddate:20181123,
    // },
    // { id: 1268,
    //     medicinename: 'uprise d3',
    //     medfrequency:'Daily',
    //     repeat1: '8AM',
    //     repeat2: '10PM',
    //     repeat3: null,
    //     repeat4: null,
    //     weekday:null,
    //     meddate: null,
    //     startdate:20181016,
    //     enddate:20181123,

    // },
    // { id: 1268,
    //     medicinename: 'Insulin',
    //     medfrequency:'Monthly',
    //     weekday:null,
    //     repeat1: null,
    //     repeat2: null,
    //     repeat3: null,
    //     repeat4: null,
    //     meddate: 8,
    //     startdate:20181016,
    //     enddate:20181123,

    // },
    // {
    //     id: 1267,
    //     medicinename: 'Insulin',
    //     medfrequency:'Weekly',
    //     weekday:'Monday',
    //     repeat1: null,
    //     repeat2: null,
    //     repeat3: null,
    //     repeat4: null,
    //     meddate: null,
    //     startdate:20180814,
    //     enddate:201810914,
    // },
    // { id: 1268,
    //     medicinename: 'losar',
    //     medfrequency:'Daily',
    //     repeat1: '8AM',
    //     repeat2: '10PM',
    //     repeat3: null,
    //     repeat4: null,
    //     weekday:null,
    //     meddate: null,
    //     startdate:20180814,
    //     enddate:201810914,
    // },
    // {	id: 1267,
    //     medicinename: 'Atorvastatin',
    //     medfrequency:'Daily',
    //     repeat1: '8AM',
    //     repeat2: '10PM',
    //     repeat3: null,
    //     repeat4: null,
    //     weekday:null,
    //     meddate: null,
    //     startdate:20180814,
    //     enddate:201810914,
    // },
    // { id: 1267,
    //     medicinename: 'uprise d3',
    //     medfrequency:'Monthly',
    //     weekday:null,
    //     repeat1: null,
    //     repeat2: null,
    //     repeat3: null,
    //     repeat4: null,
    //     meddate: 10,
    //     startdate:20180814,
    //     enddate:201810914,

    // },

    // {	id: 1267,
    //     medicinename: 'Atorvastatin',
    //     medfrequency:'Weekly',
    //     weekday:'Monday',
    //     repeat1: null,
    //     repeat2: null,
    //     repeat3: null,
    //     repeat4: null,
    //     meddate: null,
    //     startdate:20180612,
    //     enddate:20180714,
    // },
    // {	id: 1267,
    //     medicinename: 'Thironum',
    //     medfrequency:'Daily',
    //     repeat1: '8AM',
    //     repeat2: '10AM',
    //     repeat3: null,
    //     repeat4: null,
    //     weekday:null,
    //     meddate: null,
    //     startdate:20180612,
    //     enddate:20180714,
    // },
    // { id: 1268,
    //     medicinename: 'uprise d3',
    //     medfrequency:'Weekly',
    //     weekday:'Monday',
    //     repeat1: null,
    //     repeat2: null,
    //     repeat3: null,
    //     repeat4: null,
    //     meddate: null,
    //     startdate:20180612,
    //     enddate:20180714,

    // },

    // { id: 1268,
    //     medicinename: 'uprise d3',
    //     medfrequency:'Monthly',
    //     weekday:null,
    //     repeat1: null,
    //     repeat2: null,
    //     repeat3: null,
    //     repeat4: null,
    //     meddate: 12,
    //     startdate:20180612,
    //     enddate:20180714,

    // },
];

var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null};
var testdata=[];
const testtypes=[

];
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
        key: 'All',
        label: 'All',
    },
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
            selectedmedicinefrequency:'All',
            selectedDate:20180814,
            filteredTestResult:[],
            selectedTestName:'',
            istestSorted: false,
            result:[],
            gestureName: 'none',
            timer:500,
            cal_auth: '',
            appState: AppState.currentState,
            feedbacknotes:'',
            isloading:false

        };
        // this._handleAppStateChange = this._handleAppStateChange.bind(this);
        this._onLoadScreen = this._onLoadScreen.bind(this);
        this.refreshalerttestresults = this.refreshalerttestresults.bind(this);
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
                Actions.homeScreen();
                break;
            case 'reports':
                Actions.trendScreen();
                break;
            case 'alerts':
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

    displayTrend(treandtestname, trendtestdate) {
        // Toast.show(" current result name" +msg,Toast.LONG)
        testtdetail.testname=treandtestname;
        testtdetail.testdate=trendtestdate;
        
        callerscreen = currentscreen;
        Actions.trendScreen(testtdetail);
    };
    async refreshalerttestresults(){
        
        fetch('https://interface.blueravine.in/smartmedi/alert/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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

        if (responseJson.messagecode===4002) {
            testdata = responseJson.Alert.slice();
            AsyncStorage.setItem('useralertInfo',JSON.stringify(testdata))
                .then((useralertInfo) => {
                    
                }).done(() =>{
                    medicinetypes = testdata.slice();
                    this.setState({filteredTestResult: medicinetypes.slice()});
                
                }); //done
        }
        else {
            //###Need to handle error in retrieving test results from server
        }
    }).catch((error) => {
            alert(error);
        });
    }
    _onLoadScreen(){
        AsyncStorage.getItem('userInfo')
        .then((userInfo) => {
            
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
            
            
        }).done();
  
         AsyncStorage.getItem('useralertInfo')
        .then((useralertInfo) => {
      
        let tempuseralertdata = testdata;
        testdata = useralertInfo ? JSON.parse(useralertInfo) : tempuseralertdata;
  
  
  
        }).done(() => {
        if(!(testdata.length)) {
          fetch('https://interface.blueravine.in/smartmedi/alert/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
    
      }) //fetch
      .then((response) => response.json())
      .then((responseJson) => {
  
          if (responseJson.messagecode===4002) {
              testdata = responseJson.Alert.slice();
              AsyncStorage.setItem('useralertInfo',JSON.stringify(testdata))
                  .then((useralertInfo) => {
                      
                  }).done(() =>{
                      medicinetypes = testdata.slice();
                      this.setState({filteredTestResult: medicinetypes.slice()});
                  }); //done
          }
          else {
              //###Need to handle error in retrieving test results from server
          }
      }).catch((error) => {
              alert(error);
          });
        } //end of if no test results in Async Storage
        else {
          medicinetypes = testdata.slice();
          this.setState({filteredTestResult: medicinetypes.slice()});
      
            }
  
        });
  //#####
 
          BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  
    }
     componentDidMount() {
        currentscreen='alert';
         this.setState({selectedmedicinefrequency:'All'});
    this._onLoadScreen();
    }
   
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    
    handleBackButton = () => {
        callerscreen = currentscreen;
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
        this.filterByMedfreq(picked);
    };

    onTestNameCancelpicker = () => {
        this.setState({
            pickervisible2: false
        });
    };

    onplusButtonPress = () => {
        callerscreen = currentscreen;
        Actions.addeventScreen();
    };

    filterByMedfreq(newfrequency){
        if(!newfrequency || newfrequency === 'All'){
            this.setState({selectedmedicinefrequency: newfrequency,
            filteredTestResult: medicinetypes.slice() });
        }
        else {
            this.setState( {filteredTestResult: medicinetypes.filter( (testresult) =>
                {return testresult.medfrequency === newfrequency}) });
        }
    };

    filterByTestName(searchText){
        this.setState({selectedTestName: searchText,
            filteredTestResult: medicinetypes.filter( (testresult) =>
            {return testresult.medicinename.toLowerCase().includes(searchText.toLowerCase())}) });
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

        this.filterByMedfreq(testdates[newdateindex].key);

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


        this.filterByMedfreq(testdates[newdateindex].key);
    }

    ShowHidesearchActivityIndicator = () =>{

        this.setState({isloading: true});
        setTimeout(() => {
            this._OnfeedbackSubmit();
            // Actions.homeScreen();
            // Snackbar.show({
            //     title: 'FeedBack Submitted succesfully.',
            //     duration: Snackbar.LENGTH_LONG,
            // });
        }, 500)
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

        // this.filterByMedfreq(this.state.selectedmedicinefrequency);

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
                
                <Card>
                 <TouchableOpacity onPress={() => {
                                                    callerscreen = currentscreen;
                                                    Actions.addeventScreen(currentResult)}}>
                <View style={{flexDirection:'row' ,marginBottom:25}}>
                        <View style={{flexDirection:"column",justifyContent:'space-evenly',flex:1}}>
                            <Text style={{marginBottom:5}}>Medicine</Text>
                            <Text style={{marginBottom:5}}>Frequency</Text>
                            <Text style={{marginBottom:5}}>Repeat</Text>
                            <Text style={{marginBottom:5}}>Notes</Text>
                        </View>

                        <View style={{flexDirection:"column",justifyContent:'flex-start',flex:3}}>
                           
                                <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.medicinename}</Text>
                        
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.medfrequency}</Text>
                            {(currentResult.medfrequency==="Daily") &&
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.repeat1} {currentResult.repeat2} {currentResult.repeat3} {"\n"}   {currentResult.repeat4}</Text>
                            }
                            {(currentResult.medfrequency==="Weekly") &&
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.weekday} {currentResult.repeat1}</Text>
                            }
                            {(currentResult.medfrequency==="Monthly") &&
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.meddate}
                            {(currentResult.meddate > 3 && currentResult.meddate < 21) ? 'th '
                                    : (((currentResult.meddate % 10) === 1) ? 'st '
                                    : (((currentResult.meddate % 10) === 2) ? 'nd '
                                    : (((currentResult.meddate % 10) === 3) ? 'rd ' : 'th ')))}
                             of every month at {currentResult.repeat1}</Text>
                            }
                            <Text style={{marginBottom:5,fontWeight:'bold'}}> : {currentResult.notes ? currentResult.notes : 'Notes not entered'}</Text>

                         </View>
                </View>
                </TouchableOpacity>
                </Card>
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
                    {/* <View>
                        <DropdownAlert ref={ref => this.dropdown = ref} />
                    </View> */}
                   
                    <View style={{flexDirection:"row",paddingRight:10,
                        paddingLeft:10,backgroundColor:'#4d6bcb',height:50}}>
                        <View style={{flex:3,flexDirection:"row"}}>
                        <Text note style={{fontSize:16,textAlign:'left',marginTop:10,color:'#FFFFFF'}} >  Alerts</Text>
                        </View>
                        {/*<TouchableOpacity  style={{marginTop:5,paddingRight:10,paddingLeft:10}}*/}
                        {/*onPress={() => {(this.openDialog(true))}}>*/}
                        {/*<Icons type='FontAwesome' name='search' size={30} color="#FFFFFF"/>*/}
                        {/*</TouchableOpacity>*/}
                        <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
                        <TouchableOpacity 
                                         onPress={this.refreshalerttestresults}>
                                         <View style={{flexDirection:"column",alignItems:'center',marginTop:10}}>
                            <Iccon type='SimpleLineIcons' name='refresh' size={24} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                    Refresh </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                                          onPress={this.onTestNameShowpicker} >
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
                            options={medsfrequecy}
                            optionTextStyle={style={fontSize:16}}
                        />
                        <TouchableOpacity 
                                          onPress={this.onplusButtonPress}>
                                          <View style={{flexDirection:"column",alignItems:'center',marginTop:5}}>
                            <Icons type='MaterialCommunityIcons' name='plus' size={30} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                    Add Alerts  </Text>
                            </View>

                        </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView >
                    <View style={{marginBottom:300}}>
                    <View >
                        <TextField label="Search Medicine By Name"
                                   lineHeight={30}
                                   value={this.state.selectedTestName}
                                   editable={true}
                                   fontSize={16}
                                   onChangeText={(itemValue) => {this.filterByTestName(itemValue)} }
                                   containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:60,marginRight:10,justifyContent:'flex-end'}}/>
                      
                     
                                {renderResultCard}
      
                    </View>
                    </View>
                    </ScrollView>
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
                        else{(this.openDialog(false)),this.ShowHidesearchActivityIndicator()}}}
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