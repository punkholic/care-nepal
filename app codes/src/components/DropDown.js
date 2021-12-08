import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = ({toShow, onChange, listData, textToShow}) => {
    const data = {
        country: 'uk'
    }
    
    return (
        <View>
            <Text style={{marginLeft: 60, marginBottom: 10, fontSize: 20, fontWeight: 'bold'}}>{toShow}</Text>
            <DropDownPicker
        placeholder={textToShow}
        items={listData}
        defaultValue={null}
        containerStyle={{height: 40}}
        style={styles.dropDown}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        
        onChangeItem={onChange}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    dropDown:{
        backgroundColor: '#fafafa',
        borderRadius: 10,
        marginLeft: 50,
        marginRight: 50,
    }
})

export default DropDown