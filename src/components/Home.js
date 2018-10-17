import React, { Component,PropTypes } from 'react';
import { Image,ScrollView,StyleSheet,TouchableOpacity,StatusBar,AsyncStorage,ActivityIndicator,BackHandler,AppState,
     UIManager, findNodeHandle,Alert,Keyboard,
    TouchableHighlight,Dimensions,Animated,Easing } from 'react-native';
import { Container, Header, Content, Card, CardItem, Spinner,Thumbnail,Picker,DeckSwiper, Text,Item,icon,Input,View,Fab, Button,  Left, Body, Right,
    Footer, FooterTab} from 'native-base';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iccon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome';
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
import Swiper from 'react-native-swiper';
const card      = {card: {width: 300,height:500}};
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

var options = [
    {
        key: 'Thyroid Test Result ',
        label: 'Thyroid Test Result',
    },
    {
        key: 'Cholestrol Test Result',
        label: 'Cholestrol Test Result',
    },
    {
        key: 'Blood Test Result',
        label: 'Blood Test Result',
    },
    {
        key: 'Body Mass Index Test Result',
        label: 'Body Mass Index Test Result',
    },
];

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
            picked1: '',
            picked2: '',
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
        Snackbar.show({
            title: 'Searched Results!',
            duration: Snackbar.LENGTH_SHORT,
        });
        Actions.homeScreen();
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


    openDialog(show) {
        this.setState({ showDialog: show })
    };

    render() {

        return (

            <View style={styles.container}>
                <View>
                    <StatusBar
                        hidden={false}
                        backgroundColor='#f1f1f1f1'/>
                </View>

                <View style={[styles.headerview]}>

                        <View style={{justifyContent:'flex-start',backgroundColor:'#4d6bcb',height:50}}>
                                <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#FFFFFF'}} >  Welcome James</Text>

                        </View>
                    <ScrollView
                        style={styles.container1}
                        ref={(scrollView) => { this.scrollView = scrollView; }}
                        //pagingEnabled={true}
                        horizontal= {true}
                        decelerationRate={0}
                        snapToInterval={width - 60}
                        snapToAlignment={"center"}
                        contentInset={{
                            top:0,
                            left: 30,
                            bottom:0,
                            right: 30,
                        }}>

                        <Card style={{width:DEVICE_WIDTH - 10}}>
                    <View style={{flexDirection:"row",justifyContent:'space-evenly',backgroundColor:'#FFFFFF'}}>
                        <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#000'}} >  Test Date</Text>
                        <Text note style={{fontSize:16,textAlign:'right',marginTop:10,flex:2,color:'#000'}} > 16/10/2018</Text>

                    </View>



                    <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                        borderTopLeftRadius:10,borderLeftWidth:10}}>

                        {/*<View style={{flexDirection:"row",marginTop:10}}>*/}
                            <View style={{justifyContent:'flex-start',marginBottom:20}}>
                                <Text note style={{fontSize:14,textAlign:'center',color:'#000'}} >  Blood Sugar Level</Text>

                            </View>
                        <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                            <View style={{flexDirection:"column",marginTop:10}}>
                                <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  </Text>
                                <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > FBS  </Text>


                                <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > PPBS </Text>


                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Actual </Text>
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  146  </Text>

                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  127 </Text>
                                </View>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>

                                    <Iccon type='FontAwesome' name='flag-o' size={22} color="#F80617" style = {{marginTop: 25 }}/>
                                    <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                </View>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Normal Range  </Text>

                                    <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 100)</Text>
                                    <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 140)</Text>
                                </View>
                            </View>


                        </View>

                    </Card>


                    <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                        borderTopLeftRadius:10,borderLeftWidth:10}}>

                        {/*<View style={{flexDirection:"row",marginTop:10}}>*/}
                        <View style={{justifyContent:'flex-start',marginBottom:20}}>
                            <Text note style={{fontSize:14,textAlign:'center',color:'#000'}} >  Cholestrol Level</Text>

                        </View>
                        <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                            <View style={{flexDirection:"column",marginTop:35}}>
                                <Text note style={{fontSize:14,textAlign:'left',color:'#000',marginBottom:5}} > Tri Glycer  </Text>
                                <Text note style={{fontSize:14,textAlign:'left',color:'#000',marginBottom:8}} > Cholestrol </Text>
                                <Text note style={{fontSize:14,textAlign:'left',color:'#000',marginBottom:5}} > LDL </Text>
                                <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > HDL </Text>


                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    {/*<Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  </Text>*/}
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Actual </Text>
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  277  </Text>

                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  105 </Text>

                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  27 </Text>

                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  23 </Text>
                                </View>

                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly',marginTop: 10}}>

                                    <Iccon type='FontAwesome' name='flag-o' size={22} color="#F80617" style = {{marginTop: 25 }}/>
                                    <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                    <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                    <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                </View>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Normal Range  </Text>

                                    <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 150)</Text>
                                    <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 200)</Text>
                                    <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 100)</Text>
                                    <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (40-60)</Text>
                                </View>
                            </View>


                        </View>

                    </Card>


                    <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                        borderTopLeftRadius:10,borderLeftWidth:10}}>

                        {/*<View style={{flexDirection:"row",marginTop:10}}>*/}
                        <View style={{justifyContent:'flex-start',marginBottom:20}}>
                            <Text note style={{fontSize:14,textAlign:'center',color:'#000'}} >  Thyroid & Vitamin D Levels</Text>

                        </View>
                        <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                            <View style={{flexDirection:"column",marginTop:10}}>
                                <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  </Text>
                                <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > TSH  </Text>


                                <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Vitamin D </Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Actual </Text>
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  3.51  </Text>

                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  28.97 </Text>
                                </View>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 25 }}/>
                                    <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                </View>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Normal Range  </Text>
                                    <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (0.27-4.2)</Text>

                                    <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 50)</Text>
                                </View>
                            </View>

                        </View>

                    </Card>
                        </Card>

                        <Card style={{width:DEVICE_WIDTH - 10}}>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly',backgroundColor:'#FFFFFF'}}>
                                <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#000'}} >  Test Date</Text>
                                <Text note style={{fontSize:16,textAlign:'right',marginTop:10,flex:2,color:'#000'}} > 14/06/2018</Text>

                            </View>



                            <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                                borderTopLeftRadius:10,borderLeftWidth:10}}>

                                {/*<View style={{flexDirection:"row",marginTop:10}}>*/}
                                <View style={{justifyContent:'flex-start',marginBottom:20}}>
                                    <Text note style={{fontSize:14,textAlign:'center',color:'#000'}} >  Blood Sugar Level</Text>

                                </View>
                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:"column",marginTop:10}}>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  </Text>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > FBS  </Text>


                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > PPBS </Text>


                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Actual </Text>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  146  </Text>

                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  127 </Text>
                                        </View>
                                    </View>

                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>

                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#F80617" style = {{marginTop: 25 }}/>
                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Normal Range  </Text>

                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 100)</Text>
                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 140)</Text>
                                        </View>
                                    </View>


                                </View>

                            </Card>

                            <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                                borderTopLeftRadius:10,borderLeftWidth:10}}>

                                {/*<View style={{flexDirection:"row",marginTop:10}}>*/}
                                <View style={{justifyContent:'flex-start',marginBottom:20}}>
                                    <Text note style={{fontSize:14,textAlign:'center',color:'#000'}} >  Thyroid & Vitamin D Levels</Text>

                                </View>
                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:"column",marginTop:10}}>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  </Text>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > TSH  </Text>


                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Vitamin D </Text>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Actual </Text>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  3.51  </Text>

                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  28.97 </Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 25 }}/>
                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Normal Range  </Text>
                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (0.27-4.2)</Text>

                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 50)</Text>
                                        </View>
                                    </View>

                                </View>

                            </Card>
                        </Card>

                        <Card style={{width:DEVICE_WIDTH - 10}}>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly',backgroundColor:'#FFFFFF'}}>
                                <Text note style={{fontSize:16,textAlign:'left',marginTop:10,flex:2,color:'#000'}} >  Test Date</Text>
                                <Text note style={{fontSize:16,textAlign:'right',marginTop:10,flex:2,color:'#000'}} > 12/07/2018</Text>

                            </View>

                            <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                                borderTopLeftRadius:10,borderLeftWidth:10}}>

                                {/*<View style={{flexDirection:"row",marginTop:10}}>*/}
                                <View style={{justifyContent:'flex-start',marginBottom:20}}>
                                    <Text note style={{fontSize:14,textAlign:'center',color:'#000'}} >  Cholestrol Level</Text>

                                </View>
                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:"column",marginTop:35}}>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000',marginBottom:5}} > Tri Glycer  </Text>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000',marginBottom:8}} > Cholestrol </Text>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000',marginBottom:5}} > LDL </Text>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > HDL </Text>


                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            {/*<Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  </Text>*/}
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Actual </Text>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  277  </Text>

                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  105 </Text>

                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  27 </Text>

                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  23 </Text>
                                        </View>

                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly',marginTop: 10}}>

                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#F80617" style = {{marginTop: 25 }}/>
                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Normal Range  </Text>

                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 150)</Text>
                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 200)</Text>
                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 100)</Text>
                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (40-60)</Text>
                                        </View>
                                    </View>


                                </View>

                            </Card>


                            <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                                borderTopLeftRadius:10,borderLeftWidth:10}}>

                                {/*<View style={{flexDirection:"row",marginTop:10}}>*/}
                                <View style={{justifyContent:'flex-start',marginBottom:20}}>
                                    <Text note style={{fontSize:14,textAlign:'center',color:'#000'}} >  Thyroid & Vitamin D Levels</Text>

                                </View>
                                <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                    <View style={{flexDirection:"column",marginTop:10}}>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  </Text>
                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > TSH  </Text>


                                        <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Vitamin D </Text>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Actual </Text>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  3.51  </Text>

                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} >  28.97 </Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 25 }}/>
                                            <Iccon type='FontAwesome' name='flag-o' size={22} color="#16FF1C" style = {{marginTop: 5 }}/>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                            <Text note style={{fontSize:14,textAlign:'left',color:'#000'}} > Normal Range  </Text>
                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (0.27-4.2)</Text>

                                            <Text note style={{fontSize:10,textAlign:'left',color:'#000'}} >  (less than 50)</Text>
                                        </View>
                                    </View>

                                </View>

                            </Card>
                        </Card>

                    </ScrollView>
                    {/*{*/}
                        {/*// Here the ? Question Mark represent the ternary operator.*/}
                        {/*//style={{backgroundColor:'#FFFFFF',width:width-220}}*/}
                        {/*this.state.loading ?  <ActivityIndicator color = '#2eacde'*/}
                                                                 {/*size = "large" style={{padding: 20}} /> : null*/}
                    {/*}*/}

                        {/*</ScrollView>*/}
                    <Dialog
                        visible={this.state.showDialog}
                        title="Ticket Details"
                        onTouchOutside={() => this.openDialog(false)}
                        contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                        animationType="fade">
                        <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                            <TouchableOpacity  style={{width:280,justifyContent:'flex-end'}}
                                               onPress={this.onTestNameShowpicker}>
                                {/*<Text>Select Country: {this.state.picked}</Text>*/}
                                <TextField label="Enter Test Type Here"
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
                                options={options}
                                optionTextStyle={style={fontSize:16}}
                            />
                            <View style={{flexDirection:'row',justifyContent:'space-evenly',height:50}}>
                                <TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>
                                    <View style={{flexDirection:"row",justifyContent:'flex-start',marginTop:10}}>

                                        <TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>
                                            <Image source={require('../Images/calendar_icon.png')} style={{height: 25, width: 25,marginLeft:18}}
                                            />
                                        </TouchableOpacity>
                                        <Text note style={{fontSize:18,color:'#000'}}
                                              onPress={this._showDateTimePicker}> {
                                            Moment(this.state.date).format('DD MMM YYYY')} </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this._showDateTimePicker} style={{alignItems:'center'}}>
                                    <DateTimePicker
                                        isVisible={this.state.isDateTimePickerVisible}
                                        mode={'date'}
                                        minimumDate={Moment().toDate()}
                                        onConfirm={this._handleDatePicked}
                                        onCancel={this._hideDateTimePicker}
                                    />


                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        borderWidth:1,
                                        borderColor:'rgba(0,0,0,0.2)',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        width:35,
                                        height:35,
                                        backgroundColor:'#071398',
                                        borderRadius:100,
                                    }}
                                    onPress={() => {this.onsearchButtonPress(), (this.openDialog(false))}}
                                >
                                    {/*<Text style={{fontWeight: "bold",fontSize:16,color:'#de68cd',flex:2*/}
                                        {/*,textAlign:'center'}}>Edit</Text>*/}
                                    <Icons type='FontAwesome' name='search' size={20} color="#FFFFFF"/>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <Button transparent style={{height: 25,width:width-880,backgroundColor: '#FFFFFF',marginBottom:10
                        }}
                                onPress={() => {(this.openDialog(false)),Actions.homeScreen()}} >
                            <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde',flex:2
                                ,textAlign:'center'}}>Close</Text>
                        </Button>
                    </Dialog>

                </View>


                <Fab
                    // active={this.state.active}
                    active={!this.state.active}
                    direction="up"
                    containerStyle={{position:'absolute',bottom:60}}
                    style={{ backgroundColor: '#071398' }}
                    position="bottomRight"
                    // onPress={this.onButtonPress}
                    onPress={() => this.setState({ active: !this.state.active })}
                >
                    {/*<Image  source={require('../Images/menu_symbol.png')} />*/}
                    <Icons type='FontAwesome' name='hand-o-up' size={30} color="#FFFFFF"/>
                    <Button style={{ backgroundColor: '#071398' }}
                            onPress={() => {(this.openDialog(true))}}>
                        <Icons type='FontAwesome' name='search' size={30} color="#FFFFFF"/>
                    </Button>
                    <Button style={{ backgroundColor: '#071398' }}
                            onPress={this.onplusButtonPress}>
                        <Icons type='FontAwesome' name='plus' size={30} color="#FFFFFF"/>
                    </Button>
                    <Button disabled style={{ backgroundColor: '#071398' }}>
                        <Icons type='FontAwesome' name='share-alt' size={30} color="#FFFFFF"/>
                    </Button>

                </Fab>
                {/*<View style={{flex:1, backgroundColor: '#f3f3f3'}}>*/}
                    {/* Rest of the app comes ABOVE the action button component !*/}
                    {/*<ActionButton buttonColor="rgba(231,76,60,1)" style={{position:'absolute',bottom:40}}>*/}
                        {/*<ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>*/}
                            {/*<Icon name="md-create" style={styles.actionButtonIcon} />*/}
                        {/*</ActionButton.Item>*/}
                        {/*<ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>*/}
                            {/*<Icon name="md-notifications-off" style={styles.actionButtonIcon} />*/}
                        {/*</ActionButton.Item>*/}
                        {/*<ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>*/}
                            {/*<Icon name="md-done-all" style={styles.actionButtonIcon} />*/}
                        {/*</ActionButton.Item>*/}
                    {/*</ActionButton>*/}
                {/*</View>*/}
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
    }
});