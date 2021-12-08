import React from 'react'
import {StyleSheet, View, Image } from 'react-native'

const Logo = () => {
    return <View style={styles.logoBackground}>
                    <Image style={styles.imageStyle} source={require('../../assets/nepal.png')}/>
                </View>
}
const styles = StyleSheet.create({
    logoBackground: {
        width: 250,
        height: 250,
        backgroundColor: '#0000ff',
        borderRadius: 200,
        marginLeft: "35%",
        left:40,
        bottom:42
    },
    imageStyle:{
        width:"100%",
        height: 120,
        marginTop: 70,
        right: 12,
        position:"absolute",
    }
    
})

export default Logo