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

var options = [
    {
        key: 'Blood Test ',
        label: 'Blood Test',
    },
    {
        key: 'Cholestrol Level',
        label: 'Cholestrol Level',
    },
    {
        key: 'Thyroid & Vitamin D Level',
        label: 'Thyroid & Vitamin D Level',
    },
];

var optionsname = [
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

var optionsmedicinetype = [
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
export default class AddEventScreen extends Component {

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
            pickervisible3: false,
            picked1: '',
            picked2: '',
            picked3:'',
            testvalue:'',
            rangevalue:'',
            resultnotes:'',
            date: new Date(),
            selected1: '',

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

    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }
    onChangeValue (value: string) {
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

    handleChange(value: string) {
        this.setState({
            selected: value
        });
    };

    // _SwapPickerText(){
    //     let temploc=this.state.picked1;
    //     this.setState({picked1: this.state.picked2, picked2:temploc});
    // };


    // sendSMSFunction() {
    //     SendSMS.send(9885638104, "9885638104", "Hello.. Thank you for using SmarTran booking service ! \nYour ticket for Jedimetla to mehdipatnam for 18 Aug 2018\n" +
    //         "at 5:30 have been generated open the link fro seeing th qr code for scanning\n" +
    //         "  Have a nice day.",
    //         (msg)=>{
    //             Toast.show(msg, Toast.SHORT);
    //         }
    //     );
    // Actions.ticketScreen();
    // }
    // setFromLoc(){
    //     this.setState({selected1: ''});
    // }
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
    onTestNameSelectpicker = (picked) => {
        this.setState({
            picked2: picked,
            pickervisible2: false,
        });
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
            // this.saveTestsData(temptests);
            // alert("saved test data " +JSON.stringify(temptests));
            Actions.alertScreen();
            Snackbar.show({
                title: 'Test details added succesfully',
                duration: Snackbar.LENGTH_SHORT,
            });
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
    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {

        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


    handleBackButton = () => {
        Actions.alertScreen();
        return true;
    };

    resetData(){
        this.setState({
            picked2 : ''
        });
    };
    // onAddButtonPress = () => {
    //     if(this.state.picked1===0){
    //         // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
    //         Snackbar.show({
    //             title: 'TestType cannot be empty!',
    //             duration: Snackbar.LENGTH_SHORT,
    //         });
    //     }
    //     else if(this.state.picked2===0){
    //         // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
    //         Snackbar.show({
    //             title: 'TestType cannot be empty!',
    //             duration: Snackbar.LENGTH_SHORT,
    //         });
    //         this.resetData();
    //     }
    //     else{
    //         // Actions.searchScreen(params);
    //         this.ShowHideActivityIndicator();
    //         // this._onButtonPressed();
    //     }    };

    onCancelButtonPress = () => {
        Actions.alertScreen();
    };

    async saveTestsData(currenttests) {
        try {

            await AsyncStorage.getItem('newtest')
                .then((tests) => {
                    addtests = tests ? JSON.parse(tests) : [];
                    // Toast.show("tickets " +c ,Toast.LONG);
                    addtests.push(currenttests);
                    AsyncStorage.setItem('newtest', JSON.stringify(addtests));

                    // if(addtests.contain(this.state.date)){
                    //     Alert.alert(
                    //         'Date Already Exist',
                    //         'Do you want update the details for '+ this.state.date , [{
                    //             text: 'Cancel',
                    //             onPress: () => {Snackbar.show({
                    //                 title: 'Test details not added',
                    //                 duration: Snackbar.LENGTH_SHORT,
                    //             });
                    //             }
                    //         }, {
                    //             text: 'OK',
                    //             onPress: () =>{
                    //                 addtests.update(currenttests);
                    //                 AsyncStorage.setItem('tests', JSON.stringify(addtests));
                    //             }
                    //         }, ]
                    //         , {
                    //             cancelable: false
                    //         }
                    //     );
                    // }
                    // else{
                    //     // addtests = tests ? JSON.parse(tests) : [];
                    //     // Toast.show("tickets " +c ,Toast.LONG);
                    //     addtests.push(currenttests);
                    //     AsyncStorage.setItem('tests', JSON.stringify(addtests));
                    // }
                });
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        }catch(error) {
            alert(error)
        }
    }

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
                        backgroundColor='#f1f1f1f1'/>
                </View>

                <View style={[styles.headerview]}>
                    <ScrollView ref={ (c) => {this.scroll = c}} >
                        <View style={{justifyContent:'flex-start',backgroundColor:'#4d6bcb',height:50}}>
                            <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  Add Event Result</Text>

                        </View>

                        <Card style={{height:500}}>

                            <Card style={{ height:500,borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                                borderTopLeftRadius:10,borderLeftWidth:10,shadowColor:"#f1f1f1f1",borderColor:'#FFFFFF'}}>
                                <TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>
                                    <View style={{flexDirection:"row",justifyContent:'flex-start',marginTop:10}}>

                                        <TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>
                                            <Image source={require('../Images/calendar_icon.png')} style={{height: 25, width: 25,marginLeft:18}}
                                            />
                                        </TouchableOpacity>
                                        <Text note style={{fontSize:20,color:'#000'}}
                                              onPress={this._showDateTimePicker}> {
                                            Moment(this.state.date).format('DD MMM YYYY')} </Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{flexDirection:"row",justifyContent:'flex-start'}}>
                                    <TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>
                                        <DateTimePicker
                                            isVisible={this.state.isDateTimePickerVisible}
                                            mode={'date'}
                                            minimumDate={Moment().toDate()}
                                            onConfirm={this._handleDatePicked}
                                            onCancel={this._hideDateTimePicker}
                                        />


                                    </TouchableOpacity>



                                </View>

                                <View style={{flexDirection:"row",marginTop:10}}>
                                    {/*<View style={{flexDirection:"column",justifyContent:'space-evenly',marginLeft: 15}}>*/}
                                    {/*/!*<View style={{flexDirection:"column",justifyContent:'space-evenly'}}>*!/*/}
                                    {/*<Image source={require('../Images/from_icon.png')}*/}
                                    {/*style={{width: 25, height: 35, paddingLeft: 5}}/>*/}
                                    {/*<Image source={require('../Images/to_icon.png')}*/}
                                    {/*style={{width: 25, height: 35, paddingLeft: 5}}/>*/}

                                    {/*</View>*/}
                                    <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:20}}>

                                            <TouchableOpacity style={{width:280,justifyContent:'flex-end',flex:8}}
                                                              onPress={this.onTestTypeShowpicker}>
                                                {/*<Text>Select Country: {this.state.picked}</Text>*/}
                                                <TextField label="Select Test Category"
                                                           lineHeight={30}
                                                           value={this.state.picked1}
                                                           fontSize={16}
                                                           editable={false}
                                                    // onChangeText={(itemValue) => {this.setState({selected1: this.findPOI(itemValue)})}}
                                                           containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}
                                                />
                                            </TouchableOpacity>
                                            <ModalFilterPicker
                                                visible={this.state.pickervisible1}
                                                onSelect={this.onTestTypeSelectpicker}
                                                onCancel={this.onTestTypeCancelpicker}
                                                options={options}
                                                optionTextStyle={style={fontSize:16}}
                                            />
                                        </View>
                                        <TouchableOpacity  style={{width:280,justifyContent:'flex-end'}}
                                                           onPress={this.onTestMedicineNameShowpicker}>
                                            {/*<Text>Select Country: {this.state.picked}</Text>*/}
                                            <TextField label="Select Medicine Type"
                                                       lineHeight={30}
                                                       value={this.state.picked3}
                                                       editable={false}
                                                       fontSize={16}
                                                // onChangeText={(itemValue) => this.setState({selected2: itemValue})}
                                                       containerStyle={{height:55,width:DEVICE_WIDTH - 120,marginTop:10,marginLeft:10,marginRight:10,justifyContent:'flex-end'}}/>
                                        </TouchableOpacity>
                                        <ModalFilterPicker
                                            visible={this.state.pickervisible3}
                                            onSelect={this.onTestMedicineNameSelectpicker}
                                            onCancel={this.onTestMedicineNameCancelpicker}
                                            options={optionsmedicinetype}
                                            optionTextStyle={style={fontSize:16}}
                                        />

                                        {/*<TouchableOpacity  style={{marginTop:20}} onPress={this._SwapPickerText.bind(this)}>*/}
                                            {/*<Icon type='MaterialIcons' name='swap-vertical-circle' size={35} color="#2eacde"/>*/}
                                            {/*</TouchableOpacity>*/}
                                            {/*<View style={{*/}
                                            {/*flex: 1,*/}
                                            {/*borderBottomColor: 'black',*/}
                                            {/*borderBottomWidth: 1,*/}
                                            {/*width: width - 10,}}>*/}
                                            {/*</View>*/}
                                        {/*</View>*/}
                                        <TouchableOpacity  style={{width:280,justifyContent:'flex-end'}}
                                                           onPress={this.onTestNameShowpicker}>
                                            {/*<Text>Select Country: {this.state.picked}</Text>*/}
                                            <TextField label="Select name"
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
                                            options={optionsname}
                                            optionTextStyle={style={fontSize:16}}
                                        />

                                    </View>
                                </View>
                                <Fab
                                    // active={this.state.active}
                                    // active={!this.state.active}
                                    direction="up"
                                    containerStyle={{position:'absolute'}}
                                    style={{ backgroundColor: '#071398' }}
                                    position="bottomRight"
                                    onPress={() => {        if(this.state.picked1===''){
                                        // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);
                                        Snackbar.show({
                                            title: 'Test Category cannot be empty!',
                                            duration: Snackbar.LENGTH_SHORT,
                                        });
                                    }
                                    else if(this.state.picked2===''){
                                        // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
                                        Snackbar.show({
                                            title: 'Test Type cannot be empty!',
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
                                </Fab>

                            </Card>
                        </Card>
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