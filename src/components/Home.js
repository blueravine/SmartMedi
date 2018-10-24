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
const testtypes=[
    {
        	id: 1267,
                    name: 'FBS',
                    value: 146,
                    normal: {min: null,
                        max: 100,
                        comparator: 'lessthan'
                    },
                    result: 'high',
                    testdate: 20181016,
                    catid: 1142,
                    catname: "Blood Test",
                },
                    { id: 1268,
                        name: 'PPBS',
                        value: 127,
                        normal: {min: null,
                            max: 140,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20181016,
                        catid: 1142,
                        catname: "Blood Test",
                    },
               {	id: 1267,
                    name: 'Tri Glycer',
                    value: 277,
                    normal: {min: null,
                        max: 150,
                        comparator: 'lessthan'
                    },
                    result: 'high',
                    testdate: 20181016,
                    catid: 1143,
                    catname: "Cholestrol Level",
                },
                    { id: 1268,
                        name: 'Cholestrol',
                        value: 105,
                        normal: {min: null,
                            max: 200,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20181016,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
                    { id: 1268,
                        name: 'LDL',
                        value: 27,
                        normal: {min: null,
                            max: 100,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20181016,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
                    { id: 1268,
                        name: 'HDL',
                        value: 23,
                        normal: {min: 40,
                            max: 60,
                            comparator: 'between'
                        },
                        result: 'normal',
                        testdate: 20181016,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
    {	id: 1267,
                    name: 'TSH',
                    value: 3.51,
                    normal: {min: 0.27,
                        max: 4.2,
                        comparator: 'between'
                    },
                    result: 'high',
                    testdate: 20181016,
                    catid: 1144,
                    catname: "Thyroid & Vitamin D Level",
                },
                    { id: 1268,
                        name: 'Vitamin D',
                        value: 28.97,
                        normal: {min: null,
                            max: 50,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20181016,
                        catid: 1144,
                        catname: "Thyroid & Vitamin D Level",

                    },
    {	id: 1267,
                    name: 'FBS',
                    value: 126,
                    normal: {min: null,
                        max: 100,
                        comparator: 'lessthan'
                    },
                    result: 'high',
                    testdate: 20180814,
                    catid: 1144,
                    catname: "Blood Test",

                },
                    { id: 1268,
                        name: 'PPBS',
                        value: 107,
                        normal: {min: null,
                            max: 140,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                        ,
                        testdate: 20180814,
                        catid: 1144,
                        catname: "Blood Test",
                    },
                    {	id: 1267,
                    name: 'Tri Glycer',
                    value: 257,
                    normal: {min: null,
                        max: 150,
                        comparator: 'lessthan'
                    },
                    result: 'high',
                    testdate: 20180814,
                    catid: 1143,
                    catname: "Cholestrol Level",
                },
                    { id: 1268,
                        name: 'Cholestrol',
                        value: 85,
                        normal: {min: null,
                            max: 200,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20180814,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
                    { id: 1268,
                        name: 'LDL',
                        value: 7,
                        normal: {min: null,
                            max: 100,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20180814,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
                    { id: 1268,
                        name: 'HDL',
                        value: 3,
                        normal: {min: 40,
                            max: 60,
                            comparator: 'between'
                        },
                        result: 'normal',
                        testdate: 20180814,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
                    {	id: 1267,
                    name: 'Tri Glycer',
                    value: 267,
                    normal: {min: null,
                        max: 150,
                        comparator: 'lessthan'
                    },
                    result: 'high',
                    testdate: 20180612,
                    catid: 1143,
                    catname: "Cholestrol Level",
                },
                    { id: 1268,
                        name: 'Cholestrol',
                        value: 95,
                        normal: {min: null,
                            max: 200,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20180612,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
                    { id: 1268,
                        name: 'LDL',
                        value: 17,
                        normal: {min: null,
                            max: 100,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20180612,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
                    { id: 1268,
                        name: 'HDL',
                        value: 13,
                        normal: {min: 40,
                            max: 60,
                            comparator: 'between'
                        },
                        result: 'normal',
                        testdate: 20180612,
                        catid: 1143,
                        catname: "Cholestrol Level",
                    },
                    {	id: 1267,
                    name: 'TSH',
                    value: 3.31,
                    normal: {min: 0.27,
                        max:  4.2,
                        comparator: 'between'
                    },
                    result: 'high',
                    testdate: 20180612,
                    catid: 1144,
                    catname: "Thyroid & Vitamin D Level",
                },
                    { id: 1268,
                        name: 'Vitamin D',
                        value: 26.87,
                        normal: {min: null,
                            max: 50,
                            comparator: 'lessthan'
                        },
                        result: 'normal',
                        testdate: 20180612,
                        catid: 1144,
                        catname: "Thyroid & Vitamin D Level",

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

var testdates = [
    {
        key: 20181016,
        label: '2018/10/16',
    },
    {
        key: 20180814,
        label: '2018/08/14',
    },
    {
        key: 20180612,
        label: '2018/06/12',
    }
];
// var filteredTestResult=[];
var renderResultCard=[];
var testtdetail;
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
            selectedDate:20180814,
            filteredTestResult:[],
            selectedTestName:'',
            istestSorted: false,
            result:[],
            gestureName: 'none',

    };
        // this.handleAppStateChange = this.handleAppStateChange.bind(this);
        // this._onButtonPressed = this._onButtonPressed.bind(this);
    }

    swiper:Object;


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
                break;
            case 'reports':

                break;
            case 'alerts':
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
    // _onButtonPressed() {
    //             setTimeout(() => {
    //         this.setState({ loading: true });
    //         Actions.searchScreen(params);
    //                 this.setState({ loading: false });
    //     }, 3000)
    // };
     componentDidMount() {
        // await AsyncStorage.getItem('newtest')
        //     .then((ntest) => {
        //
        //         testdata = ntest ? JSON.parse(ntest) : [];
        //
        //         testtypes.push(testdata);
        //         // alert(JSON.stringify(testdata));
        //
        //         this.filterByTestDate(this.state.selectedDate);
        //         BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        //
        //     }).done();
        this.filterByTestDate(this.state.selectedDate);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        // this.filterByTestDate(this.state.selectedDate);
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

    displayTrend(msg) {
        // Toast.show(" current result name" +msg,Toast.LONG)
        testtdetail.testname=msg;
        Actions.trendScreen(testtdetail);
    };

    filterByTestDate(newDate){
        this.setState( {filteredTestResult: testtypes.filter( (testresult) =>
            {return testresult.testdate === newDate}) });
        };

    filterByTestName(searchText, nDate){
        this.setState({selectedTestName: searchText});

        this.setState( {filteredTestResult: testtypes.filter( (testresult) =>
            {return testresult.name.toLowerCase().includes(searchText.toLowerCase()) && testresult.testdate === nDate}) });
    };

    sortByTestName(sDate) {
        if (this.state.istestSorted === false) {
        this.setState({
            filteredTestResult: testtypes.filter((testresult) => {
                return testresult.testdate === sDate
            }).sort(
                (a, b) => {return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                }
            ),
            istestSorted: true
        });
    } else {
            this.setState({
                filteredTestResult: testtypes.filter((testresult) => {
                    return testresult.testdate === sDate
                }).sort(
                        (a, b) => {return (-1) * (a.name.toLowerCase().localeCompare(b.name.toLowerCase()) );
                    }
                ),
                istestSorted: false
            });
        }
        // Toast.show(this.state.filteredTestResult[0].name,Toast.LONG);
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

        this.setState({selectedDate: testdates[newdateindex].key});

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

        this.setState({selectedDate: testdates[newdateindex].key});


        // alert("Swiped Right "+ testdates[newdateindex].key);
        this.filterByTestDate(testdates[newdateindex].key);
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
                    <TouchableOpacity onPress={() => {this.displayTrend(currentResult.name)}}>
                        <Text style={{marginBottom:5}}>{currentResult.name}</Text></TouchableOpacity>
                    {(currentResult.result==="high") &&
                    <Text style={{textAlign:'center',color:'#F80617',marginBottom:5}}> {currentResult.value}</Text>
                    }
                    {(currentResult.result==="normal") &&
                    <Text style={{textAlign:'center',color:'#0db75a',marginBottom:5}}> {currentResult.value}</Text>
                    }
                    {(currentResult.result==="between") &&
                    <Text style={{textAlign:'center',flex:1, color:'#0db75a',marginBottom:5}}>{currentResult.value}</Text>
                    }
                    {/*<Text>{currentResult.value}</Text>*/}
                    {(currentResult.normal.comparator === "lessthan") &&
                    <Text style={{marginBottom: 5}}> &#x0003C; {currentResult.normal.max}</Text>
                    }
                    {(currentResult.normal.comparator === "between") &&
                    <Text style={{marginBottom: 5}}> {currentResult.normal.min}-{currentResult.normal.max}</Text>
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

                        {/*<TouchableOpacity  style={{marginTop:5,paddingRight:10,paddingLeft:10}}*/}
                        {/*onPress={() => {(this.openDialog(true))}}>*/}
                        {/*<Icons type='FontAwesome' name='search' size={30} color="#FFFFFF"/>*/}
                        {/*</TouchableOpacity>*/}
                        <TouchableOpacity style={{marginTop:5,paddingRight:10,paddingLeft:10}}
                                          onPress={this.onplusButtonPress}>
                            <Icons type='MaterialCommunityIcons' name='plus' size={30} color="#FFFFFF"/>

                        </TouchableOpacity>
                    </View>
                    {/*showsButtons={true}*/}
                    <TouchableOpacity  style={{width:280,justifyContent:'flex-end'}}
                                       onPress={this.onTestNameShowpicker}>
                        {/*<Text>Select Country: {this.state.picked}</Text>*/}
                        <TextField label="Search Test By Date"
                                   lineHeight={30}
                                   value={this.state.selectedDate.toString().substring(6, 8) + '/' + this.state.selectedDate.toString().substring(4, 6) + '/' + this.state.selectedDate.toString().substring(0, 4)}
                                   editable={false}
                                   fontSize={16}
                            // onChangeText={(itemValue) => {this.setState({selectedDate: itemValue}), }}
                                   containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:60,marginRight:10,justifyContent:'flex-end'}}/>
                    </TouchableOpacity>
                    <ModalFilterPicker
                        visible={this.state.pickervisible2}
                        onSelect={this.onTestNameSelectpicker}
                        onCancel={this.onTestNameCancelpicker}
                        options={testdates}
                        optionTextStyle={style={fontSize:16}}
                    />

                    {/*<TouchableOpacity onPress={this.setState({'targetIndex': 2})} ><Text> Test</Text>*/}
                    {/*</TouchableOpacity>*/}

                    {/*<Swiper index={this.state.targetIndex} onIndexChanged={(index) => this.setState({'currIndex': index})}>*/}
                        {/*{renderResultCard}*/}
                        {/*</Swiper>*/}

                    <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                        borderTopLeftRadius:10,borderLeftWidth:10}}>
                        <TextField label="Search Test By Name"
                                   lineHeight={30}
                                   value={this.state.selectedTestName}
                                   editable={true}
                                   fontSize={16}
                                   onChangeText={(itemValue) => {this.filterByTestName(itemValue, this.state.selectedDate)} }
                                   containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:60,marginRight:10,justifyContent:'flex-end'}}/>
                        <GestureRecognizer
                            onSwipeLeft={() => this.onSwipeLeft(this.state.selectedDate)}
                            onSwipeRight={() => this.onSwipeRight(this.state.selectedDate)}
                        >
                            <Card>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:15}}>
                            <TouchableOpacity onPress={() => this.sortByTestName(this.state.selectedDate)}>
                                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                            <Text style={{marginBottom:5,textDecoration:'underline',fontWeight:'bold',fontStyle:'italic'}}>
                                Test Name</Text>
                                <Icon type='MaterialIcons' name='sort-by-alpha' size={18} color="#000"/>
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginBottom:5,textDecoration:'underline',fontWeight:'bold',fontStyle:'italic'}}>Actual</Text>
                            <Text style={{marginBottom:5,textDecoration:'underline',fontWeight:'bold',fontStyle:'italic'}}>Normal</Text>
                        </View>

                            {renderResultCard}
</Card>
                        </GestureRecognizer>
                    </Card>
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