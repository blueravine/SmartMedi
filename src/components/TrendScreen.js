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
const ac_icon_blue = require('../Images/ac_icon_blue.png');
const ac_icon_grey = require('../Images/ac_icon_grey.png');
const nonac_icon_blue = require('../Images/nonac_icon_blue.png');
const nonac_icon_grey = require('../Images/nonac_icon_grey.png');
const search_magnifier_black = require('../Images/search_magnifier_black.png');
const search_magnifier_blue = require('../Images/search_magnifier_blue.png');
import Icoons from 'react-native-vector-icons/FontAwesome';
var testdetail;
var testData;
var trendchartdata = [];
// import Chart from 'react-native-simple-charts';
import PureChart from 'react-native-pure-chart';

// import {LineChart} from 'react-native-charts-wrapper';
const testtypes=[
    {
        id: 1267,
        testname: 'FBS',
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
        testname: 'PPBS',
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
        testname: 'Tri Glycer',
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
        testname: 'Cholestrol',
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
        testname: 'LDL',
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
        testname: 'HDL',
        value: 23,
        normal: {min: null,
            max: 40 + ' - ' +60,
            comparator: 'between'
        },
        result: 'normal',
        testdate: 20181016,
        catid: 1143,
        catname: "Cholestrol Level",
    },
    {	id: 1267,
        testname: 'TSH',
        value: 3.51,
        normal: {min: null,
            max: 0.27 + ' - ' +4.2,
            comparator: 'between'
        },
        result: 'high',
        testdate: 20181016,
        catid: 1144,
        catname: "Thyroid & Vitamin D Level",
    },
    { id: 1268,
        testname: 'Vitamin D',
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
        testname: 'FBS',
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
        testname: 'PPBS',
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
        testname: 'Tri Glycer',
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
        testname: 'Cholestrol',
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
        testname: 'LDL',
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
        testname: 'HDL',
        value: 3,
        normal: {min: null,
            max: 40 + ' - ' +60,
            comparator: 'between'
        },
        result: 'normal',
        testdate: 20180814,
        catid: 1143,
        catname: "Cholestrol Level",
    },
    {	id: 1267,
        testname: 'Tri Glycer',
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
        testname: 'Cholestrol',
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
        testname: 'LDL',
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
        testname: 'HDL',
        value: 13,
        normal: {min: null,
            max: 40 + ' - ' +60,
            comparator: 'between'
        },
        result: 'normal',
        testdate: 20180612,
        catid: 1143,
        catname: "Cholestrol Level",
    },
    {	id: 1267,
        testname: 'TSH',
        value: 3.31,
        normal: {min: null,
            max: 0.27 +' - ' + 4.2,
            comparator: 'between'
        },
        result: 'high',
        testdate: 20180612,
        catid: 1144,
        catname: "Thyroid & Vitamin D Level",
    },
    { id: 1268,
        testname: 'Vitamin D',
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

var trentestresultname = [
    {
        key: 'FBS',
        label: 'FBS',
    },
    {
        key: 'PPBS',
        label: 'PPBS',
    },
    {
        key: 'Tri Glycer',
        label: 'Tri Glycer',
    },
    {
        key: 'Cholestrol',
        label: 'Cholestrol',
    },
    {
        key: 'LDL',
        label: 'LDL',
    },
    {
        key: 'HDL',
        label: 'HDL',
    },
    {
        key: 'TSH',
        label: 'TSH',
    },
    {
        key: 'Vitamin D',
        label: 'Vitamin D',
    },
];
export default class TrendScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            activeTab: 'reports',
            active: 'false',
            pickervisible1: false,
            selectedtestname:'',
        };
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


    async componentDidMount() {
        this.setState({selectedtestname: this.props.testname});
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

    render() {



        testdetail = {};
        testdetail = {
            testdate:this.props.testdate.toString().substring(6, 8) + '/' + this.props.testdate.toString().substring(4, 6) + '/' + this.props.testdate.toString().substring(0, 4),
            testname:this.state.selectedtestname

        };

        var filteredTrendResult = testtypes.filter((trendresult) => {return trendresult.testname === this.state.selectedtestname});

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
                <View style={{flexDirection:'row' , justifyContent:'space-evenly',marginBottom:15}}>
                    <Text style={{marginBottom:5}} >{currentTrend.testdate.toString().substring(6, 8)
                    + '/' + currentTrend.testdate.toString().substring(4, 6) + '/'
                    + currentTrend.testdate.toString().substring(0, 4)}</Text>
                    {(currentTrend.result === "high") &&
                    <Text style={{textAlign:'center',color:'#F80617',marginBottom:5}}>{currentTrend.value}</Text>
                    }
                    {(currentTrend.result === "normal") &&
                    <Text style={{textAlign:'center',color:'#2CF815',marginBottom:5}}>{currentTrend.value}</Text>
                    }
                    {(currentTrend.result === "between") &&
                    <Text style={{textAlign:'center',color:'#2CF815',marginBottom:5}}>{currentTrend.value}</Text>
                    }
                    <Text>{currentTrend.normal.max}</Text>
                </View>

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

                    <View style={{flexDirection:"row",paddingRight:10,
                        paddingLeft:10,backgroundColor:'#4d6bcb',height:50}}>
                        <TouchableOpacity style={{marginTop:10}}
                                          onPress={() => Actions.homeScreen()}>
                            <Icon type='MaterialIcons' name='arrow-back' size={30} color="#FFFFFF"/>
                        </TouchableOpacity>
                        <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  Test Result Trend</Text>
                    </View>


                    <Card >
                        <View style={{flexDirection:'row' , justifyContent:'space-evenly',marginTop:15}}>
                            <TouchableOpacity onPress={this.onTrendTestNameShowpicker}>
                            <Text style={{textAlign:'center'}}>{this.state.selectedtestname}</Text>
                            </TouchableOpacity>
                            <ModalFilterPicker
                                visible={this.state.pickervisible1}
                                onSelect={this.onTrendTestNameSelectpicker}
                                onCancel={this.onTrendTestNameCancelpicker}
                                options={trentestresultname}
                                optionTextStyle={style={fontSize:16}}
                            />
                        </View>
                        <View style={{marginTop:5,flexDirection:'row',justifyContent:'space-evenly'}}>
                            <Text style={{marginBottom:5,marginLeft:20}}>Test Date</Text>
                            <Text style={{marginBottom:5,marginLeft:20}}>Actual</Text>
                            <Text style={{marginBottom:5}}>Normal</Text>
                        </View>

                        {renderTrendCard}

                        <View style={{marginTop:50}}>
                        <PureChart
                            width={100}
                            height={100}
                            data={trendchartdata.reverse()}
                            type='line' />
                        </View>
                        {/*<LineChart style={styles.chart}*/}
                                   {/*data={{dataSets:[{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}*/}
                        {/*/>*/}

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