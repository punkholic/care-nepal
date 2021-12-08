import React,{useState, useEffect} from 'react'
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native'
import {Text} from 'react-native-elements'
import Logo from '../components/Logo'
import Button from '../components/Button'
import InputField from '../components/InputField'
import Space from '../components/Space'
import { StatusBar } from 'expo-status-bar';
import selfMade from '../api/selfMade'

const LoginScreen = ({navigation}) => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [response, setResponse] = useState({});

    return (
        <View>
            <StatusBar style="auto" />
            <Logo/>
            <InputField onChange={(text) => setEmail(text)} placeholder="Email" icon="email"/>
            <Space marginBottom={15}/>
            <InputField onChange={(text) => setPassword(text)} isPassword={true} placeholder="Password" icon="lock"/>
            <TouchableOpacity>
                <Text style={styles.forgetPass}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button text="Login" onClick={() => {
                        navigation.navigate('Covid');

                let data = {
                    email, password
                };
                selfMade.post('/login', data).then((e) => {
                    if(e.data.status == 'success'){
                        navigation.navigate('Covid');
                    }else{
                        Alert.alert("Error!!", "Invalid username or password")
                    }
                }).catch((e) => Alert.alert("Error!!", "Server or Network Problem"));
                    
                }} color="blue"/>            
                <View style={styles.forgetPass}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Register');}}>
                        <Text style={{color:'blue'}}>Register</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputField: {
        marginBottom: 100
    },
    forgetPass: {
        flexDirection: 'row',
        color: 'gray',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
})

export default LoginScreen