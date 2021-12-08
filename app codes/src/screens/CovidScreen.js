import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import covid from '../api/covid'
import axios from 'axios'
import NavBar from '../components/NavBar'

const CovidScreen = ({name, bloodGroup, location, color, navigation}) => {
    const [covidData, updateCovidData]= useState({});
    const [xyData, updateXYData]= useState([{x: 0, y: 0}]);
    const [timeLabel, updateTimeLabel]= useState(undefined);
    const [tickValue, updateTickValue]= useState(undefined);
    let recovered = 0;
    useEffect(() => {
        if(xyData.length == 1 && timeLabel == undefined){
            axios.get('https://data.askbhunte.com/api/v1/covid/timeline').then((e) => {       
                let toUpdateWith = []
                let timeLabelData = []
                let tickValueData = []
                e.data.forEach((e, index) => {
                        toUpdateWith.push({x: index, y: e.newCases})
                        tickValueData.push(index)
                        timeLabelData.push(e.date)
                })
                updateTimeLabel(timeLabelData)
                updateTickValue(tickValueData)
                updateXYData(toUpdateWith)
            }).catch(e => console.log(e))
        }
        covid.get('/confirmedcases').then((e) => updateCovidData(e.data)).catch(e => console.log(e))
    }, []);
    console.log(xyData.length)

    return (
        <>
        <NavBar onClick={() => navigation.openDrawer()}/>
        <ScrollView style={styles.container}>
            <View style={styles.headingView}>
                <Text style={styles.headingText}>Covid Statistics</Text>
                <View style={styles.logoNP}>
                    <Image style={styles.imageStyle} source={require('../../assets/nepalFlag.png')}/>
                    <Text>NP</Text>
                </View>
            </View>
            <View style={styles.mainBoxContainer}>
                <View style={styles.boxContainer}>
                    <View style={[ styles.infoBox, {backgroundColor: '#94BBDF'}]}>
                        <Text style={styles.boxHeading}>No of Infected</Text>
                        <Text style={styles.boxNumber}>{covidData.nepal ? covidData.nepal.positive : null}</Text>
                    </View>
                    <View style={[ styles.infoBox, {backgroundColor: '#E6C68D'}]}>
                        <Text style={styles.boxHeading}>No of Death</Text>
                        <Text style={styles.boxNumber}>{covidData.nepal ? covidData.nepal.deaths : null}</Text>
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={[ styles.infoBox, {backgroundColor: '#A7CB9D'}]}>
                        <Text style={styles.boxHeading}>Today New Cases</Text>
                        
                        <Text style={styles.boxNumber}>{covidData.nepal ? covidData.nepal.today_newcase : null}</Text>
                    </View>
                    <View style={[ styles.infoBox, {backgroundColor: '#DDAFA2'}]}>
                        <Text style={styles.boxHeading}>No of Tested</Text>
                        <Text style={styles.boxNumber}>{covidData.nepal ? covidData.nepal.samples_tested : null}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.dailyHeading}>Daily New Cases</Text>
                </View>
         

                <Chart
                    style={{ height: 250, width: '100%', right: 0 }}
                    data={xyData}
                    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                    xDomain={{ min: 0, max: xyData.length }}
                    yDomain={{ min: 0, max: 2000 }}
                    viewport={{ size: { width: 5 } }}
                    >
                    <VerticalAxis
                        tickValues={[0, 500, 1000, 1500, 2000]}
                        theme={{
                            axis: { stroke: { color: '#aaa', width: 2 } },
                            ticks: { stroke: { color: '#aaa', width: 2 } },
                            labels: { formatter: (v) => v.toFixed(2) },
                        }}
                    />
                    <HorizontalAxis
                        tickValues={tickValue}
                        theme={{
                        axis: { stroke: { color: '#aaa', width: 2 } },
                        ticks: { stroke: { color: '#aaa', width: 2 } },
                        labels: { label: { rotation: 10 }, formatter: (v) => timeLabel[v] },
                        }}
                    />
                    <Line
                        theme={{
                        stroke: { color: 'red', width: 2 },
                        }}
                        smoothing="cubic-spline"
                    />
                    <Area theme={{ gradient: { from: { color: '#f39c12', opacity: 0.4 }, to: { color: '#f39c12', opacity: 0.4 } } }} smoothing="cubic-spline" />
                    </Chart>

                    <Chart
                    style={{ height: 250, width: '100%', right: 0 }}
                    data={xyData}
                    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                    xDomain={{ min: 0, max: xyData.length }}
                    yDomain={{ min: 0, max: 2000 }}
                    viewport={{ size: { width: 5 } }}
                    >
                    <VerticalAxis
                        tickValues={[0, 500, 1000, 1500, 2000]}
                        theme={{
                            axis: { stroke: { color: '#aaa', width: 2 } },
                            ticks: { stroke: { color: '#aaa', width: 2 } },
                            labels: { formatter: (v) => v.toFixed(2) },
                        }}
                    />
                    <HorizontalAxis
                        tickValues={tickValue}
                        theme={{
                        axis: { stroke: { color: '#aaa', width: 2 } },
                        ticks: { stroke: { color: '#aaa', width: 2 } },
                        labels: { label: { rotation: 10 }, formatter: (v) => timeLabel[v] },
                        }}
                    />
                        <Line theme={{ stroke: { color: '#44bd32', width: 5 }, scatter: { default: { width: 8, height: 8, rx: 4, color: '#44ad32' }, selected: { color: 'red' } } }} />
                    <Area theme={{ gradient: { from: { color: '#f39c12', opacity: 0.4 }, to: { color: '#f39c12', opacity: 0.4 } } }} smoothing="cubic-spline" />
                    </Chart>

                  
            </View>

        </ScrollView>
        </>
    )
}
let styles = StyleSheet.create({
    imageStyle:{
        height: 35,
        width: 35
    },
    container: {
        left:10,
    },
    headingText: {
        fontSize: 40,
        fontWeight:'bold',
        marginRight: 30
    },
    headingView: {
        flexDirection: 'row',
        marginBottom: 20
    },
    logoNP: {
        backgroundColor: 'gray',
        borderRadius: 30,
        width: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nepalIcon: {
        marginLeft: 10,
        marginRight: 10
    },
    boxContainer: {
        flexDirection: 'row',
    },
    infoBox: {
        marginLeft: 7,
        marginBottom: 10,
        height: 120,
        width: 180,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    boxHeading: {
        top: 10,
        fontSize: 20,
        left: 10
    },
    boxNumber: {
        top: 30,
        left: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    dailyHeading: {
        top: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
})
export default CovidScreen