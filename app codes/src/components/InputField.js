import React,{useState} from 'react'
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

const InputField = ({placeholder, icon, color, isPassword, onChange}) => {
    color = color == undefined ? "#fff" : color
    const [show, updateShow] = useState(true)
    return (
            <View style={{
                    marginRight: 15,
                    marginLeft: 15,
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color,
                    borderRadius: 50,
                }}>
                <Icon style={styles.searchIcon} name={icon} size={20} color="#000"/>
                <TextInput
                secureTextEntry={isPassword && show}
                    style={{
                        flex: 8,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 0,
                        backgroundColor: color,
                        borderRadius: 50,
                        color: '#424242',
                    }}
                    placeholder={placeholder}
                    underlineColorAndroid="transparent"
                    onChangeText={onChange}
                />
                {isPassword ? 
                <TouchableOpacity style={{}} onPress={() => updateShow(!show)}>
                        <Icon style={styles.showPassowrd} type="font-awesome" name="eye" size={20} color="#000"/>
                </TouchableOpacity>
                : null}
            </View>
    )
}
const styles = StyleSheet.create({
    searchIcon: {
        flex:2,
        top:10,
        padding: 10,
    },
    showPassowrd: {
        padding: 10,
        marginRight: 10
    },
})

export default InputField