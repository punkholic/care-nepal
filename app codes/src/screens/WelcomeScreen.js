import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Text} from 'react-native-elements'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = ({navigation}) => {
    return (
        <View>
            <StatusBar style="auto" />
            <Logo/>
            <Text style={styles.name}>Care Nepal</Text>
            <Text style={styles.slogan}>Your safety is everything to us.</Text>
            <Button text="Get Started" onClick={() => {navigation.navigate('Login');}} color="blue"/>
        </View>
    )
}
const styles = StyleSheet.create({
    name: {
        color: 'blue',
        fontSize: 45,
        alignSelf: 'center',
        marginBottom: 20,
        fontWeight: '100'
    },
    slogan: {
        color: 'blue',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 150
    },
})

export default WelcomeScreen