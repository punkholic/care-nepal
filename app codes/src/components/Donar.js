import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import {Linking} from 'react-native'

const Donar = ({name, bloodGroup, location, color, phone}) => {
    console.log(color)
    return (
        <View style={styles.container}>
            <View style={{
                width: 70,
                height: 70,
                elevation: 5,
                backgroundColor: `${color}`,
                borderRadius: 10
                }}>
                <Text style={styles.bloodTypeText}>{bloodGroup}</Text>
            </View>
            <View style={styles.personalInfo}>
                <Text style={styles.username}>{name}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
                <Icon style={styles.phoneIcon} name="phone" size={20} color="#000"/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    bloodTypeText: {
        alignSelf: 'center',
        top: 18,
        color: 'black',
        fontSize: 20,
    },
    container: {
        flexDirection: 'row',
    },
    personalInfo: {
        flexDirection: 'column',
        marginLeft: 10,
        top: 10
    },
    username: {
        fontSize: 15,
        marginBottom: 5,
    },
    location: {
        fontSize: 12,
    },
    phoneIcon: {
        marginTop: 10,
        marginLeft:10
    }
})

export default Donar