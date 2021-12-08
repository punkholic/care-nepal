import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {Text} from 'react-native-elements'

const WelcomeScreen = ({onClick, color, text, size}) => {
    size = size == undefined ? 18 : size
    return (
            <TouchableOpacity onPress={onClick}>
                <View style={{
                    width: "70%",
                    paddingBottom:20,
                    alignSelf: 'center',
                    borderRadius: 20,
                    backgroundColor: color
                }}>
                    <Text style={{
                        color:'white',
                        alignSelf: 'center',
                        fontSize: size,
                        marginTop: 15
                    }}>{text}</Text>
                </View>
            </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonText: {
        
    },
})

export default WelcomeScreen