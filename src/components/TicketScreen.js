import React, { Component } from 'react';
import { Image,StyleSheet,TouchableOpacity,AsyncStorage,LayoutAnimation,BackHandler,
    Dimensions,ScrollView,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Picker,DeckSwiper, Text,Item,Input,View,Fab, Button, Left, Body, Right,
    Footer, FooterTab} from 'native-base';

import BottomNavigation, {
    ShiftingTab
} from 'react-native-material-bottom-navigation'
import Snackbar from 'react-native-snackbar';
import { Dropdown } from 'react-native-material-dropdown';
import ToggleSwitch from 'toggle-switch-react-native';
import { Dialog } from 'react-native-simple-dialogs';
import { Actions } from 'react-native-router-flux'; // 4.0.0-beta.31
import SmartPicker from 'react-native-smart-picker'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Iccon from 'react-native-vector-icons/MaterialIcons';
import Iccons from 'react-native-vector-icons/Foundation'
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const MARGIN = 40;
// import { BottomNavigation } from 'react-native-material-ui';
import Moment from "moment/moment";
import Toast from "react-native-simple-toast";
var dialogticketarr = [];
import ActionButton from 'react-native-action-button';
const card      = {card: {width: 100,height:300,borderWidth: 3,
        borderRadius: 3,
        borderColor: '#FFFFFF',
        padding: 10}};
const cardItem = {cardItem: {fontSize: 40}};
var ticketdata=[];
var cardListArr;
var ticketobj;
var ticketkeys;
var ticketListArr;
var savefavticket=[];
var favourites= {mobile: "9999988888",stops:[],routes:[]};
export default class TicketScreen extends Component {

    constructor(props) {
        super(props);
        // this.state= {
        //     activeTab: 'ticket',
        //     thisticket : [],
        // };


        this.state = {
            thisticket: [],
            activeTab: 'ticket',
            thiscard: [],
            ticketdialogindex: 0,
            favorite: [],
        };


    }

