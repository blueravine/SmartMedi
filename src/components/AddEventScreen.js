import React, { Component,PropTypes } from 'react';
import { Image,ScrollView,StyleSheet,TouchableOpacity,StatusBar,AsyncStorage,ActivityIndicator,BackHandler,AppState,
    UIManager, findNodeHandle,Alert,Keyboard,
    TouchableHighlight,Dimensions,Animated,Easing } from 'react-native';
import { Container, Header, Content, Card, CardItem, Spinner,Thumbnail,Picker,DeckSwiper, Text,Item,icon,Input,View,Fab, Button,  Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iccon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iccons from 'react-native-vector-icons/Foundation'
import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation';
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
import Swiper from 'react-native-swiper';
const card      = {card: {width: 300,height:500}};
const cardItem = {cardItem: {fontSize: 40}};
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

import Icoons from 'react-native-vector-icons/FontAwesome';
const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
};
var temptests;
var addtests;
var alertarray=[];
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null};
var alertdata=[];
var weeklydata = [
    {
    value: 'Monday',
}, {
    value: 'Tuesday',
}, {
    value: 'Wednesday',
}, {
    value: 'Thursday',
}, {
    value: 'Friday',
}, {
    value: 'Saturday',
}, {
    value: 'Sunday',
},
];

var monthlymeddate = [
    {
    value: '1',
}, {
    value: '2',
}, {
    value: '3',
}, {
    value: '4',
}, {
    value: '5',
}, {
    value: '6',
}, {
    value: '7',
}, {
    value: '8',
}, {
    value: '9',
}, {
    value: '10',
}, {
    value: '11',
}, {
    value: '12',
}, {
    value: '13',
}, {
    value: '14',
}, {
    value: '15',
}, {
    value: '16',
}, {
    value: '17',
}, {
    value: '18',
}, {
    value: '19',
}, {
    value: '20',
}, {
    value: '21',
}, {
    value: '22',
}, {
    value: '23',
}, {
    value: '24',
}, {
    value: '25',
}, {
    value: '26',
}, {
    value: '27',
}, {
    value: '28',
}, {
    value: '29',
}, {
    value: '30',
},
];

var freqdata = [
    {
    value: 'Daily',
}, {
    value: 'Weekly',
}, {
    value: 'Monthly',
}
];

