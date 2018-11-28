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
import Iccons from 'react-native-vector-icons/MaterialCommunityIcons'
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
var testarray=[];
var userdata={mobile: null,username:null,age:null,gender:null,email:null,name:null,jwt:null,countrycode:null};
var testdata=[];
var tests = [
    // {
    //     key: 'Blood Test ',
    //     label: 'Blood Test',
    // },
    // {
    //     key: 'Cholestrol Level',
    //     label: 'Cholestrol Level',
    // },
    // {
    //     key: 'Thyroid & Vitamin D Level',
    //     label: 'Thyroid & Vitamin D Level',
    // },
];
const testtypes=[];
var testtdetail;
var testsname = [
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

export default class AddTestData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            favticket:[],
            activeTab: 'tests',
            isDateTimePickerVisible: false,
            selectedItem: undefined,
            selected2: '',
            viewSection :false,
            results: {
                items: []
            },
            pickervisible1: false,
            pickervisible2: false,
            picked1: '',
            picked2: '',
            testvalue:'',
            rangevalue:'',
            resultnotes:'',
            age:'',
            date: new Date(),
            selected1: '',
            selectedtestname:'',
            saveaction:'Add',
            testheader:'Add Test Result'

        };
        
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
            date :  date
        });
        this._hideDateTimePicker();
    };

    handleChange(value) {
        this.setState({
            selected: value
        });
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

    onTestTypeSelectpicker = (picked) => {
        this.setState({
            picked1: picked,
            pickervisible1: false,
        });
        // Keyboard.dismiss();
    };
    onTestNameSelectpicker = (picked) => {
        this.setState({
            picked2: picked,
            pickervisible2: false,
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


    ShowHideActivityIndicator = () =>{

        this.setState({loading: true});
        setTimeout(() => {
            this.saveTestsData();
            Actions.homeScreen();
            Snackbar.show({
                title: 'Test details added succesfully. Please "Refresh"',
                duration: Snackbar.LENGTH_LONG,
            });
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        }, 500)
        // this.setState({loading: false})
    };
   
    async componentDidMount() {
        //#####
        
        await  AsyncStorage.getItem('userInfo')
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
            
        }).done( () => {

      AsyncStorage.getItem('testInfo')
        .then((testInfo) => {

        let temptestarray = testarray;
        let  jsontestInfo = testInfo ? JSON.parse(testInfo) : temptestarray;

        testarray = jsontestInfo.slice();
            
        }).done(() =>{
        
            let tnames = [], outnames = [], l = testarray.length, i;
            for( i=0; i<l; i++) {
                if( tnames[testarray[i].testname]) continue;
                tnames[testarray[i].testname] = true;
                outnames.push(testarray[i].testname);
            }
            // testsname
            testsname = [];
            outnames.sort().forEach((currtestname, dateidx) => {
                let eachname = 
                    {label: currtestname,
                        key: currtestname};
        
                        testsname.push(eachname);
            }); //forEach

        });

    });
//#####
                if(this.props.testdate){
                    this.setState({saveaction:'Update',
                                    testheader:'Edit Test Result',
                                    date:Moment(this.props.testdate, 'YYYYMMDD'),
                                   picked2:this.props.testname,
                                   testvalue:this.props.value.toString(),
                                   age:this.props.ageontest.toString(),
                                   resultnotes:this.props.notes});
                }
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    filterByTestName(searchText, nDate){
        this.setState({selectedTestName: searchText});

        this.setState( {filteredTestResult: testtypes.filter( (testresult) =>
            {return (testresult.testname.toLowerCase().includes(searchText.toLowerCase()) || testresult.category.toLowerCase().includes(searchText.toLowerCase())) && testresult.testdate === nDate}) });
    };
    handleBackButton = () => {
        Actions.homeScreen();
        return true;
    };

    resetData(){
        this.setState({
            picked2 : ''
        });
    };
    onCancelButtonPress = () => {
        Actions.homeScreen();
    };

    async saveTestsData() {
        Keyboard.dismiss();
        // this.setState({date: Moment(this.state.date).format('YYYYMMDD')});
        if(this.state.saveaction==='Add')
        {
        fetch('https://interface.blueravine.in/smartmedi/testresult/register', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
        body: JSON.stringify([{"testdate":Moment(this.state.date).format('YYYYMMDD'),
                                "testname":this.state.picked2,
                                "mobile":userdata.mobile,
                                "countrycode":userdata.countrycode,
                                "age":this.state.age,
                                "value":this.state.testvalue,
                                "notes":this.state.resultnotes
                                }])
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.messagecode === 2003) {
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

            }
                //second then end after fetch
            })
            .catch((error) => {
                console.error(error);
            });
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        }

        else if(this.state.saveaction==='Update'){
            
            fetch('https://interface.blueravine.in/smartmedi/testresult/update/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
            body: JSON.stringify({"testdate":Moment(this.state.date).format('YYYYMMDD'),
                                    "testname":this.state.picked2,
                                    "mobile":userdata.mobile,
                                    "countrycode":userdata.countrycode,
                                    "age":this.state.age,
                                    "value":this.state.testvalue,
                                    "notes":this.state.resultnotes
                                    })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.messagecode === 2003) {
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
    
                }
                    //second then end after fetch
                }).catch((error) => {
                    console.error(error);
                });
        }
    }
    handleDeleteButton = () => {
        Alert.alert(
            'Delete Record',
            'Do you want to delete this test Result?', [{
                text: 'CANCEL',
                onPress: () => alert('Successfully canceled the Test Result Delete.')
                
            }, {
                text: 'OK',
                onPress: () =>  {this.ondeleteButtonPress(),Actions.homeScreen()}
            }, ]
            , {
                cancelable: false
            }
        );
        return true;
    };

    ondeleteButtonPress = () => {
        fetch('https://interface.blueravine.in/smartmedi/testresult/delete/mobile', { // USE THE LINK TO THE SERVER YOU'RE USING mobile
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
    body: JSON.stringify({"testdate":this.props.testdate,
                        "testname":this.props.testname,
                        "mobile":userdata.mobile,
                        "countrycode":userdata.countrycode  })
    }) //fetch
    .then((response) => response.json())
    .then((responseJson) => {

        if (responseJson.messagecode===2007) {
            Snackbar.show({
                title: 'Successfully deleted the Test Result. Please "Refresh" ',
                duration: Snackbar.LENGTH_LONG,
                
            });
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
                        <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  {this.state.testheader}</Text>
                        </View>
                    <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
                        <TouchableOpacity 
                                          onPress={this.handleDeleteButton}>
                                          <View style={{flexDirection:"column",alignItems:'center',marginTop:5}}>
                            <Icon type='MaterialIcons' name='delete' size={25} color="#FFFFFF"/>
                            <Text note style={{fontSize:10,textAlign:'center',color:'#FFFFFF'}} >
                                   Delete  </Text>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity 
                             onPress={() => {        if(this.state.picked2===''){
                                // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Test Type field cannot be empty!',
                                    duration: Snackbar.LENGTH_SHORT,
                                });
                            }
                            else if(this.state.testvalue===''){
                                // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Test value field cannot be empty!',
                                    duration: Snackbar.LENGTH_SHORT,
                                });
                                // this.resetData();
                            }
                            // else if(this.state.age===''){
                            //     // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                            //     Snackbar.show({
                            //         title: 'age field cannot be empty!',
                            //         duration: Snackbar.LENGTH_SHORT,
                            //     });
                            //     // this.resetData();
                            // }
                            else{
                                // Actions.searchScreen(params);
                                this.ShowHideActivityIndicator();
                                // this.saveTestsData();
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
                   
                    <Card style={{ height:450,borderRightWidth:10,marginTop:15,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                        borderTopLeftRadius:10,borderLeftWidth:10,shadowColor:"#f1f1f1f1",borderColor:'#FFFFFF'}}>
                     <ScrollView>
                    <View style={{marginBottom:300}}>
                            <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                            <TouchableOpacity onPress={this._showDateTimePicker} style={{width:280,justifyContent:'flex-end'}}>
                               
                               <TextField  label="Test taken Date"
                                                       lineHeight={30}
                                                       value={Moment(this.state.date).format('DD MMM YYYY')}
                                                       editable={false}
                                                       fontSize={16}
                                                       onChangeText={(itemValue) => this.setState({date: itemValue})}
                                                       containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>

                           </TouchableOpacity>
                           <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    mode={'date'}
                                    minimumDate={Moment().toDate()}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimePicker}
                                />
                                <TouchableOpacity  style={{width:280,justifyContent:'flex-end'}}
                                                   onPress={this.onTestNameShowpicker}>
                                    {/*<Text>Select Country: {this.state.picked}</Text>*/}
                                    <TextField label="Select Test Name"
                                               lineHeight={30}
                                               value={this.state.picked2}
                                               editable={false}
                                               fontSize={16}
                                        // onChangeText={(itemValue) => this.setState({selected2: itemValue})}
                                               containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>
                                </TouchableOpacity>
                                <ModalFilterPicker
                                    visible={this.state.pickervisible2}
                                    onSelect={this.onTestNameSelectpicker}
                                    onCancel={this.onTestNameCancelpicker}
                                    options={testsname}
                                    optionTextStyle={style={fontSize:16}}
                                />

                                <TextField label="Test Result Value"
                                           lineHeight={30}
                                           value={this.state.testvalue}
                                           editable={true}
                                           fontSize={16}
                                           keyboardType='phone-pad'
                                            onChangeText={(itemValue) => this.setState({testvalue: itemValue})}
                                           containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>

                                <TextField label="Age at the time of Test"
                                           lineHeight={30}
                                           value={this.state.age}
                                           editable={true}
                                           keyboardType='phone-pad'
                                           fontSize={16}
                                           onChangeText={(itemValue) => this.setState({age: itemValue})}
                                           containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>


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
                        

                        {
                        // Here the ? Question Mark represent the ternary operator.
                        //style={{backgroundColor:'#FFFFFF',width:width-220}}
                        this.state.loading ?  <ActivityIndicator color = '#4d6bcb'
                                                                 size = "large" style={{padding: 20}} /> : null
                    }
                        {/* <Fab
                            // active={this.state.active}
                            // active={!this.state.active}
                            direction="up"
                            containerStyle={{position:'absolute'}}
                            style={{ backgroundColor: '#071398' }}
                            position="bottomRight"
                            onPress={() => {        if(this.state.picked2===''){
                                // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Test Type field cannot be empty!',
                                    duration: Snackbar.LENGTH_SHORT,
                                });
                            }
                            else if(this.state.testvalue===''){
                                // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                                Snackbar.show({
                                    title: 'Test value field cannot be empty!',
                                    duration: Snackbar.LENGTH_SHORT,
                                });
                                // this.resetData();
                            }
                            // else if(this.state.age===''){
                            //     // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                            //     Snackbar.show({
                            //         title: 'age field cannot be empty!',
                            //         duration: Snackbar.LENGTH_SHORT,
                            //     });
                            //     // this.resetData();
                            // }
                            else{
                                // Actions.searchScreen(params);
                                this.ShowHideActivityIndicator();
                                // this.saveTestsData();
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

                     </View>
</ScrollView>
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