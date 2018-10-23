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
const testresults=[
    {
        id: 7616,
        testdate: '16/10/2018',
        category:[
            {	id: 1142,
                name: "Blood Test",
                type:[{	id: 1267,
                    name: 'FBS',
                    value: 146,
                    normal: {min: null,
                        max: 100,
                        comparator: 'lessthan'
                    },
                    result: 'high'
                },
                    { id: 1268,
                        name: 'PPBS',
                        value: 127,
                        normal: {min: null,
                            max: 140,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    }
                ]
            },
            {	id: 1142,
                name: "Cholestrol Level",
                type:[{	id: 1267,
                    name: 'Tri Glycer',
                    value: 277,
                    normal: {min: null,
                        max: 150,
                        comparator: 'lessthan'
                    },
                    result: 'high'
                },
                    { id: 1268,
                        name: 'Cholestrol',
                        value: 105,
                        normal: {min: null,
                            max: 200,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    },
                    { id: 1268,
                        name: 'LDL       ',
                        value: 27,
                        normal: {min: null,
                            max: 100,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    },
                    { id: 1268,
                        name: 'HDL       ',
                        value: 23,
                        normal: {min: null,
                            max: 40 + ' - ' +60,
                            comparator: 'between'
                        },
                        result: 'normal'
                    }


                ]
            },
            {	id: 1142,
                name: "Thyroid & Vitamin D Level",
                type:[{	id: 1267,
                    name: 'TSH',
                    value: 3.51,
                    normal: {min: null,
                        max: 0.27 + ' - ' +4.2,
                        comparator: 'between'
                    },
                    result: 'high'
                },
                    { id: 1268,
                        name: 'Vitamin D',
                        value: 28.97,
                        normal: {min: null,
                            max: 50,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    }
                ]
            },
        ]
    },

    {
        id: 7616,
        testdate: '14/10/2018',
        category:[
            {	id: 1142,
                name: "Blood Test",
                type:[{	id: 1267,
                    name: 'FBS',
                    value: 146,
                    normal: {min: null,
                        max: 100,
                        comparator: 'lessthan'
                    },
                    result: 'high'
                },
                    { id: 1268,
                        name: 'PPBS',
                        value: 127,
                        normal: {min: null,
                            max: 140,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    }
                ]
            },
            {	id: 1142,
                name: "Cholestrol Level",
                type:[{	id: 1267,
                    name: 'Tri Glycer',
                    value: 277,
                    normal: {min: null,
                        max: 150,
                        comparator: 'lessthan'
                    },
                    result: 'high'
                },
                    { id: 1268,
                        name: 'Cholestrol',
                        value: 105,
                        normal: {min: null,
                            max: 200,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    },
                    { id: 1268,
                        name: 'LDL       ',
                        value: 27,
                        normal: {min: null,
                            max: 100,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    },
                    { id: 1268,
                        name: 'HDL       ',
                        value: 23,
                        normal: {min: null,
                            max: 40 + ' - ' +60,
                            comparator: 'between'
                        },
                        result: 'normal'
                    }


                ]
            },
        ]
    },

    {
        id: 7616,
        testdate: '12/10/2018',
        category:[
            {	id: 1142,
                name: "Cholestrol Level",
                type:[{	id: 1267,
                    name: 'Tri Glycer',
                    value: 277,
                    normal: {min: null,
                        max: 150,
                        comparator: 'lessthan'
                    },
                    result: 'high'
                },
                    { id: 1268,
                        name: 'Cholestrol',
                        value: 105,
                        normal: {min: null,
                            max: 200,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    },
                    { id: 1268,
                        name: 'LDL       ',
                        value: 27,
                        normal: {min: null,
                            max: 100,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    },
                    { id: 1268,
                        name: 'HDL       ',
                        value: 23,
                        normal: {min: null,
                            max: 40 + ' - ' +60,
                            comparator: 'between'
                        },
                        result: 'normal'
                    }


                ]
            },
            {	id: 1142,
                name: "Thyroid & Vitamin D Level",
                type:[{	id: 1267,
                    name: 'TSH',
                    value: 3.51,
                    normal: {min: null,
                        max: 0.27 +' - ' + 4.2,
                        comparator: 'between'
                    },
                    result: 'high'
                },
                    { id: 1268,
                        name: 'Vitamin D',
                        value: 28.97,
                        normal: {min: null,
                            max: 50,
                            comparator: 'lessthan'
                        },
                        result: 'normal'
                    }
                ]
            },
        ]
    },
];

const  testdata  = [
    {
        text: 'Test Date',
        name: 'One',
        testcategory:'Blood Sugar Level',
        testtypeblood:'FBS',
        testtypeblood1:'PPBS',
        // image: require('./img/swiper-1.png'),
    },

    {
        text1: 'Test Date',
        name1: 'two',
        testcategory1:'Cholestrol Level',
        testtypecholestrol:'Tri Glycer',
        testtypecholestrol1:'Cholestrol',
        testtypecholestrol2:'LDL',
        testtypecholestrol3:'HDL',
        // image: require('./img/swiper-1.png'),
    },

    {
        text2: 'Test Date',
        name2: 'three',
        testcategory2:'Thyroid & Vitamin-D Level',
        testtypethroid:'TSH',
        testtypevitamin:'Vitamin-D',
        // image: require('./img/swiper-1.png'),
    },
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
const ac_icon_blue = require('../Images/ac_icon_blue.png');
const ac_icon_grey = require('../Images/ac_icon_grey.png');
const nonac_icon_blue = require('../Images/nonac_icon_blue.png');
const nonac_icon_grey = require('../Images/nonac_icon_grey.png');
const search_magnifier_black = require('../Images/search_magnifier_black.png');
const search_magnifier_blue = require('../Images/search_magnifier_blue.png');
import Icoons from 'react-native-vector-icons/FontAwesome';

var testdates = [
    {
        key: '16/10/2018 ',
        label: '16/10/2018',
    },
    {
        key: '14/09/2018',
        label: '14/09/2018',
    },
    {
        key: '12/08/2018',
        label: '12/08/2018',
    }
];

export default class TestDetails extends Component {

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
            picked1: '',
            picked2: '',
            date: new Date(),
            selected1: '',
            currIndex: 0,
            targetIndex: 0,
            pressedType: ''
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

    // renderBottomComponent(){
    //
    // if(this.state.viewSection) {
    //         return (
    //             <ScrollView
    //                 style={styles.container1}
    //                 ref={(scrollView) => { this.scrollView = scrollView; }}
    //                 //pagingEnabled={true}
    //                 horizontal= {true}
    //                 decelerationRate={0}
    //                 snapToInterval={width - 60}
    //                 snapToAlignment={"center"}
    //                 contentInset={{
    //                     top:0,
    //                     left: 30,
    //                     bottom:0,
    //                     right: 30,
    //                 }}>
    //                 <Card style={styles.view} >
    //                     <Text style={{textAlign:'center'}}>
    //                         Date:date
    //                     </Text>
    //                     <Text style={{textAlign:'center'}}>
    //                         From:Location
    //                     </Text>
    //                     <Text style={{textAlign:'center'}}>
    //                         To:Location
    //                     </Text>
    //                 </Card>
    //                 <Card style={styles.view2} >
    //                 </Card>
    //                 <Card style={styles.view} >
    //                 </Card>
    //                 <Card style={styles.view2} >
    //                 </Card>
    //             </ScrollView>
    //         );
    //     }
    // }
    // buttonPress=()=>{
    //     // this.scrollView.scrollTo({x: -30},1);
    //     this.setState({viewSection:true})
    //     // this.setState({viewSection: !this.state.viewSection})
    // };


    // state = {
    //     activeTab: this.tabs[0].key
    // }
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
                Actions.profileScreen();
                break;
            default:

        }
    };


    // favouritedata(recivedindex){
    //     // this.setState({
    //     //     picked1: favoriteticketdata.routes[recivedindex].from
    //     // });
    //     // this.setState({
    //     //     picked2: favoriteticketdata.routes[recivedindex].to
    //     // });
    //     params.fromLoc= favoriteticketdata.routes[recivedindex].from;
    //     params.toLoc= favoriteticketdata.routes[recivedindex].to;
    //
    //     alert("all tick"+recivedindex+"from"+params.fromLoc+"to"+params.toLoc+"date"+params.tripdte);
    //
    // };


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
    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
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
        // AppState.removeEventListener('change',this.handleAppStateChange);
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
            picked2: picked,
            pickervisible2: false,
        });
    };

    onTestNameCancelpicker = () => {
        this.setState({
            pickervisible2: false
        });
    };

    onplusButtonPress = () => {
        Actions.addtestScreen();
    };
    onsearchButtonPress = () => {
        // if(this.state.picked1===0){
        // Toast.show(" From or To Location cannot be empty! ",Toast.LONG);

        Actions.homeScreen();
        Snackbar.show({
            title: 'Searched Results!' +selectedType,
            duration: Snackbar.LENGTH_SHORT,
        });
        // }
        // else if(this.state.picked2===0){
        //     // Toast.show(" From and To Location cannot be same! ",Toast.LONG);
        //     Snackbar.show({
        //         title: 'TestType cannot be empty!',
        //         duration: Snackbar.LENGTH_SHORT,
        //     });
        //     this.resetData();
        // }
        // else{
        //     // Actions.searchScreen(params);
        //     this.ShowHideActivityIndicator();
        //     // this._onButtonPressed();
        // }
    };

    // typeClick(selectedType) {
    //     this.setState({pressedType: selectedType});
    //     Snackbar.show({
    //         title: 'Pressed type' +this.state.pressedType,
    //         duration: Snackbar.LENGTH_SHORT,
    //     });
    // }

    openDialog(show) {
        this.setState({ showDialog: show })
    };

    renderType(currcat, categoryindex) {
        var renderType = currcat.type.map( (currenttype, tindex) => {
            return(
                <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={this.onsearchButtonPress(currenttype.name)}>
                        <Text style={{textAlign:'center',marginLeft:8,}}>{currenttype.name}</Text>
                    </TouchableOpacity>
                    {/*<Text style={{textAlign:'center'}}>{currenttype.value}</Text>*/}
                    {(currenttype.result==="high") &&
                    <Text style={{textAlign:'center',color:'#F80617',flex:1}}>{currenttype.value}</Text>
                    }
                    {(currenttype.result==="normal") &&
                    <Text style={{textAlign:'center',flex:1}}>{currenttype.value}</Text>
                    }
                    {(currenttype.result==="between") &&
                    <Text style={{textAlign:'center',flex:1}}>{currenttype.value}</Text>
                    }
                    <Text style={{textAlign:'center',flex:1}}>{currenttype.normal.max}</Text>
                </View>
            );
        });

        return renderType;
    }


    renderCategory(currtest,testindex) {
        var renderCat = currtest.category.map( (currentcat, cindex) => {
            return(<Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                borderTopLeftRadius:10,borderLeftWidth:10}}>
                <Text style={{textAlign:'center',marginBottom:20}}>{currentcat.name}</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
                    <Text style={{textAlign:'center'}}> </Text>
                    <Text style={{textAlign:'center'}}> </Text>
                    <Text style={{textAlign:'center'}}> </Text>
                    <Text style={{textAlign:'center',flex:2}}>   Actual </Text>
                    <Text style={{textAlign:'center',flex:1}}>   Normal </Text>
                </View>
                <View>{this.renderType(currentcat, cindex)}</View>

            </Card>);
        });

        return(
            renderCat);
    }

    // renderSwiper(){
    //  return(
    //      <Swiper index={this.state.targetIndex} onIndexChanged={(index) => this.setState({'currIndex': index})}>
    //         {renderCard}
    //     </Swiper>
    // );
    // }

    render() {

        let data = [{
            value: this.state.date,
        }
            // , {
            //     value: 'A/C Buses',
            // }, {
            //     value: 'Non A/C Buses',
            // }
        ];



        renderCard = testresults.map((currtestresult, testresultindex) => {

            return(

                <Card>
                    <Text style={{textAlign:'right'}}>{currtestresult.testdate}</Text>
                    {this.renderCategory(currtestresult,testresultindex)}
                </Card>
            );

            // </Card>);

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
                                   value={'16/10/2018'}
                                   editable={false}
                                   fontSize={16}
                            // onChangeText={(itemValue) => this.setState({selected2: itemValue})}
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

                    <Swiper index={this.state.targetIndex} onIndexChanged={(index) => this.setState({'currIndex': index})}>
                        {renderCard}
                    </Swiper>


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