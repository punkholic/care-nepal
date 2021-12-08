import React from 'react'
import {StyleSheet } from 'react-native'
import RadioForm from 'react-native-simple-radio-button';
const RegistrationScreen = ({onPress}) => {
    var radio_props = [
        {label: 'male', value: 0 },
        {label: 'female', value: 1 },
        {label: 'others', value: 3 }
      ];
       
    return (
            <RadioForm
            style={{marginLeft:50}}
                radio_props={radio_props}
                initial={0}
                formHorizontal={true}
                onPress={onPress}
                buttonColor={'black'}
                buttonInnerColor={'black'}
                buttonOutterColor={'black'}
                labelColor={'black'}
            />
    )
}
const styles = StyleSheet.create({
    
})

export default RegistrationScreen