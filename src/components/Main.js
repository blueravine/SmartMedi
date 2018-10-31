import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import SplashScreen from './SplashScreen';
import Home from './Home';
import UserProfile from './UserProfile';
import AddTestData from './AddTestData';
import TrendScreen from './TrendScreen';
import AlertScreen from './AlertScreen';
import AddEventScreen from './AddEventScreen';
import Registration from './Registration';
import OTPScreen from './OTPScreen';
import Login from './Login';
export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">

              <Scene key="splashScreen"
                     component={SplashScreen}
                     animation='fade'
                     hideNavBar={true}
                     initial={true}
              />
	<Scene key="registerScreen"
				 component={Registration}
				 animation='fade'
				 hideNavBar={true}
			/>
      	 <Scene key="otpScreen"
				 component={OTPScreen}
				 animation='fade'
				 hideNavBar={true}
			/>
      	<Scene key="loginScreen"
				 component={Login}
				 animation='fade'
				 hideNavBar={true}
			/> 

			<Scene key="homeScreen"
				 component={Home}
				 animation='fade'
				 hideNavBar={true}
			/>

              <Scene key="profileScreen"
                     component={UserProfile}
                     animation='fade'
                     hideNavBar={true}
              />

              <Scene key="addtestScreen"
                     component={AddTestData}
                     animation='fade'
                     hideNavBar={true}
              />

              <Scene key="trendScreen"
                     component={TrendScreen}
                     animation='fade'
                     hideNavBar={true}
              />

              <Scene key="alertScreen"
                     component={AlertScreen}
                     animation='fade'
                     hideNavBar={true}
              />
              <Scene key="addeventScreen"
                     component={AddEventScreen}
                     animation='fade'
                     hideNavBar={true}
              />

		  </Scene>




	    </Router>
	  );
	}
}