import React,{useState, useEffect} from 'react'
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native'
import PreventiveView from '../components/PreventiveView'
const PreventiveScreen = ({navigation}) => {

    let data = navigation.state.params
    return (
        <ScrollView>
            <View style={{marginTop:35}}>
                {data.map((item) => <PreventiveView text={item.text} image={item.image}/>)}
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
})

export default PreventiveScreen