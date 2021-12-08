import React, {useState, useEffect} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text, Linking } from 'react-native';
import DiasasterView from '../components/DiasasterView'
import { ScrollView } from 'react-native-gesture-handler';
import selfMade from '../api/selfMade'
import NavBar from '../components/NavBar'

const DiasasterScreen = ({navigation}) => {
  const [coords, updateCoords] = useState([]);
  const [markers, updateMarkers] = useState([]);
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      position => {
        updateCoords(position.coords);
     },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    selfMade.get('/disaster').then((e) => {
      updateMarkers(e.data)
    }).catch((e) => console.log(e)); 
  }, []);

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
        {markers.map((item) => {
          return(
            <Marker key={item.id} coordinate={{latitude: item.latitude, longitude: item.longitude}} title={item.name} description={item.place} 
            
          >
              <MapView.Callout onPress={() =>{
                  const url = `https://www.google.com/maps/dir/?api=1&origin=${coords.latitude},${coords.longitude}&destination=${item.latitude},${item.longitude}&alternatives=true&mode=driving`
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
      {markers.map((item) => {
        return(
          <DiasasterView onClick={() => updateRegion({...region, latitude: item.latitude, longitude: item.longitude, key: item.id})} name={item.name} place={item.place} color="#1cc4e7"/>
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
      top: "80%",
      left: 30
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  export default DiasasterScreen