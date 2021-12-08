import React,{useState, useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Linking } from 'react-native';
import DiasasterView from '../components/DiasasterView'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios'
import NavBar from '../components/NavBar'

const HospitalScreen = ({navigation}) => {
  const [hospitals, updateHostital] = useState([]);
  let firstLoad = true;
  const [coords, updateCoords] = useState([]);
  const apiKey = "AIzaSyAh5y8fX-HiQekxKDGoAYn2VmBkt5sw3IQ"

  useEffect(() => {
    if(coords.lat == undefined){
      navigator.geolocation.getCurrentPosition(
        position => {
          axios.get('https://corona.askbhunte.com/api/v1/hospitals').then((e) => {
            const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=6000&type=health&keyword=hospital&key=${apiKey}`
            console.log(url)
            axios.get(url)
            .then((e) => {
              updateHostital(e.data.results)
              updateCoords(position.coords);
              console.log(e.data)
            }).catch((e) => {
              console.log(e)
            })

          }).catch((e) => console.error(e)) 
       },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } 
     
      
  }, [])

  const [region, updateRegion] = useState({
    key:1,
    latitude: 45.65,
    longitude: -78.90,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  return (
    <>
    <NavBar onClick={() => navigation.openDrawer()}/>
    <View style={styles.container}>
    <MapView 
    region={region}
    initialRegion={{
      latitude: 45.65,
      longitude: -78.90,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    style={styles.map}
    >
      {hospitals.map((item) => {
        return(
          <Marker
          image={require('../../assets/hospitalLocation.png')}
          key={item.id} coordinate={{latitude: item.geometry.location.lat, longitude: item.geometry.location.lng}} title={item.name} description={item.vicinity} 
          >
            <MapView.Callout onPress={() =>{
                  const url = `https://www.google.com/maps/dir/?api=1&origin=${coords.latitude},${coords.longitude}&destination=${item.geometry.location.lat},${item.geometry.location.lng}&alternatives=true&mode=driving`
                  Linking.openURL(url)
                } 
              } tooltip style={{backgroundColor: 'gray'}}>
                
                <View style={{borderRadius: 10}}>
                    <Text>{item.name}</Text>
                    <Text>{item.place}</Text>
                </View>
            </MapView.Callout>

          </Marker>
          );
        })}

    </MapView>
    <ScrollView style={styles.newText} horizontal={true} showsHorizontalScrollIndicator={false}>
    {hospitals.map((item) => {
        return(
        <DiasasterView onClick={() => updateRegion({...region, latitude: item.geometry.location.lat, longitude: item.geometry.location.lng, key: item.name})} name={item.name} place={item.vicinity} color="#469D4C"/>
        );
      })}
    </ScrollView>
  </View>
  </>
  )
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newText:{
    position:'absolute',
        top: "70%",
        left: 30
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
});

HospitalScreen.navigationOptions = {
  headerShown: false
}

export default HospitalScreen