import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

const PreventiveView = ({image, text}) => {
    return (
            <View style={styles.textContainer}>
                <Image style={styles.imageStyle} source={image} resizeMode="cover"/>
                <Text style={styles.textStyle}>{text}</Text>
            </View>

    )
}
const styles = StyleSheet.create({
    textContainer:{
        height: 350,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor:'#89d7ee',
        marginBottom: 20
    },
    textStyle: {
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
    imageStyle: {
        marginLeft: 10,
        width: 350,
        height: 200,
        borderRadius: 10
    }
})

export default PreventiveView