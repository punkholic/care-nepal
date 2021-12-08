import React,{useState, useEffect} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import InputField from '../components/InputField'
import Space from '../components/Space'
import DropDown from '../components/DropDown'
import Button from '../components/Button'
import Donar from '../components/Donar'
import selfMade from '../api/selfMade'
import { Icon } from 'react-native-elements'
import NavBar from '../components/NavBar'


const PlasmaScreen = ({navigation}) => {
    const [plasmaData, updatePlasmaData]= useState([]);
    const [bloodType, updateBloodType]= useState({});
    const [location, updateLocation]= useState('');
    useEffect(() => {
        selfMade.get('/plasma').then((e) => updatePlasmaData(e.data)).catch(e => console.log(e))
    }, []);
    const blood_data= ["A-","A+","B-","B+", "AB+", "AB-", "O+", "O-"];

    return (
        <>
        <NavBar onClick={() => navigation.openDrawer()}/>
        <ScrollView>
            <View style={styles.backgroundView}>
                <Text style={styles.backgroundViewText}>Care Nepal</Text>
            </View>
            <View style={styles.frontgroundView}>
                <Text style={styles.frontgroundViewText}>Find a Plasma Donor</Text>
                 <Space marginBottom={40}/>
                <InputField onChange={(text) => updateLocation(text)} placeholder="Enter Your Place" color="#ccc"/>
                <Space marginBottom={20}/>
                <DropDown
                textToShow={"Select Plasma Group"}
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
                onChange={(e) => {
                  updateBloodType(e)
                } } toShow="Select Plasma Group"/>
                <Space marginBottom={20}/>
                <Button text="Search" onClick={() => {
                    selfMade.get('/plasma').then((e) => {
                        console.log(e.data)
                        let myData = e.data.filter((e) => {
                            console.log(e.blood_group, bloodType.label)
                            return blood_data[e.blood_group] == bloodType.label && e.location == location
                        })
                        updatePlasmaData(myData)
                    }).catch(e => console.log(e))


                }} color="yellow" size={20}/>
            </View>
            <View style={styles.recentDonarView}>
                <Text style={styles.recentDonarText}>Recent Donars</Text>
                <View style={styles.donarContact}>
                    {plasmaData.length !== 0 ? plasmaData.map((e) => {
                        return <>
                        <Space marginBottom={20}/>
                        <Donar phone={`${e.mobile_number}`} location={`${e.location}`} name={`${e.firstname} ${e.lastname}`} bloodGroup={blood_data[e.blood_group]} color="yellow"/>
                        </>

                    }) : null}
                </View>
            </View>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    backgroundView: {
        height: 320,
        width: '90%',
        backgroundColor: 'yellow',
        margin: 20,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        marginBottom: 150
    },
    backgroundViewText:{
        fontSize: 40,
        fontWeight: "700",
        color: 'white',
        alignSelf: 'center',
        top: 20
    },
    frontgroundView:{
        position: 'absolute',
        elevation: 9,
        height: 350,
        width: '80%',
        top: 130,
        left: 40,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    frontgroundViewText: {
        fontSize: 22,
        fontWeight: "700",
        color: 'black',
        alignSelf: 'center',
        marginTop: 20
    },
    recentDonarView: {
        borderRadius: 30,
        backgroundColor:'white',
        height: 250,
        elevation: 8,
        width: '80%',
        marginTop: 10,
        marginLeft: 40,
        marginBottom: 50,
    },
    recentDonarText: {
        fontSize: 18,
        left: 10,
        fontWeight: "700",
        color: 'black',
        marginTop: 20
    },
    donarContact: {
        left: 20
    }
})
export default PlasmaScreen;