    // componentWillUpdate() {
    //     LayoutAnimation.easeInEaseOut();
    // }
    tabs = [
        {
            key:"home",
            // icon={<Image source={require('../Images/home_icon.png')} color="#2eacde" name="Search" style={{ width: 20, height: 20 }} />}
            label:"Home",
            icon : 'home',
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"favourite",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'star' ,
            label:"Favourite",
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"track",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'location-on' ,
            label:"Track",
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"ticket",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon :'receipt' ,
            label:"Ticket",
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key:"more",
            // icon={<Image source={require('../Images/route.png')}color="#669999" name="trips" style={{ width: 20, height: 20 }} />}
            icon : 'menu' ,
            label:"More",
            barColor: '#2eacde',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    state = {}

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    _handleTabPress(pressedKey) {
        switch (pressedKey) {
            case 'home':
                Actions.homeScreen();
                break;
            case 'favourite':
                Actions.homeScreen();
                // {this.buttonPress}
                this.setState({viewSection:!this.state.viewSection});
                //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                // {this.renderBottomComponent()}
                break;
            case 'track':
                Actions.tripScreen();
                //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                break;
            case 'ticket':
                // Actions.ticketScreen();
                break;
            case 'more':
                Actions.moreScreen();
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
                break;
            default:

        }
    }
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

    async componentDidMount() {
        await AsyncStorage.getItem('ticket')
            .then((ticket) => {
                ticketdata = ticket ? JSON.parse(ticket).reverse() : [];
                // Toast.show(ticketdata[0].From, Toast.LONG);
                // alert("ticketdata: " + JSON.stringify(ticketdata) +" after navigating back: " + JSON.stringify(JSON.parse(ticket).reverse()) );
                // this.setState({thisticket: JSON.parse(JSON.stringify(ticketdata))});
                // alert("ticketdata: " + JSON.stringify(this.state.thisticket) +" after navigating back: " +JSON.stringify(JSON.parse(JSON.stringify(ticketdata))) );

                const favcopy = [...this.state.favorite];

                for(let h=0;h<ticketdata.length;h++) {
                    favcopy.push(ticketdata[h].isFavourite);
                }
                this.setState({favorite:favcopy});

                BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);;
            }).done();
    }

    // async componentWillUnmount() {
    //     await AsyncStorage.setItem('ticket', JSON.stringify(ticketdata.reverse()));
    // }


    savefavourites(recieveindex) {
        try {
            // this.setState({favorite[recieveindex]: true});
            const copied = [...this.state.favorite];
            copied[recieveindex] = !copied[recieveindex] ;
            this.setState({ favorite: copied });
            // AsyncStorage.getItem('ticket')
            //     .then((ticket) => {
            //         savefavticket = ticket ? JSON.parse(ticket).reverse() : [];
                    // Toast.show("tickets " +c ,Toast.LONG);
                if(copied[recieveindex]) {
                    // alert("add index " + recieveindex + " from: " + ticketdata[recieveindex].From +
                    //     " to: " +ticketdata[recieveindex].To);


                    favourites.stops.includes(ticketdata[recieveindex].From) ?
                        Snackbar.show({
                        title: 'Favourite stops already Exists!',
                        duration: Snackbar.LENGTH_SHORT,
                    })
                    : favourites.stops.push(ticketdata[recieveindex].From);
                    favourites.stops.includes(ticketdata[recieveindex].To) ? '': favourites.stops.push(ticketdata[recieveindex].To);

                    let routefound=false;

                     favourites.routes.map( (favroute, ridx) => {
                        if ((favroute.from === ticketdata[recieveindex].From) &&
                            (favroute.to === ticketdata[recieveindex].To)) {

                            routefound=true;
                        }
                    });
                    // alert(routefound);

                    routefound ? '' : favourites.routes.push({from: ticketdata[recieveindex].From, to: ticketdata[recieveindex].To});


                    Snackbar.show({
                        title: 'Favourite added Successfully',
                        duration: Snackbar.LENGTH_SHORT,
                    })

                }
                else{
                    // alert("pop index " + recieveindex + " from: " + ticketdata[recieveindex].From +
                    //     " to: " +ticketdata[recieveindex].To);

                    let fidx = favourites.stops.indexOf(ticketdata[recieveindex].From);
                    if(fidx > -1) {
                        favourites.stops.splice(fidx,1);
                    }

                    let tidx = favourites.stops.indexOf(ticketdata[recieveindex].To);
                    if(tidx > -1) {
                        favourites.stops.splice(tidx,1);
                    }

                    favourites.routes.filter( (favroute, ridx) => {
                        if ((favroute.from === ticketdata[recieveindex].From) &&
                            (favroute.to === ticketdata[recieveindex].To)) {
                            favourites.routes.splice(ridx,1);
                        }
                    });

                    Snackbar.show({
                        title: 'Favourite removed Successfully',
                        duration: Snackbar.LENGTH_SHORT,
                    })

                    // favourites.deleteElem = function ( val ) {
                    //     for ( var i = 0; i < this.length; i++ ) {
                    //         if ( this[i] === val ) {
                    //             this.splice( i, 1 );
                    //             return i;
                    //         }
                    //     }
                    // };
                }
                    // savefavticket[recieveindex].push(favourites);
            ticketdata[recieveindex].isFavourite = copied[recieveindex];
                    AsyncStorage.setItem('favs', JSON.stringify(favourites));
                // });

            // const ticketcopy = [...this.state.thisticket];
            // ticketdata[recieveindex].isFavourite = copied[recieveindex];
            // this.setState({thisticket: ticketcopy});

            AsyncStorage.setItem('ticket', JSON.stringify(JSON.parse(JSON.stringify(ticketdata)).reverse()));
            // alert("value"+JSON.stringify(favourites));
            AsyncStorage.getItem('favs')
                .then((favs) => {
                    // alert("ticket after udpate: " + favs);
                });
        }catch(error) {
            alert(error)
        }
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton = () => {
        Actions.homeScreen();
        // Alert.alert(
        //     'Exit App',
        //     'Exiting the application?', [{
        //         text: 'Cancel',
        //         onPress: () => console.log('Cancel Pressed'),
        //         style: 'cancel'
        //     }, {
        //         text: 'OK',
        //         onPress: () => BackHandler.exitApp()
        //     }, ]
        //     , {
        //         cancelable: false
        //     }
        // );
        return true;
    };




    render() {
        AsyncStorage.getItem('ticket')
            .then((ticket) => {
                ticketdata = ticket ? JSON.parse(ticket).reverse() : [];
            }).done();

        dialogticketarr = ticketdata.map((AllTicket,index)=>{
            ticketkeys=Object.keys(AllTicket);

            if(this.state.ticketdialogindex === index){

                return (
                    <Dialog
                        visible={this.state.showDialog}
                        title="SmarTran Ticket"
                        onTouchOutside={() => this.openDialog(false)}
                        contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                        animationType="fade">

                        {/*<View style={{flexDirection:"row",justifyContent:'space-evenly'}}>*/}
                        {/*<Text  style={{marginTop:20,fontSize:18,color:'#000',fontWeight:'bold',*/}
                        {/*}} >SmarTran Ticket*/}
                        {/*</Text>*/}
                        {/*</View>*/}
                        <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                            <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                {/*<Text note style={{*/}
                                {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                                {/*}}>{ticketkeys[0]  }</Text>*/}
                                {/*<Text note style={{*/}
                                    {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                                {/*}}>{ticketkeys[0] }</Text>*/}
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{ticketkeys[1] }</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{ticketkeys[2] }</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{ticketkeys[3]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{ticketkeys[4]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{ticketkeys[5]}</Text>
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{ticketkeys[6]}</Text>
                                {/*<Text note style={{*/}
                                {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                                {/*}}>{ticketkeys[5]}</Text>*/}
                                {/*<Text note style={{*/}
                                {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                                {/*}}>{ticketkeys[6]}</Text>*/}
                                <Text note style={{
                                    marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                }}>{ticketkeys[7] }</Text>
                                {/*{this.setState((({thiscard: cardInfo}), ticketListArr))}*/}
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                                <View style={{flexDirection:"column",justifyContent:'space-evenly'}}>
                                    {/*<Text note style={{*/}
                                    {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                                    {/*}}>{":" + AllTicket[ticketkeys[0]]}</Text>*/}
                                    {/*<Text note style={{*/}
                                        {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                                    {/*}}>{":" + AllTicket[ticketkeys[0]]}</Text>*/}
                                    <Text note style={{
                                        marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                    }}>{":" + AllTicket[ticketkeys[1]]}</Text>
                                    <Text note style={{
                                        marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                    }}>{":" + AllTicket[ticketkeys[2]]}</Text>
                                    <Text note style={{
                                        marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                    }}>{":\u20B9" + AllTicket[ticketkeys[3]]}/-</Text>
                                    <Text note style={{
                                        marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                    }}>{"    :  " + AllTicket[ticketkeys[4]]}</Text>
                                    <Text note style={{
                                        marginTop: 5, fontSize: 14, color: '#53b73a', justifyContent: 'flex-start'
                                    }}>{":" + AllTicket[ticketkeys[5]]}</Text>
                                    <Text note style={{
                                        marginTop: 5, fontSize: 14, color: '#ff0000', justifyContent: 'flex-start'
                                    }}>{":" + AllTicket[ticketkeys[6]]}</Text>
                                    {/*<Text note style={{*/}
                                    {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                                    {/*}}>{":" + AllTicket[ticketkeys[5]]}</Text>*/}
                                    {/*<Text note style={{*/}
                                    {/*marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'*/}
                                    {/*}}>{":" + AllTicket[ticketkeys[6]]}</Text>*/}
                                    <Text note style={{
                                        marginTop: 5, fontSize: 14, color: '#000', justifyContent: 'flex-start'
                                    }}>{":" + AllTicket[ticketkeys[7]]}</Text>
                                    {/*{this.setState((({thiscard: cardInfo}), ticketListArr))}*/}
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                            <Image source={require('../Images/qr_code.png')} style={{marginTop:20,marginBottom:20,height: 80, width: 80,alignItems:'center'}}/>
                        </View>
                        {/*<Text note style={{textAlign:'center',color:'#000',marginTop:10,marginBottom:20,fontSize:14,fontStyle:'italic',justifyContent: 'flex-start'*/}
                        {/*}} >Valid for one trip on {AllTicket[ticketkeys[1]]} only{"\n"}{"\n"}{"\n"}*/}
                        {/*</Text>*/}

                        <Button transparent style={{height: 25,width:width-880,backgroundColor: '#FFFFFF',marginBottom:10
                        }}
                                onPress={() => {(this.openDialog(false)),Actions.ticketScreen()}} >
                            <Text style={{fontWeight: "bold",fontSize:16,color:'#2eacde',flex:2
                                ,textAlign:'center'}}>Close</Text>
                        </Button>

                        {/*<Button onPress={() => this.openDialog(false)}  title="CLOSE" />*/}
                    </Dialog>
                )};
        });


        cardListArr = ticketdata.map((AllTicket,index)=>{
            ticketkeys=Object.keys(AllTicket);
            let cardlistlen = ticketdata.length;

            AllTicket.isFavourite = this.state.favorite[index];

            return(
                <View style={{  paddingRight:25,
                    paddingLeft:35,
                    paddingTop:5,}}>

                    <Card style={{borderRightWidth:10,borderBottomRightRadius:10,borderTopRightRadius:10,borderBottomLeftRadius:10,
                        borderTopLeftRadius:10,borderLeftWidth:10,shadowColor:"#f1f1f1f1",borderColor:'#2eacde'}}>

                        <TouchableOpacity  onPress={() => {
                            this.setState({ ticketdialogindex: index }),
                                (this.openDialog(true))}}>
                            <View style={{flexDirection:'row',flex:5}}>
                        <Text note style={{textDecorationLine: 'underline',marginLeft:10,
                            marginTop: 2, fontSize: 14, color: '#000', textAlign:'left', alignItems:'flex-start'
                        }}>{AllTicket[ticketkeys[1]]}</Text>
                            <TouchableOpacity  style={{flex:1,alignItems:'flex-end'}} >
                                {/*<View style={{flex:15,alignItems:'flex-end'}}>*/}
                                <Iccon type='MaterialIcons' name={this.state.favorite[index] ?'star':'star-border'} size={22} color={this.state.favorite[index] ? '#2eacde' :"#2eacde"}
                                       onPress={() =>{this.savefavourites(index)}}/>
                                {/*</View>*/}
                            </TouchableOpacity>
                            </View>
                        <View style={{flexDirection:"column",justifyContent:'space-evenly',marginBottom:10,backgroundColor:'#FFFFFF'}}>
                            {/*<Image source={require('../Images/smartranlogo.png')} style={{height: 200, width: null, flex: 1}}/>*/}
                            <Text note style={{
                                marginTop: 5, fontSize: 14, color: '#000', textAlign:'center'
                            }}>{AllTicket[ticketkeys[5]]}</Text>
                            <Text  style={{textAlign:'center',fontSize:16,color:'#000',marginTop:10}} > To
                            </Text>
                            {/*<Image source={require('../Images/right_arrow.png')} style = {{ width: 25, height: 25,alignItems:'center',marginTop:10 }}/>*/}
                            <Text note style={{
                                marginTop: 5, fontSize: 14, color: '#000', textAlign:'center'
                            }}>{AllTicket[ticketkeys[6]]}
                            {(index === (cardlistlen-1))
                                ? <Text>{"\n"}{"\n"}{"\n"}</Text>
                                : ''
                            }
                            </Text>
                        </View>
                        </TouchableOpacity>
                    </Card>


                </View>
                // ));
            );
        });

        return (

            <View style={styles.container}>
                <ScrollView ref={ (c) => {this.scroll = c}} >
                    {/*style={{ flexGrow: 0.05, backgroundColor: '#FFFFFF'}} */}
                    <View style={{flexDirection:"row",backgroundColor:'#4d6bcb',paddingRight:10,
                        paddingLeft:10,}}>
                        <TouchableOpacity onPress={() => Actions.homeScreen()} >
                            {/*<Image source={require('../Images/back_arrow.png')} style={{height: 30, width: 30,*/}
                            {/*color:'#FFFFFF',marginTop:5, flex:1}}*/}
                            {/*/>*/}
                            <Icon type='MaterialIcons' name='arrow-back' size={30} color="#FFFFFF"/>
                        </TouchableOpacity>
                        <Text note style={{marginTop:5,fontSize:16,textAlign:'center',color:'#FFFFFF', flex:5}} >Ticket Details </Text>
                        <Text note style={{marginTop:5,fontSize:12,textAlign:'right',color:'#FFFFFF', flex:1}} > </Text>

                    </View>

                    <View>
                        {cardListArr}
                        {dialogticketarr}
                    </View>
                </ScrollView>

                <Fab
                    // active={this.state.active}
                    direction="up"
                    containerStyle={{position:'absolute',bottom:50}}
                    style={{ backgroundColor: '#2CA8DB' }}
                    position="bottomRight"
                    onPress={this.onButtonPress}>
                    {/*<Image  source={require('../Images/menu_symbol.png')} />*/}
                    <Icons type='SimpleLineIcons' name='arrow-up' size={30} color="#FFFFFF"/>
                </Fab>

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

    onButtonPress = () => {
        this.scroll.scrollTo({x:0, y:0, animated:true});
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#4d6bcb',
    },
    headerview: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#2eacde',
        position: 'absolute',
        paddingRight:25,
        paddingLeft:35,
        paddingTop:34,
        backgroundColor:'#4d6bcb',
        left: 0,
        right: 0,


    },
    headerview1: {
        // height: 250,
        //borderRadius:25,
        // borderWidth:5,
        // borderColor:'#2eacde',
        position: 'absolute',
        paddingRight:5,
        paddingLeft:5,
        paddingTop:0,
        backgroundColor:'#4d6bcb',
        left: 0,
        right: 0,


    },
    content1: {
        // backgroundColor:'#FFFFFF',
        marginTop: 385,

    },
    footer: {
        height: 50,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,

        // backgroundColor: '#8BC34A'
    },
    box: {

        backgroundColor: '#4d6bcb',
        // color:'#FFFFFF',
        // marginBottom: 5,
        marginRight:5,
        marginLeft:5,

    }
});