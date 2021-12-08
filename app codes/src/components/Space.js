import React from 'react'
import {View} from 'react-native'

const Space = ({marginTop, marginBottom, marginLeft, marginRight}) => {
    return (
        <View style={{
            marginTop: marginTop == undefined ? 0 : marginTop, 
            marginLeft: marginLeft == undefined ? 0 : marginLeft, 
            marginRight: marginRight == undefined ? 0 : marginRight, 
            marginBottom: marginBottom == undefined ? 0 : marginBottom
        }}></View>
    )
}

export default Space