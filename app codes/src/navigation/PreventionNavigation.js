import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PreventionScreen from '../screens/PreventionScreen';
import PreventiveScreen from '../screens/PreventiveScreen';

const navigator = createStackNavigator ({
    Prevention: {
        screen: PreventionScreen, 
        navigationOptions: {
            header: null,
        },
    },
    Preventive: {
        screen: PreventiveScreen, 
        navigationOptions: {
            header: null,
        },
    },
},{
  initialRouteName: 'Prevention',
})

const App = createAppContainer(navigator)

export default () => <App/>
