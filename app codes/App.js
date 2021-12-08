import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import PreventionScreen from './src/screens/PreventionScreen';
import MainScreen from './src/navigation/MainScreen'

PreventionScreen
const navigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Register: RegistrationScreen,
  Covid: {
    screen: MainScreen, 
    navigationOptions: {
        header: null,
    },
},
},{
  initialRouteName: 'Welcome',
})
const App = createAppContainer(navigator)

export default () => <App/>