var medicinetype = [
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
import { Dropdown } from 'react-native-material-dropdown';
export default class AddEventScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            favticket:[],
            activeTab: 'tests',
            isDateTimePickerVisible: false,
            isDateTimePickerVisible2: false,
            isTimePickerVisible: false,
            isTimePickerVisible1: false,
            isTimePickerVisible2: false,
            isTimePickerVisible3: false,
            isTimePickerVisible4: false,
            isTimePickerVisible5: false,
            selectedItem: undefined,
            selected2: '',
            viewSection :false,
            results: {
                items: []
            },
            pickervisible1: false,
            pickervisible2: false,
            pickervisible3: false,
            picked1: '',
            picked2: 'Daily',
            picked3:'',
            testvalue:'',
            rangevalue:'',
            resultnotes:'',
            date: new Date(),
            time:'',
            datepicked1: new Date(),
            timepicked:'',
            timepicked1:'',
            timepicked2:'',
            timepicked3:'',
            timepicked4:'',
            timepicked5:'',
            datepicked2: new Date(),
            selected1: '',
            weektype:'Monday',
            resultnotes:'',
            meddate:8,
            savealert:'Add',
            alertheader:'Add Alert',
            appState: AppState.currentState

        };
        // this._handleAppStateChange = this._handleAppStateChange.bind(this);
        this.onChangeTextPress=this.onChangeTextPress.bind(this);
        this.onChangeFrequecyTextPress=this.onChangeFrequecyTextPress.bind(this);

        // this.handleAppStateChange = this.handleAppStateChange.bind(this);
        // this._onButtonPressed = this._onButtonPressed.bind(this);
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
        <Icon size={24} color="grey" name={icon} />

    );


    renderTab = ({ tab, isActive }) => (
        <ShiftingTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    );
    onChangeFrequecyTextPress(value){

        // this.setState({selectedvalue: value});
        this.setState({picked2: value});
    }

    onChangeTextPress(value){

        // this.setState({selectedvalue: value});
        this.setState({weektype: value});
    }
    onChangemonthlymeddate(value){

        // this.setState({selectedvalue: value});
        this.setState({meddate: value});
    }
    onValueChange (value) {
        this.setState({
            selected1 : value
        });
    }
    onChangeValue (value) {
        this.setState({
            selected2 : value
        });
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });


    _hideDateTimePicker = () => {this.setState({ isDateTimePickerVisible: false })};

    _handleDatePicked = (date) => {
        this.setState({
            date :  date,
            datepicked1:date,
            // datepicked2:date
        });
        this._hideDateTimePicker();
    };

    _showDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: true });


    _hideDateTimePicker2 = () => {this.setState({ isDateTimePickerVisible2: false })};

    _handleDatePicked2 = (date) => {
        this.setState({
            date :  date,
            // datepicked1:date,
            datepicked2:date
        });
        this._hideDateTimePicker2();
    };
    handleChange(value) {
        this.setState({
            selected: value
        });
    };

    _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleTimePicked = (time) => {
    this.setState({
        time :  time,
        // datepicked1:date,
        timepicked:time
    });
    this._hideTimePicker();
  };
  _showTimePicker1 = () => this.setState({ isTimePickerVisible1: true });

  _hideTimePicker1 = () => this.setState({ isTimePickerVisible1: false });

  _handleTimePicked1 = (time) => {
    this.setState({
        time :  time,
        // datepicked1:date,
        timepicked1:time
    });
    // console.log('A date has been picked: ', date);
  this._hideTimePicker1();
};
    _showTimePicker2 = () => this.setState({ isTimePickerVisible2: true });

    _hideTimePicker2 = () => this.setState({ isTimePickerVisible2: false });
  
    _handleTimePicked2 = (time) => {
      this.setState({
          time :  time,
          // datepicked1:date,
          timepicked2:time
      });
    //   console.log('A date has been picked: ', date);
  this._hideTimePicker2();
    };
      _showTimePicker3 = () => this.setState({ isTimePickerVisible3: true });

      _hideTimePicker3 = () => this.setState({ isTimePickerVisible3: false });
    
      _handleTimePicked3 = (time) => {
        this.setState({
            time :  time,
            // datepicked1:date,
            timepicked3:time
        });
//   console.log('A date has been picked: ', date);
  this._hideTimePicker3();
};


    _handleTabPress(pressedKey) {
        switch (pressedKey) {
            case 'tests':
                break;
            case 'reports':

                break;
            case 'alerts':
                break;
            case 'profile':
                // Actions.profileScreen();
                break;
            default:

        }
    };

    onTestTypeShowpicker = () => {
        this.setState({ pickervisible1: true });
    };
    onTestNameShowpicker = () => {
        this.setState({ pickervisible2: true });
    };
    onTestMedicineNameShowpicker = () => {
        this.setState({ pickervisible3: true });
    };

    onTestTypeSelectpicker = (picked) => {
        this.setState({
            picked1: picked,
            pickervisible1: false,
        });
        // Keyboard.dismiss();
    };
    onTestMedicineNameSelectpicker = (picked) => {
        this.setState({
            picked3: picked,
            pickervisible3: false,
        });
    };

    onTestTypeCancelpicker = () => {
        this.setState({
            pickervisible1: false
        });
    };
    onTestNameCancelpicker = () => {
        this.setState({
            pickervisible2: false
        });
    };

    onTestMedicineNameCancelpicker = () => {
        this.setState({
            pickervisible3: false
        });
    };

    ShowHideActivityIndicator = () =>{

        this.setState({loading: true});
        setTimeout(() => {
            this.saveAlertsData();


            // alert("saved test data " +JSON.stringify(temptests));
            Actions.alertScreen();
            Snackbar.show({
                title: 'Medicine details added succesfully. Please "Refresh"',
                duration: Snackbar.LENGTH_SHORT,
            });
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        }, 500)
        // this.setState({loading: false})
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
    //   alert(JSON.stringify(this.props));
      if(this.props.startdate){
        this.setState({savealert:'Update',
                       alertheader:'Edit Alert',
                       datepicked1:Moment(this.props.startdate, 'YYYYMMDD'),
                       datepicked2:Moment(this.props.enddate, 'YYYYMMDD'),
                       picked3:this.props.medicinename,
                       picked2:this.props.medfrequency,
                       "timepicked": this.props.repeat1 ? Moment(this.props.repeat1,'hh:mm A') : '',
                       "timepicked1": this.props.repeat2 ? Moment(this.props.repeat2,'hh:mm A') :'',
                       "timepicked2": this.props.repeat3 ? Moment(this.props.repeat3,'hh:mm A') : '',
                       "timepicked3": this.props.repeat4 ? Moment(this.props.repeat4,'hh:mm A') : '',
                       "weektype": this.props.weekday,
                       "meddate": this.props.meddate,
                       resultnotes:this.props.notes});
        // alert(Moment(Moment(this.state.datepicked1).format('YYYYMMDD')+ ' ' +Moment(this.state.timepicked).format('hh:mm A'), 'YYYYMMDD hh:mm A').valueOf());
        // alert(Moment(this.state.datepicked1).format('YYYYMMDD'));
      }

    // alert(Date.now());
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        // AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // AppState.removeEventListener('change', this._handleAppStateChange);
    }


    handleBackButton = () => {
        Actions.alertScreen();
        return true;
    };

      onCancelButtonPress = () => {
        Actions.alertScreen();
    };

    async saveAlertsData() {
        Keyboard.dismiss();
        let alertid1, alertid2, alertid3, alertid4;
        // this.setState({datepicked1: Moment(this.state.date).format('YYYYMMDD'),
        //                datepicked2: Moment(this.state.date).format('YYYYMMDD')});
        if(this.state.savealert==='Add')
        {
        alertid1 = parseInt(Moment().format('hhmmssSSS'))+Math.floor(Math.random() * 100);
        alertid2 = parseInt(Moment().format('hhmmssSSS'))+Math.floor(Math.random() * 100);
        alertid3 = parseInt(Moment().format('hhmmssSSS'))+Math.floor(Math.random() * 100);
        alertid4 = parseInt(Moment().format('hhmmssSSS'))+Math.floor(Math.random() * 100);
        fetch('https://smartmedi.blueravine.in/alert/register', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
        body: JSON.stringify([{"mobile":userdata.mobile,
                                "countrycode":userdata.countrycode,
                                "startdate": Moment(this.state.datepicked1).format('YYYYMMDD'),
                                "enddate": Moment(this.state.datepicked2).format('YYYYMMDD'),
                                "medicinename": this.state.picked3,
                                "medfrequency": this.state.picked2,
                                "repeat1": this.state.timepicked ? Moment(this.state.timepicked).format('hh:mm A') :'',
                                "notificationid1": alertid1,
                                "repeat2": this.state.timepicked1 ? Moment(this.state.timepicked1).format('hh:mm A') : '',
                                "notificationid2": alertid2,
                                "repeat3": this.state.timepicked2 ? Moment(this.state.timepicked2).format('hh:mm A') : '',
                                "notificationid3": alertid3,
                                "repeat4": this.state.timepicked3 ? Moment(this.state.timepicked3).format('hh:mm A') : '',
                                "notificationid4": alertid4,
                                "weekday": this.state.weektype,
                                "meddate": this.state.meddate,
                                "notes":this.state.resultnotes
                                }])
    })
        .then((response) => response.json())
        .then((responseJson) => {
            
            if (responseJson.messagecode === 4001) {

                let rptTyp;
                rptTyp = (this.state.picked2 === 'Daily') ? 'day'
                            : ((this.state.picked2 === 'Weekly') ? 'week'
                                    : 'day');
            if(this.state.picked2 === 'Daily' || this.state.picked2 === 'Weekly'){          
                PushNotification.localNotificationSchedule({
                    //... You can use all the options from localNotifications
                    id: alertid1,
                    title: "Reminder from SmartMedi!",
                    message: this.state.picked3, // (required)
                    ongoing: false, // (optional) set whether this is an "ongoing" notification
                    priority: "high", // (optional) set notification priority, default: high
                    visibility: "private", // (optional) set notification visibility, default: private
                    importance: "default", // (optional) set notification importance, default: high
                    playSound: true, // (optional) default: true
                    soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                    repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                    // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                    subText: " "  + this.state.picked3 + " to be taken " + this.state.picked2 + " at " +Moment(this.state.timepicked).format('hh:mm A'), // (optional) default: "message" prop
                    // subText: this.state.timepicked + " " + this.state.picked2,
                    date: new Date(Moment(Moment(this.state.datepicked1).format('YYYYMMDD')+ ' ' +Moment(this.state.timepicked).format('hh:mm A'), 'YYYYMMDD hh:mm A').valueOf()) // in 60 secs
                    // date: new Date(1542611975)
                });
            }
                if(this.state.picked2 === 'Daily' && this.state.timepicked1){

                    PushNotification.localNotificationSchedule({
                        //... You can use all the options from localNotifications
                        id:alertid2,
                        title: "Reminder from SmartMedi!",
                        message: this.state.picked3, // (required)
                        ongoing: false, // (optional) set whether this is an "ongoing" notification
                        priority: "high", // (optional) set notification priority, default: high
                        visibility: "private", // (optional) set notification visibility, default: private
                        importance: "default", // (optional) set notification importance, default: high
                        playSound: true, // (optional) default: true
                        soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        subText: " "  + this.state.picked3 + " to be taken " + this.state.picked2 + " at " +Moment(this.state.timepicked1).format('hh:mm A'), // (optional) default: "message" prop
                        // subText: this.state.timepicked + " " + this.state.picked2,
                        date: new Date(Moment(Moment(this.state.datepicked1).format('YYYYMMDD')+ ' ' +Moment(this.state.timepicked1).format('hh:mm A'), 'YYYYMMDD hh:mm A').valueOf()) // in 60 secs
                        // date: new Date(1542611975)
                    });
                }
                
                if(this.state.picked2 === 'Daily' && this.state.timepicked2){
                    PushNotification.localNotificationSchedule({
                        //... You can use all the options from localNotifications
                        id: alertid3,
                        title: "Reminder from SmartMedi!",
                        message: this.state.picked3, // (required)
                        ongoing: false, // (optional) set whether this is an "ongoing" notification
                        priority: "high", // (optional) set notification priority, default: high
                        visibility: "private", // (optional) set notification visibility, default: private
                        importance: "default", // (optional) set notification importance, default: high
                        playSound: true, // (optional) default: true
                        soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        subText: " "  + this.state.picked3 + " to be taken " + this.state.picked2 + " at " +Moment(this.state.timepicked2).format('hh:mm A'), // (optional) default: "message" prop
                        // subText: this.state.timepicked + " " + this.state.picked2,
                        date: new Date(Moment(Moment(this.state.datepicked1).format('YYYYMMDD')+ ' ' +Moment(this.state.timepicked2).format('hh:mm A'), 'YYYYMMDD hh:mm A').valueOf()) // in 60 secs
                        // date: new Date(1542611975)
                    });
                }

                if(this.state.picked2 === 'Daily' && this.state.timepicked3){
                    PushNotification.localNotificationSchedule({
                        //... You can use all the options from localNotifications
                        id: alertid4,
                        title: "Reminder from SmartMedi!",
                        message: this.state.picked3, // (required)
                        ongoing: false, // (optional) set whether this is an "ongoing" notification
                        priority: "high", // (optional) set notification priority, default: high
                        visibility: "private", // (optional) set notification visibility, default: private
                        importance: "default", // (optional) set notification importance, default: high
                        playSound: true, // (optional) default: true
                        soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        subText: " "  + this.state.picked3 + " to be taken " + this.state.picked2 + " at " +Moment(this.state.timepicked3).format('hh:mm A'), // (optional) default: "message" prop
                        // subText: this.state.timepicked + " " + this.state.picked2,
                        date: new Date(Moment(Moment(this.state.datepicked1).format('YYYYMMDD')+ ' ' +Moment(this.state.timepicked3).format('hh:mm A'), 'YYYYMMDD hh:mm A').valueOf()) // in 60 secs
                        // date: new Date(1542611975)
                    });
                }
    
                if(this.state.picked2 === 'Monthly'){

                    let monthlyinterval = 0;
                    // .add(1, 'months');
                    do{
                    
                    // alert(Moment(this.state.datepicked1).add(monthlyinterval, 'months').format('DD-MM-YYYY hh:mm:ss A'));
                    // alert(" "  + this.state.picked3 + " to be taken " + this.state.picked2 + " on " + Moment(this.state.datepicked1).add(monthlyinterval, 'months').date() + " at " +Moment(this.state.timepicked).format('hh:mm A'));
                    
                    PushNotification.localNotificationSchedule({
                        //... You can use all the options from localNotifications
                        id: Moment(this.state.datepicked1).add(monthlyinterval, 'months').format('YYYYMMDD')+monthlyinterval.toString(),
                        title: "Reminder from SmartMedi!",
                        message: this.state.picked3, // (required)
                        ongoing: false, // (optional) set whether this is an "ongoing" notification
                        priority: "high", // (optional) set notification priority, default: high
                        visibility: "private", // (optional) set notification visibility, default: private
                        importance: "default", // (optional) set notification importance, default: high
                        playSound: true, // (optional) default: true
                        soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        // repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        subText: " "  + this.state.picked3 + " to be taken " + this.state.picked2 + " on " + Moment(this.state.datepicked1).add(monthlyinterval, 'months').date() + " at " +Moment(this.state.timepicked).format('hh:mm A'), // (optional) default: "message" prop
                        // subText: this.state.timepicked + " " + this.state.picked2,
                        date: new Date(Moment(Moment(this.state.datepicked1).add(monthlyinterval, 'months').format('YYYYMMDD')+ ' ' +Moment(this.state.timepicked).format('hh:mm A'), 'YYYYMMDD hh:mm A').valueOf()) // in 60 secs
                        // date: new Date(1542611975)
                    });

                    monthlyinterval++;
                    }while( Moment(this.state.datepicked1).add(monthlyinterval, 'months') < Moment(this.state.datepicked2).endOf('day'));
                    
                    }
                                  

                fetch('https://smartmedi.blueravine.in/alert/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
                    alertdata = responseJson.Alert.slice();
                    AsyncStorage.setItem('useralertInfo',JSON.stringify(alertdata))
                        .then((useralertInfo) => {
                            // alert(usertestInfo);                            
                        }).done(() =>{

                            }); //done close
                }
                else {
                    //###Need to handle error in retrieving test results from server
                }
            }).catch((error) => {
                    alert(error);
                });
            }//if condition close
            else {
                //alert(responseJson.message);

            }
                //second then end after fetch
        })
        .catch((error) => {
            console.error(error);
        });
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    else if(this.state.savealert==='Update'){
            
        fetch('https://smartmedi.blueravine.in/alert/update/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
        body: JSON.stringify({"mobile":userdata.mobile,
                                "countrycode":userdata.countrycode,
                                "startdate": Moment(this.state.datepicked1).format('YYYYMMDD'),
                                "enddate": Moment(this.state.datepicked2).format('YYYYMMDD'),
                                "medicinename": this.state.picked3,
                                "medfrequency": this.state.picked2,
                                "repeat1": this.state.timepicked ? Moment(this.state.timepicked).format('hh:mm A') :'',
                                "repeat2": this.state.timepicked1 ? Moment(this.state.timepicked1).format('hh:mm A') : '',
                                "repeat3": this.state.timepicked2 ? Moment(this.state.timepicked2).format('hh:mm A') : '',
                                "repeat4": this.state.timepicked3 ? Moment(this.state.timepicked3).format('hh:mm A') : '',
                                "weekday": this.state.weektype,
                                "meddate": this.state.meddate,
                                "notes":this.state.resultnotes
                                })
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.messagecode === 4004) {
                
                  // responseJson.Alert.slice().forEach( (currentAlert) => {
                    let rptTyp;
                    rptTyp = (responseJson.Alert.medfrequency === 'Daily') ? 'day'
                                : ((responseJson.Alert.medfrequency === 'Weekly') ? 'week'
                                        : 'day');
                    // alert(Moment(alertdata[0].startdate + ' ' +alertdata[0].repeat1, 'YYYYMMDD hh:mm A').valueOf());
                    if(responseJson.Alert.medfrequency === 'Daily' || responseJson.Alert.medfrequency === 'Weekly'){ 
                    PushNotification.localNotificationSchedule({
                        //... You can use all the options from localNotifications
                        title: "Reminder from SmartMedi!",
                        id:responseJson.Alert.notificationid1,
                        message: responseJson.Alert.medicinename, // (required)
                        ongoing: false, // (optional) set whether this is an "ongoing" notification
                        priority: "high", // (optional) set notification priority, default: high
                        visibility: "private", // (optional) set notification visibility, default: private
                        importance: "default", // (optional) set notification importance, default: high
                        playSound: true, // (optional) default: true
                        soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        date: new Date(Moment(responseJson.Alert.startdate + ' ' +responseJson.Alert.repeat1, 'YYYYMMDD hh:mm A').valueOf()),
                        subText: " "   + responseJson.Alert.medicinename + " to be taken " + responseJson.Alert.medfrequency + " at " + responseJson.Alert.repeat1, // (optional) default: "message" prop
                        // subText: responseJson.Alert.repeat1 + " " + responseJson.Alert.medfrequency,
                        // date: new Date(1542611975)
                    });
                }

                    if((responseJson.Alert.medfrequency === 'Daily') && (responseJson.Alert.repeat2)){
                    
                        PushNotification.localNotificationSchedule({
                            //... You can use all the options from localNotifications
                            title: "Reminder from SmartMedi!",
                            id:responseJson.Alert.notificationid2,
                            message: responseJson.Alert.medicinename, // (required)
                            ongoing: false, // (optional) set whether this is an "ongoing" notification
                            priority: "high", // (optional) set notification priority, default: high
                            visibility: "private", // (optional) set notification visibility, default: private
                            importance: "default", // (optional) set notification importance, default: high
                            playSound: true, // (optional) default: true
                            soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                            repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                            // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                            date: new Date(Moment(responseJson.Alert.startdate + ' ' +responseJson.Alert.repeat2, 'YYYYMMDD hh:mm A').valueOf()),
                            subText: " "   + responseJson.Alert.medicinename + " to be taken " + responseJson.Alert.medfrequency + " at " + responseJson.Alert.repeat2, // (optional) default: "message" prop
                            // subText: responseJson.Alert.repeat2 + " " + responseJson.Alert.medfrequency,
                            // date: new Date(1542611975)
                        });
                    }

                    if((responseJson.Alert.medfrequency === 'Daily') && (responseJson.Alert.repeat3)){
                        
                        PushNotification.localNotificationSchedule({
                            //... You can use all the options from localNotifications
                            title: "Reminder from SmartMedi!",
                            id:responseJson.Alert.notificationid3,
                            message: responseJson.Alert.medicinename, // (required)
                            ongoing: false, // (optional) set whether this is an "ongoing" notification
                            priority: "high", // (optional) set notification priority, default: high
                            visibility: "private", // (optional) set notification visibility, default: private
                            importance: "default", // (optional) set notification importance, default: high
                            playSound: true, // (optional) default: true
                            soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                            repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                            // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                            date: new Date(Moment(responseJson.Alert.startdate + ' ' +responseJson.Alert.repeat3, 'YYYYMMDD hh:mm A').valueOf()),
                            subText: " "   + responseJson.Alert.medicinename + " to be taken " + responseJson.Alert.medfrequency + " at " + responseJson.Alert.repeat3, // (optional) default: "message" prop
                            // subText: responseJson.Alert.repeat2 + " " + responseJson.Alert.medfrequency,
                            // date: new Date(1542611975)
                        });
                    }

                    if((responseJson.Alert.medfrequency === 'Daily') && (responseJson.Alert.repeat4)){
                        
                        PushNotification.localNotificationSchedule({
                            //... You can use all the options from localNotifications
                            title: "Reminder from SmartMedi!",
                            id:responseJson.Alert.notificationid4,
                            message: responseJson.Alert.medicinename, // (required)
                            ongoing: false, // (optional) set whether this is an "ongoing" notification
                            priority: "high", // (optional) set notification priority, default: high
                            visibility: "private", // (optional) set notification visibility, default: private
                            importance: "default", // (optional) set notification importance, default: high
                            playSound: true, // (optional) default: true
                            soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                            repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                            // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                            date: new Date(Moment(responseJson.Alert.startdate + ' ' +responseJson.Alert.repeat4, 'YYYYMMDD hh:mm A').valueOf()),
                            subText: " "   + responseJson.Alert.medicinename + " to be taken " + responseJson.Alert.medfrequency + " at " + responseJson.Alert.repeat4, // (optional) default: "message" prop
                            // subText: responseJson.Alert.repeat2 + " " + responseJson.Alert.medfrequency,
                            // date: new Date(1542611975)
                        });
                    }
                // });//forEach

                if(responseJson.Alert.medfrequency === 'Monthly'){

                    let monthlyinterval = 0;
                    // .add(1, 'months');
                    do{
                    // alert(Moment(responseJson.Alert.startdate, 'YYYYMMDD').add(monthlyinterval, 'months').format('YYYYMMDD')+monthlyinterval.toString());
                    // alert(Moment(this.state.datepicked1).add(monthlyinterval, 'months').format('DD-MM-YYYY hh:mm:ss A'));
                    // alert(" "  + this.state.picked3 + " to be taken " + this.state.picked2 + " on " + Moment(this.state.datepicked1).add(monthlyinterval, 'months').date() + " at " +Moment(this.state.timepicked).format('hh:mm A'));
                    
                    PushNotification.localNotificationSchedule({
                        //... You can use all the options from localNotifications
                        id: Moment(responseJson.Alert.startdate, 'YYYYMMDD').add(monthlyinterval, 'months').format('YYYYMMDD')+monthlyinterval.toString(),
                        title: "Reminder from SmartMedi!",
                        message: responseJson.Alert.medicinename, // (required)
                        ongoing: false, // (optional) set whether this is an "ongoing" notification
                        priority: "high", // (optional) set notification priority, default: high
                        visibility: "private", // (optional) set notification visibility, default: private
                        importance: "default", // (optional) set notification importance, default: high
                        playSound: true, // (optional) default: true
                        soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        // repeatType: rptTyp, // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        subText: " "  + responseJson.Alert.medicinename + " to be taken " + responseJson.Alert.medfrequency + " on " + Moment(responseJson.Alert.startdate, 'YYYYMMDD').add(monthlyinterval, 'months').date() + " at " + responseJson.Alert.repeat1, // (optional) default: "message" prop
                        // subText: this.state.timepicked + " " + this.state.picked2,
                        date: new Date(Moment(Moment(responseJson.Alert.startdate, 'YYYYMMDD').add(monthlyinterval, 'months').format('YYYYMMDD')+ ' ' + responseJson.Alert.repeat1, 'YYYYMMDD hh:mm A').valueOf()) // in 60 secs
                        // date: new Date(1542611975)
                    });

                    monthlyinterval++;
                    }while( Moment(responseJson.Alert.startdate, 'YYYYMMDD').add(monthlyinterval, 'months') < Moment(responseJson.Alert.enddate, 'YYYYMMDD').endOf('day'));
                    
                    }

                
                fetch('https://smartmedi.blueravine.in/alert/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
                    alertdata = responseJson.Alert.slice();
                    AsyncStorage.setItem('useralertInfo',JSON.stringify(alertdata))
                        .then((useralertInfo) => {
                            // alert(usertestInfo);                            
                        }).done(() =>{

                            }); //done close
                    
                }
                else {
                    //###Need to handle error in retrieving test results from server
                }
            }).catch((error) => {
                    alert(error);
                });
            }//if condition close
            else {
                //alert(responseJson.message);

            }
                //second then end after fetch
            }).catch((error) => {
                console.error(error);
            });


    }
  

    }

    // _handleAppStateChange =(nextappState) => {
    //     if (this.state.appState.match(/inactive/) && nextAppState === 'active') {
    //         console.log('App has come to the foreground!')
    //         PushNotification.localNotificationSchedule({
    //             //... You can use all the options from localNotifications
    //             message: "Medicine Alert", // (required)
    //             ongoing: false, // (optional) set whether this is an "ongoing" notification
    //             priority: "high", // (optional) set notification priority, default: high
    //             visibility: "private", // (optional) set notification visibility, default: private
    //             importance: "default", // (optional) set notification importance, default: high
    //             playSound: true, // (optional) default: true
    //             soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    //             number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
    //             repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    //             actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
    //             date: new Date(Moment(Moment(this.props.startdate).format('YYYYMMDD')+ ' ' +Moment(this.props.repeat1).format('hh:mm A'), 'YYYYMMDD hh:mm A').valueOf()) // in 60 secs
    //             // date: new Date(1542611975)
    //           });
    //       }
    //       this.setState({appState: nextAppState});
    // }

    handleDeletealertButton = () => {
        Alert.alert(
            'Delete Record',
            'Do you want to delete this test Result?', [{
                text: 'CANCEL',
                onPress: () => alert('Successfully canceled the Alert Result Delete.')
                
            }, {
                text: 'OK',
                onPress: () =>  {this.ondeletealertButtonPress(),Actions.alertScreen()}
            }, ]
            , {
                cancelable: false
            }
        );
        return true;
    };

    ondeletealertButtonPress = () => {
        fetch('https://smartmedi.blueravine.in/alert/delete/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
    body: JSON.stringify({"mobile": userdata.mobile,
                        "countrycode": userdata.countrycode,
                        "startdate": this.props.startdate,
                        "enddate": this.props.enddate,
                        "medicinename":this.props.medicinename,
                        "medfrequency":this.props.medfrequency   })
    }) //fetch
    .then((response) => response.json())
    .then((responseJson) => {

        if (responseJson.messagecode===4006) {
            if(responseJson.Alert.medfrequency === 'Daily' || responseJson.Alert.medfrequency === 'Weekly'){
            PushNotification.cancelLocalNotifications({id: responseJson.Alert.notificationid1});
            }
            if(responseJson.Alert.medfrequency === 'Daily' && responseJson.Alert.repeat2)
            {
                PushNotification.cancelLocalNotifications({id: responseJson.Alert.notificationid2});
            }
            if(responseJson.Alert.medfrequency === 'Daily' && responseJson.Alert.repeat3)
            {
                PushNotification.cancelLocalNotifications({id: responseJson.Alert.notificationid3});
            }
            if(responseJson.Alert.medfrequency === 'Daily' && responseJson.Alert.repeat4)
            {
                PushNotification.cancelLocalNotifications({id: responseJson.Alert.notificationid4});
            }
    
            if(responseJson.Alert.medfrequency === 'Monthly'){

                let monthlyinterval = 0;
                // .add(1, 'months');
                do{
                    PushNotification.cancelLocalNotifications({id: Moment(responseJson.Alert.startdate, 'YYYYMMDD').add(monthlyinterval, 'months').format('YYYYMMDD')+monthlyinterval.toString()});
                monthlyinterval++;
                }while( Moment(responseJson.Alert.startdate, 'YYYYMMDD').add(monthlyinterval, 'months') < Moment(responseJson.Alert.enddate, 'YYYYMMDD').endOf('day'));
                
                }
            Snackbar.show({
                title: 'Successfully deleted the Alert Result. Please "Refresh" ',
                duration: Snackbar.LENGTH_LONG,
                
            });
            fetch('https://smartmedi.blueravine.in/alert/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
                alertdata = responseJson.Alert.slice();
                AsyncStorage.setItem('useralertInfo',JSON.stringify(alertdata))
                    .then((useralertInfo) => {
                        // alert(usertestInfo);                            
                    }).done(() =>{
                        // responseJson.Alert.slice().forEach( (currentAlert) => {
                        //     // alert(Moment(alertdata[0].startdate + ' ' +alertdata[0].repeat1, 'YYYYMMDD hh:mm A').valueOf());
                        //         PushNotification.localNotificationSchedule({
                        //         //... You can use all the options from localNotifications
                        //         title: "Reminder from SmartMedi!",
                        //         id:currentAlert.notificationid1,
                        //         message: currentAlert.medicinename, // (required)
                        //         ongoing: false, // (optional) set whether this is an "ongoing" notification
                        //         priority: "high", // (optional) set notification priority, default: high
                        //         visibility: "private", // (optional) set notification visibility, default: private
                        //         importance: "default", // (optional) set notification importance, default: high
                        //         playSound: true, // (optional) default: true
                        //         soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        //         repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        //         // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        //         date: new Date(Moment(currentAlert.startdate + ' ' +currentAlert.repeat1, 'YYYYMMDD hh:mm A').valueOf()),
                        //         subText: " "  + currentAlert.medicinename + " to be taken " + currentAlert.medfrequency + " at " + currentAlert.repeat1, // (optional) default: "message" prop
                        //         // subText: currentAlert.repeat1 + " " + currentAlert.medfrequency,
                        //         // date: new Date(1542611975)
                        //     });

                        //     if(currentAlert.repeat2){
                                
                        //         PushNotification.localNotificationSchedule({
                        //             //... You can use all the options from localNotifications
                        //             title: "Reminder from SmartMedi!",
                        //             id:currentAlert.notificationid2,
                        //             message: currentAlert.medicinename, // (required)
                        //             ongoing: false, // (optional) set whether this is an "ongoing" notification
                        //             priority: "high", // (optional) set notification priority, default: high
                        //             visibility: "private", // (optional) set notification visibility, default: private
                        //             importance: "default", // (optional) set notification importance, default: high
                        //             playSound: true, // (optional) default: true
                        //             soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        //             repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        //             // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        //             date: new Date(Moment(currentAlert.startdate + ' ' +currentAlert.repeat2, 'YYYYMMDD hh:mm A').valueOf()),
                        //             subText: " "   + currentAlert.medicinename + " to be taken " + currentAlert.medfrequency + " at " + currentAlert.repeat2, // (optional) default: "message" prop
                        //             // subText: currentAlert.repeat2 + " " + currentAlert.medfrequency,
                        //             // date: new Date(1542611975)
                        //         });
                        //     }

                        //     if(currentAlert.repeat3){
                                
                        //         PushNotification.localNotificationSchedule({
                        //             //... You can use all the options from localNotifications
                        //             title: "Reminder from SmartMedi!",
                        //             id:currentAlert.notificationid3,
                        //             message: currentAlert.medicinename, // (required)
                        //             ongoing: false, // (optional) set whether this is an "ongoing" notification
                        //             priority: "high", // (optional) set notification priority, default: high
                        //             visibility: "private", // (optional) set notification visibility, default: private
                        //             importance: "default", // (optional) set notification importance, default: high
                        //             playSound: true, // (optional) default: true
                        //             soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        //             repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        //             // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        //             date: new Date(Moment(currentAlert.startdate + ' ' +currentAlert.repeat3, 'YYYYMMDD hh:mm A').valueOf()),
                        //             subText: " "   + currentAlert.medicinename + " to be taken " + currentAlert.medfrequency + " at " + currentAlert.repeat3, // (optional) default: "message" prop
                        //             // subText: currentAlert.repeat2 + " " + currentAlert.medfrequency,
                        //             // date: new Date(1542611975)
                        //         });
                        //     }

                        //     if(currentAlert.repeat4){
                                
                        //         PushNotification.localNotificationSchedule({
                        //             //... You can use all the options from localNotifications
                        //             title: "Reminder from SmartMedi!",
                        //             id:currentAlert.notificationid4,
                        //             message: currentAlert.medicinename, // (required)
                        //             ongoing: false, // (optional) set whether this is an "ongoing" notification
                        //             priority: "high", // (optional) set notification priority, default: high
                        //             visibility: "private", // (optional) set notification visibility, default: private
                        //             importance: "default", // (optional) set notification importance, default: high
                        //             playSound: true, // (optional) default: true
                        //             soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
                        //             repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
                        //             // actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
                        //             date: new Date(Moment(currentAlert.startdate + ' ' +currentAlert.repeat4, 'YYYYMMDD hh:mm A').valueOf()),
                        //             subText: " "   + currentAlert.medicinename + " to be taken " + currentAlert.medfrequency + " at " + currentAlert.repeat4, // (optional) default: "message" prop
                        //             // subText: currentAlert.repeat2 + " " + currentAlert.medfrequency,
                        //             // date: new Date(1542611975)
                        //         });
                        //     }
                        // });//forEach
                        }); //done close
            }
            else {
                //###Need to handle error in retrieving test results from server
            }
        }).catch((error) => {
                alert(error);
            });
        }
        else {
            //###Need to handle error in retrieving test results from server
        }
    }).catch((error) => {
            alert(error);
        });
        // Actions.addtestScreen();
    };

    render() {

        temptests =
            {
                id: 1267,
                name: this.state.picked2,
                value: this.state.testvalue,
                normal: {min: null,
                    max: 100,
                    comparator: 'lessthan'
                },
                result: 'high',
                testdate: parseInt(Moment(this.state.date).format('YYYYMMDD')),
                catid: 1142,
                catname: this.state.picked1,
            };

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#4d6bcb'/>
                </View>

                <View style={[styles.headerview]}>
                
                        <View style={{flexDirection:"row",backgroundColor:'#4d6bcb',height:50}}>
                    <View style={{flex:3,flexDirection:"row"}}>
                            <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  {this.state.alertheader}</Text>
                           </View>
                           <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
                        <TouchableOpacity 
                                          onPress={this.handleDeletealertButton}>
                                          <View style={{flexDirection:"column",alignItems:'center',marginTop:5}}>
                            <Icon type='MaterialIcons' name='delete' size={25} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                   Delete  </Text>
                            </View>

                        </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => {        if(this.state.picked3===''){
                                        // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
                                        Snackbar.show({
                                            title: 'Enter Medicine name it  cannot be empty!',
                                            duration: Snackbar.LENGTH_SHORT,
                                        });
                                    }
                                    else if(this.state.picked2===''){
                                        // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                                        Snackbar.show({
                                            title: 'Select Frequency type!',
                                            duration: Snackbar.LENGTH_SHORT,
                                        });
                                        // this.resetData();
                                    }
                                    else{
                                        // Actions.searchScreen(params);
                                        this.ShowHideActivityIndicator();
                                        // this._onButtonPressed();
                                    }}}>
                                    <View style={{flexDirection:"column",alignItems:'center',marginTop:5}}>
                            <Icon type='MaterialIcons' name='done' size={25} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                    Save  </Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={this.onCancelButtonPress}>
                            <View style={{flexDirection:"column",alignItems:'center',marginTop:5}}>
                            <Icon type='MaterialIcons' name='close' size={25} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                    Cancel  </Text>
                            </View>
                            </TouchableOpacity>
                            </View>
                        </View>

                        {/* <Card style={{height:500}}> */}
                        
                            <Card style={{ height:500,borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                                borderTopLeftRadius:10,borderLeftWidth:10,shadowColor:"#f1f1f1f1",borderColor:'#FFFFFF'}}>
                                {/*<TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>*/}
                                <ScrollView><View style={{marginBottom:300}}>
                                    <View style={{flexDirection:"row",marginTop:10}}>

                                        <TouchableOpacity onPress={this._showDateTimePicker} style={{justifyContent:'flex-start'}}>
                                            {/*<Image source={require('../Images/calendar_icon.png')} style={{height: 25, width: 25,marginLeft:18}}*/}
                                            {/*/>*/}
                                            <TextField  label="Start Date"
                                                        lineHeight={30}
                                                        value={Moment(this.state.datepicked1).format('DD MMM YYYY')}
                                                        editable={false}
                                                        fontSize={16}
                                                        onChangeText={(itemValue) => this.setState({datepicked1: itemValue})}
                                                        containerStyle={{width:90,marginLeft:20}}/>

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={this._showDateTimePicker2} style={{justifyContent:'flex-end',marginLeft:80}}>
                                            {/*<Image source={require('../Images/calendar_icon.png')} style={{height: 25, width: 25,marginLeft:18}}*/}
                                            {/*/>*/}
                                            <TextField  label="End Date"
                                                        lineHeight={30}
                                                        value={Moment(this.state.datepicked2).format('DD MMM YYYY')}
                                                        editable={false}
                                                        fontSize={16}
                                                        onChangeText={(itemValue) => this.setState({datepicked2: itemValue})}
                                                        containerStyle={{width:90,marginLeft:20}}/>

                                        </TouchableOpacity>
                                    </View>
                                {/*</TouchableOpacity>*/}
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    mode={'date'}
                                    minimumDate={Moment().date()}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                />

                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible2}
                                    mode={'date'}
                                    minimumDate={Moment().date()}
                                    onConfirm={this._handleDatePicked2}
                                    onCancel={this._hideDateTimePicker2}
                                />
                                <View style={{flexDirection:"row",marginTop:5}}>

                                    <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>

                                        {/*<TouchableOpacity  style={{width:280,justifyContent:'flex-end'}}*/}
                                                           {/*onPress={this.onTestMedicineNameShowpicker}>*/}
                                            {/*<Text>Select Country: {this.state.picked}</Text>*/}
                                            <TextField label="Enter Medicine Name"
                                                       lineHeight={30}
                                                       value={this.state.picked3}
                                                       editable={true}
                                                       fontSize={16}
                                                     onChangeText={(itemValue) => this.setState({picked3: itemValue})}
                                                       containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:5,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>
                                        {/*</TouchableOpacity>*/}
                                        {/*<ModalFilterPicker*/}
                                            {/*visible={this.state.pickervisible3}*/}
                                            {/*onSelect={this.onTestMedicineNameSelectpicker}*/}
                                            {/*onCancel={this.onTestMedicineNameCancelpicker}*/}
                                            {/*options={medicinetype}*/}
                                            {/*optionTextStyle={style={fontSize:16}}*/}
                                        {/*/>*/}
                                <View style={{flexDirection:'row'}}>
                                        <Dropdown
                                            value={this.state.picked2}
                                            baseColor={'#000'}
                                            textColor={'#000'}
                                            selectedItemColor={'#000'}
                                            itemColor={'#000'}
                                            fontSize={13}
                                            itemPadding={8}
                                            dropdownPosition={0}
                                            // pickerStyle={{paddingLeft:200}}
                                            containerStyle={{borderWidth:1,marginTop:5, borderColor:'#000', width:130,height:30,borderRadius:20,paddingTop:2,paddingLeft:width*0.04}}
                                            rippleCentered={true}
                                            overlayStyle={{position:'absolute',marginRight:220,marginTop:250}}
                                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                            dropdownOffset={top= 0}
                                            data={freqdata}
                                            // valueExtractor={({value})=> value}
                                            onChangeText={(value)=>{this.onChangeFrequecyTextPress(value)}}
                                        />

                                        {(this.state.picked2==="Weekly") &&
                                        <Dropdown
                                            value={this.state.weektype}
                                            baseColor={'#000'}
                                            textColor={'#000'}
                                            selectedItemColor={'#000'}
                                            itemColor={'#000'}
                                            fontSize={13}
                                            itemPadding={8}
                                            dropdownPosition={0}
                                            // pickerStyle={{paddingLeft:200}}
                                            containerStyle={{borderWidth:1, borderColor:'#000', width:130,height:30,borderRadius:20,paddingTop:2,marginTop:5,marginLeft:10,paddingLeft:width*0.04}}
                                            rippleCentered={true}
                                            overlayStyle={{position:'absolute',width:130,marginLeft:150,marginTop:250}}
                                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                            dropdownOffset={top= 0}
                                            data={weeklydata}
                                            // valueExtractor={({value})=> value}
                                            onChangeText={(value)=>{this.onChangeTextPress(value)}}
                                        />
                                        }
                                        {(this.state.picked2==="Monthly") &&
                                        <Dropdown
                                            value={this.state.meddate}
                                            baseColor={'#000'}
                                            textColor={'#000'}
                                            selectedItemColor={'#000'}
                                            itemColor={'#000'}
                                            fontSize={13}
                                            itemPadding={8}
                                            dropdownPosition={0}
                                            // pickerStyle={{paddingLeft:200}}
                                            containerStyle={{borderWidth:1, borderColor:'#000', width:55,height:30,borderRadius:20,paddingTop:2,marginTop:5,marginLeft:10,paddingLeft:width*0.04}}
                                            rippleCentered={true}
                                            overlayStyle={{position:'absolute',width:55,marginLeft:150,marginTop:250}}
                                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                                            dropdownOffset={top= 0}
                                            data={monthlymeddate}
                                            // valueExtractor={({value})=> value}
                                            onChangeText={(value)=>{this.onChangemonthlymeddate(value)}}
                                        />
                                        }


                                        </View>
                                         <DateTimePicker
                                                            isVisible={this.state.isTimePickerVisible}
                                                            onConfirm={this._handleTimePicked}
                                                            mode={'time'}
                                                            is24Hour={false}
                                                            minimumDate={Moment().date()}
                                                            onCancel={this._hideTimePicker}
                                                            />

                                        <DateTimePicker
                                                            isVisible={this.state.isTimePickerVisible1}
                                                            onConfirm={this._handleTimePicked1}
                                                            mode={'time'}
                                                            is24Hour={false}
                                                            minimumDate={Moment().date()}
                                                            onCancel={this._hideTimePicker1}
                                                            />
                                                             <DateTimePicker
                                                            isVisible={this.state.isTimePickerVisible2}
                                                            onConfirm={this._handleTimePicked2}
                                                            mode={'time'}
                                                            is24Hour={false}
                                                            minimumDate={Moment().date()}
                                                            onCancel={this._hideTimePicker2}
                                                            />
                                                             <DateTimePicker
                                                            isVisible={this.state.isTimePickerVisible3}
                                                            onConfirm={this._handleTimePicked3}
                                                            mode={'time'}
                                                            is24Hour={false}
                                                            minimumDate={Moment().date()}
                                                            onCancel={this._hideTimePicker3}
                                                            />
                                                        
                                        
                                        <View style={{flexDirection: "row", width:200,marginTop:5}}>
                                        <TouchableOpacity onPress={this._showTimePicker}>
                                            <TextField  label="Time"
                                                        lineHeight={30}
                                                        editable={false}
                                                        value={this.state.timepicked ? Moment(this.state.timepicked).format('hh:mm A') : ''}
                                                        editable={false}
                                                        fontSize={16}
                                                        onChangeText={(itemValue) => this.setState({timepicked: itemValue})}
                                                        containerStyle={{width:65,marginLeft:20}}/>
                                                        </TouchableOpacity>
                                                        {(this.state.picked2==="Daily") &&
                                                        <View style={{flexDirection: "row", width:135}}>
                                            <TouchableOpacity onPress={this._showTimePicker1}>
                                            <TextField  label="Time"
                                                        lineHeight={30}
                                                        keyboardType='phone-pad'
                                                        value={this.state.timepicked1 ? Moment(this.state.timepicked1).format('hh:mm A') : ''}
                                                        editable={false}
                                                        fontSize={16}
                                                        onChangeText={(itemValue) => this.setState({timepicked1: itemValue})}
                                                        containerStyle={{width:65,marginLeft:20}}/>
                                                        </TouchableOpacity>
                                                         
                                            <TouchableOpacity onPress={this._showTimePicker2}>
                                            <TextField  label="Time"
                                                        lineHeight={30}
                                                        value={this.state.timepicked2 ? Moment(this.state.timepicked2).format('hh:mm A') : ''}
                                                        editable={false}
                                                        fontSize={16}
                                                        onChangeText={(itemValue) => this.setState({timepicked2: itemValue})}
                                                        containerStyle={{width:65,marginLeft:20}}/>
                                                        </TouchableOpacity>
                                                        
                                            <TouchableOpacity onPress={this._showTimePicker3}>
                                            <TextField  label="Time"
                                                        lineHeight={30}
                                                        value={this.state.timepicked3 ? Moment(this.state.timepicked3).format('hh:mm A') : ''}
                                                        editable={false}
                                                        fontSize={16}
                                                        onChangeText={(itemValue) => this.setState({timepicked3: itemValue})}
                                                        containerStyle={{width:65,marginLeft:20}}/>
                                                        </TouchableOpacity>
                                                        </View>
                                               
                                        }         
                                        </View>

                                        <TextField label="Notes and Comments"
                                           lineHeight={30}
                                           value={this.state.resultnotes}
                                           editable={true}
                                           fontSize={16}
                                        //    multiline = {true}
                                           returnKeyType={"done"}
                                           onChangeText={(itemValue) => this.setState({resultnotes: itemValue})}
                                           containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>

                                    </View>
                                </View>

                                {
                        // Here the ? Question Mark represent the ternary operator.
                        //style={{backgroundColor:'#FFFFFF',width:width-220}}
                        this.state.loading ?  <ActivityIndicator color = '#2eacde'
                                                                 size = "large" style={{padding: 20}} /> : null
                    }
                               
                                </View>
