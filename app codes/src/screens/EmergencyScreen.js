import React from 'react'
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import Space from '../components/Space'
import Donar from '../components/Donar'
import NavBar from '../components/NavBar'

const EmergencyScreen = ({navigation}) => {
    return (
        <>
        <NavBar onClick={() => navigation.openDrawer()}/>
        <ScrollView>
            <View style={styles.recentDonarView}>
                <Text style={styles.recentDonarText}>Emergency Number</Text>
                <View style={styles.donarContact}>
                    <Space marginBottom={20}/>
                        <Donar phone="100" location="Police" name="Police" bloodGroup="P" color="#89d7ee"/>
                        <Space marginBottom={20}/>
                        <Donar phone="101" location="Fire Brigade" name="Fire Brigade" bloodGroup="FB" color="#89d7ee"/>
                        <Space marginBottom={20}/>
                        <Donar phone="102" location="Ambulance" name="Ambulance" bloodGroup="A" color="#89d7ee"/>
                        <Space marginBottom={20}/>
                        <Donar phone="103" location="Traffic Police" name="Traffic Police" bloodGroup="TP" color="#89d7ee"/>
                        <Space marginBottom={20}/>
                        <Donar phone="103" location="Traffic Police" name="Traffic Police" bloodGroup="TP" color="#89d7ee"/>
                        <Space marginBottom={20}/>
                        <Donar phone="105" location="Nepal Army" name="Nepal Army" bloodGroup="NA" color="#89d7ee"/>
                        <Space marginBottom={20}/>
                        <Donar phone="105" location="Military Police" name="Military Police" bloodGroup="MP" color="#89d7ee"/>
                        <Space marginBottom={20}/>
                </View>
            </View>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    recentDonarView: {
        borderRadius: 30,
        backgroundColor:'white',
        elevation: 8,
        width: '85%',
        marginTop: 10,
        marginLeft: 30,
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
export default EmergencyScreen;