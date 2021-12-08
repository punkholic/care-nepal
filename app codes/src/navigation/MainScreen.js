import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import PlasmaScreen from '../screens/PlasmaScreen';
import BloodScreen from '../screens/BloodScreen';
import CovidScreen from '../screens/CovidScreen';
import HospitalScreen from '../screens/HospitalScreen';
import NewsScreen from '../screens/NewsScreen';
import PreventionScreen from '../screens/PreventionScreen';
import DiasasterScreen from '../screens/DiasasterScreen';
import FoodScreen from '../screens/FoodScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import PreventionNavigation  from '../navigation/PreventionNavigation';
import NewsNavigation  from '../navigation/NewsNavigation';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import {Text, View, StyleSheet} from 'react-native'

const MainScreen = ({navigation}) => {
  const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
            <Drawer.Navigator
            drawerContent={(props) => {
              return (
                <>
                <View style={styles.navHead}>
                  <View style={styles.headerContainer}>
                    <View style={styles.circle}></View>
                    <Text style={styles.name}>Bhasker Basnet</Text>
                    <Text style={styles.email}>bhaskerbasnet@gmail.com</Text>

                  </View>
                </View>
                <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
                </DrawerContentScrollView>
                  </>
              );
            }} initialRouteName="Covid">
              <Drawer.Screen name="Covid" component={CovidScreen} />
              <Drawer.Screen name="Blood" component={BloodScreen} />
              <Drawer.Screen name="Plasma" component={PlasmaScreen} />
              <Drawer.Screen name="Prevention" component={PreventionNavigation} />
              <Drawer.Screen name="News" component={NewsNavigation} />
              <Drawer.Screen name="Diasaster" component={DiasasterScreen} />
              <Drawer.Screen name="Food & Shelter" component={FoodScreen} />
              <Drawer.Screen name="Hospital" component={HospitalScreen} />
              <Drawer.Screen name="Emergency" component={EmergencyScreen} />
            </Drawer.Navigator>

          </NavigationContainer>
    )
}
const styles = StyleSheet.create({
  navHead:{
    backgroundColor: "#1cc4e7",
  },
  circle:{
    width: 100,
    marginTop: 35,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: '#1cF4eF'
  },
  name:{
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 18,
  },
  headerContainer: {
    left: 10
  },
  email:{
    color: 'white',
    marginBottom: 15
  },
})
export default MainScreen