</ScrollView>
                            {/* <Fab
                                    // active={this.state.active}
                                    // active={!this.state.active}
                                    direction="up"
                                    containerStyle={{position:'absolute'}}
                                    style={{ backgroundColor: '#071398' }}
                                    position="bottomRight"
                                    onPress={() => {        if(this.state.picked3===''){
                                        // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
                                        Snackbar.show({
                                            title: 'Enter Medicine name it  cannot be empty!',
                                            duration: Snackbar.LENGTH_SHORT,
                                        });
                                    }
                                    else if(this.state.picked2===''){
                                        // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                                        Snackbar.show({
                                            title: 'Select Frequency type!',
                                            duration: Snackbar.LENGTH_SHORT,
                                        });
                                        // this.resetData();
                                    }
                                    else{
                                        // Actions.searchScreen(params);
                                        this.ShowHideActivityIndicator();
                                        // this._onButtonPressed();
                                    }}}>
                                    <Icon type='MaterialIcons' name='done' size={30} color="#FFFFFF"/>
                                </Fab>

                                <Fab
                                    // active={this.state.active}
                                    // active={!this.state.active}
                                    direction="up"
                                    containerStyle={{position:'absolute',marginLeft:150}}
                                    style={{ backgroundColor: '#ff0f20' }}
                                    position="bottomLeft"
                                    onPress={this.onCancelButtonPress}>
                                    <Iccon type='Entypo' name='cross' size={30} color="#FFFFFF"/>
                                </Fab> */}
                            </Card>
                        {/* </Card> */}
      



                </View>

                {/* <View style={[styles.footer]}>
                    <BottomNavigation
                        tabs={this.tabs}
                        activeTab={this.state.activeTab}
                        onTabPress={newTab => {this.setState({ activeTab: newTab.key }),this._handleTabPress(newTab.key)}}
                        renderTab={this.renderTab}
                        // useLayoutAnimation
                    />

                </View> */}
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
    headerview: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#917cb7',
        position: 'absolute',
        backgroundColor: '#f1f1f1f1',
        // paddingRight:15,
        // paddingLeft:15,
        // paddingTop:55,
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
    }
});