import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
const NavBar = ({onClick}) => {
    return (
        <View style={styles.navigationBar}>
            <TouchableOpacity onPress={onClick}>
                <Icon name="bars" type='antdesign' size={60} color="#89d7ee" />
            </TouchableOpacity>
        </View>
    )
}
let styles = StyleSheet.create({
    navigationBar: {
        backgroundColor: 'white',
        marginTop: 40,
        height: 60,
        flexDirection: 'row'
    },
    navigationText: {
        marginTop: 15,
        fontSize: 20,
        marginLeft: '30%',
        fontWeight: 'bold'
    },
    navigationIcon: {
        marginTop: 20,

    }
})
export default NavBar