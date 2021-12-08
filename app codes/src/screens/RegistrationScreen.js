import React,{useState, useEffect} from 'react'
import {StyleSheet, View, ScrollView, Text, Alert} from 'react-native'
import InputField from '../components/InputField'
import Space from '../components/Space'
import DropDown from '../components/DropDown'
import RadioButton from '../components/RadioButton'
import Button from '../components/Button'
import DatePicker from 'react-native-datepicker'
import { StatusBar } from 'expo-status-bar';
import selfMade from '../api/selfMade'
import { Icon } from 'react-native-elements'

const RegistrationScreen = ({navigation}) => {
    const [date, updateDate] = useState('2020-05-15')
    const [firstName, updateFirstName] = useState('')
    const [lastName, updateLastName] = useState('')
    const [emailAddress, updateEmailAddress] = useState('')
    const [bloodGroup, updateBloodGroup] = useState('')
    const [place, updatePlace] = useState('')
    const [gender, updateGender] = useState('')
    const [bloodType, updateBloodType] = useState('')
    const [password, updatePassword] = useState('')
    const [mobileNumber, updateMobileNumber] = useState('')
    const [locations, updateLocations] = useState([]);
    const toStore = [];
    let hidden=true;
    locations.map((e) => {
        toStore.push({label: e, value: e, icon: () => <Icon name="flag" size={18} color="#900" />, hidden: hidden });
        hidden=false;
    })
    useEffect(() => {
        selfMade.get("/places").then((e) => {
            updateLocations(e.data)
        }).catch((e) => console.error(e))
    },[])
    return (
        <ScrollView style={{marginTop:35}}>
            <StatusBar style="auto" />
            <View style={styles.heading}>
                <Text style={styles.headingText}>Complete Registration</Text>
            </View>
            <Space marginBottom={15}/>
            <InputField onChange={(text) => updateFirstName(text)} placeholder="First Name" icon="contacts"/>
            <Space marginBottom={15}/>
            <InputField onChange={(text) => updateLastName(text)} placeholder="Last Name" icon="contacts"/>
            <Space marginBottom={15}/>
            <InputField onChange={(text) => updateEmailAddress(text)} placeholder="Email Address" icon="mail"/>
            <Space marginBottom={15}/>
            <InputField onChange={(text) => updatePassword(text)} placeholder="Password" isPassword={true} icon="lock"/>
            <Space marginBottom={15}/>
            <DropDown 
            textToShow={"Select a place"}
            listData={toStore}
            onChange={(item) => updatePlace(item.value)} toShow="Select Place"/>
            <Space marginBottom={15}/>
            <DropDown 
            textToShow={"Select Blood Group"}
            listData={
                    [
                        {label: 'A+', value: 'A+', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
                        {label: 'B+', value: 'B+', icon: () => <Icon name="flag" size={18} color="#900" />},
                        {label: 'O+', value: 'O+', icon: () => <Icon name="flag" size={18} color="#900" />},
                        {label: 'AB+', value: 'AB+', icon: () => <Icon name="flag" size={18} color="#900" />},
                        {label: 'A-', value: 'A-', icon: () => <Icon name="flag" size={18} color="#900" />},
                        {label: 'B-', value: 'B-', icon: () => <Icon name="flag" size={18} color="#900" />},
                        {label: 'O-', value: 'O-', icon: () => <Icon name="flag" size={18} color="#900" />},
                        {label: 'AB-', value: 'AB-', icon: () => <Icon name="flag" size={18} color="#900" />},
                    ]
                }
            onChange={(item) => updateBloodGroup(item.value)} toShow="Blood Group"/>
            <Space marginBottom={15}/>
            <DropDown 
            textToShow={"Select Blood Type"}
            listData={
                    [
                        {label: 'Plasma', value: '1', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
                        {label: 'Blood', value: '0', icon: () => <Icon name="flag" size={18} color="#900" />},
                    ]
                }
                
            onChange={(item) => updateBloodType(item.value)} toShow="Blood Type"/>
            <Space marginBottom={15}/>
            <InputField onChange={(text) => updateMobileNumber(text)} placeholder="Mobile Number" type="font-awesome" icon="phone" color="#ccc"/>
            <Space marginBottom={15}/>
            <RadioButton onPress={(text) => updateGender(text)} />
            <Space marginBottom={15}/>

                <DatePicker
                    style={{width:"90%", marginLeft: 25}}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => updateDate(date)}
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36,
                    }
                }}
            />
            <Space marginBottom={15}/>

            <Button onClick={() => {
                let data = {
                    'blood_id': 1,
                    'mobile_number': mobileNumber,
                    'location': place,
                    'blood_type': bloodType,
                    'firstname':firstName,
                    'lastname': lastName,
                    'email': emailAddress,
                    'password': password,
                    'gender': gender 
                }
                let a = selfMade.post('users', data).then((response) => {
                        navigation.navigate('Login');
                  }, (error) => {
                    Alert.alert("Error!!", "Invalid data passed")
                  });;
            }} text="Submit" color="#5700E1" size={20}/>
            <Space marginBottom={15}/>
        
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
    heading: {
        height: 100,
        backgroundColor: "#5700E1"
        
    },
    headingText:{
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 40
    }
})
RegistrationScreen.navigationOptions = {
    headerShown: false
}

export default RegistrationScreen