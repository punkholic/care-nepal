import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebNews = ({navigation}) => {
    return <WebView source={{ uri: navigation.state.params.link }} />;
}
const styles = StyleSheet.create({
})

export default WebNews