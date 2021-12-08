import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewsScreen from '../screens/NewsScreen';
import WebNews from '../screens/WebNews';

const navigator = createStackNavigator ({
    News: {
        screen: NewsScreen,
        navigationOptions: {
            header: null,
        },
    },
    WebNews: {
        screen: WebNews, 
        navigationOptions: {
            header: null,
        },
    },
},{
  initialRouteName: 'News',
})

const App = createAppContainer(navigator)

export default () => <App/>
