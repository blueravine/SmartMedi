import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import SplashScreen from './SplashScreen';
import Home from './Home';
import UserProfile from './UserProfile';
import AddTestData from './AddTestData';


export default class Main extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">

              <Scene key="splshScreen"
                     component={SplashScreen}
                     animation='fade'
                     hideNavBar={true}
                     initial={true}
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

		  </Scene>




	    </Router>
	  );
	}
}