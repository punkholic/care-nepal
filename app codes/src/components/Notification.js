import React from 'react'
import {StyleSheet, View} from 'react-native'

const Notification = ({children}) => {
    return (
        <View>
            <View style={{backgroundColor:"black", height: "5%", opacity: 0.2}}></View>
            <View style={styles.container}>
                {children}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        top: "7%"
    },
})

export default Notification