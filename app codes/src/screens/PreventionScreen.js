import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const PreventionScreen = ({navigation}) => {
  console.log(navigation.navigate)
  const [temp, updateTemp] = useState("Loading...");
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = JSON.stringify(position);
          axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=bd321264094b486189c40d86969bba70`)
          .then((e) => {
            let muni = e.data.results[0].components.municipality;
            let locationString = `${e.data.results[0].components.municipality},${e.data.results[0].components.country}`
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locationString}&appid=7c75f3c7c89189edb8cdfebfdc4e36c4`)
            .then((e) => {
              const celsius = e.data.main.temp - 273.15;
              updateTemp(`${muni}, ${celsius.toFixed(2)} °C`)  
            }).catch((e) => console.log(e))
          }).catch((e) => {
            console.error(e)
          })
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      }, [])
      const [ menu, setMenu ] = useState([
    {
      id: "1",
      name: "Wildfire",
      icon: "logo-facebook",
      color: "#3949A9",
      image : require('../../assets/fire1.png'),
      sendingData: [
        {
          image: require('../../assets/fire2.png'),
          text: "If you are ever out and about and notice a fire that is burning out of control or is unattended, immediately call 911 or your local fire department . When the conditions are right, even a small campfire can turn into a massive fire. .”See something? Say something,” is one of the key wildfire prevention methods "
        },
        {
          image: require('../../assets/fire3.png'),
          text: "Many people wonder how to prevent wildfires, but the easiest way is to be careful when having a campfire or using a fire pit. A fire should never be left unattended for any period. Also, when you are done with the fire, then make sure you completely extinguish it. Use water or ashes to put out the flames."
        },
      ]
    },
    {
      id: "2",
      name: "Earthquake",
      icon: "logo-linkedin",
      color: "#42A5F6",
      image : require('../../assets/earthquake.png'),
      sendingData: [
        {
          image: require('../../assets/earthquake.png'),
          text: "If outside, stay away from buildings, bridges and electricity pylons and move to open areas."
        },
        {
          image: require('../../assets/quake.png'),
          text: "Seek shelter under stable tables or under door frames."
        },
        {
          image: require('../../assets/quake2.png'),
          text: "If you’re driving when an earthquake strikes, pull over to a large open area that’s not under trees or power lines. Set the parking brake. Stay in the vehicle."
        },
      ]
    },
    {
      id: "3",
      name: "Landslide",
      icon: "logo-youtube",
      color: "#CC191E",
      image : require('../../assets/landslide.png'),
      sendingData: [
        {
          image: require('../../assets/land1.png'),
          text: "Replant trees where they have been removed on slopes and slope base to prevent erosionReplant trees where they have been removed on slopes and slope base to prevent erosion."
        },
        {
          image: require('../../assets/land2.png'),
          text: "Avoid building houses at the base of slopes that are prone to landslides."
        },
        {
          image: require('../../assets/land.png'),
          text: "Do not obstruct natural streams or drainage paths during construction."
        },
      ]
    },
    {
      id: "4",
      name: "Flood",
      icon: "logo-twitter",
      color: "#55ADEF",
      image : require('../../assets/flood.png'),
      sendingData: [
        {
          image: require('../../assets/flood.png'),
          text: "Avoid building in high-risk flood plain areas to minimize your exposure."
        },
        {
          image: require('../../assets/flood2.png'),
          text: "Construct barriers to stop floodwater from entering your home."
        },
        {
          image: require('../../assets/flood3.png'),
          text: "Know the elevation of your property in relation to nearby bodies of water.  If your home is not on high ground, know how to get to high ground quickly.."
        },
      ]
    },
    {
      id: "5",
      name: "Fire",
      icon: "logo-pinterest",
      color: "#BD2028",
      image : require('../../assets/fire.png'),
      sendingData: [
        {
          image: require('../../assets/fire1.png'),
          text: "Avoid unattended or careless use of candles."
        },
        {
          image: require('../../assets/fire2.png'),
          text: "Do not leave your cooking unattended."
        },
        {
          image: require('../../assets/fire3.png'),
          text: "Do not leave your cooking unattended."
        },
        {
          image: require('../../assets/fire4.jpg'),
          text: "Do not disable smoke or CO detectors."
        },
      ]
    },
    {
      id: "6",
      name: "Windstrom",
      icon: "logo-instagram",
      color: "#B62889",
      image : require('../../assets/windstorm.png'),
      sendingData: [
        {
          image: require('../../assets/wind1.png'),
          text: "Make sure roofing components (fascia, soffits, chimney caps, etc.) are securely fastened so that the wind can't lift them."
        },
        {
          image: require('../../assets/wind2.png'),
          text: "Check that the doors and windows of the house, storage shed and garage are completely closed."
        },
        {
          image: require('../../assets/wind3.jpg'),
          text: "Don't park your car near trees, street lights or power lines. If possible, park your car in a garage."
        },
      ]
    },
    {
      id: "7",
      name: "Thunderstrom",
      icon: "logo-reddit",
      color: "#F14D01",
      image : require('../../assets/thunderstrom.jpeg'),
      sendingData: [
        {
          image: require('../../assets/thunder.png'),
          text: "Avoid water during a thunderstorm. Lightning can travel through plumbing."
        },
        {
          image: require('../../assets/thunder2.jpg'),
          text: "Avoid concrete floors and walls."
        },
        {
          image: require('../../assets/thunder3.jpg'),
          text: "If no shelter is available, crouch low, with as little of your body touching the ground as possible."
        },
      ]
    },
    {
      id: "8",
      name: "Hailstrom",
      icon: "logo-tumblr",
      color: "#36465D",
      image : require('../../assets/hailstrom.png'),
      sendingData: [
        {
          image: require('../../assets/hail.png'),
          text: "Inspect your roof for damage and repair any problem areas."
        },
        {
          image: require('../../assets/hail2.png'),
          text: "Remove weak branches or trees in close proximity to your home."
        },
        {
          image: require('../../assets/hail3.png'),
          text: "Move vehicles into a garage or use a hail protector cover to avoid costly repairs."
        },
      ]
    },
    {
      id: "9",
      name: "Snake Bite",
      icon: "logo-whatsapp",
      color: "#13AF0B",
      image : require('../../assets/snakebite.webp'),
      sendingData: [
        {
          image: require('../../assets/snake.png'),
          text: "Watch where you step and where you sit when outdoors."
        },
        {
          image: require('../../assets/snake1.jpg'),
          text: "Shine a flashlight on your path when walking outside at night."
        },
        {
          image: require('../../assets/snake3.jpg'),
          text: "Wear loose, long pants and high, thick leather or rubber boots."
        },
      ]
    },
    {
      id: "10",
      name: "Avalanche",
      icon: "logo-skype",
      color: "#00AFF0",
      image : require('../../assets/avalanche.png'),
      sendingData: [
        {
          image: require('../../assets/avalnche.png'),
          text: "Erect a large fence high on a mountaintop to help collect and balance the snow and deter an eventual avalanche."
        },
        {
          image: require('../../assets/avalanche1.png'),
          text: "Plant groupings of trees on hillsides, scattered enough to slow down and break up any snow flow from above."
        },
        {
          image: require('../../assets/avalanche2.png'),
          text: "Use explosives to jar loose small buildups of snow. This prevents larger buildups that could lead to large, devastating avalanches."
        },
      ]
    },
    {
      id: "11",
      name: "Drought",
      icon: "logo-dribbble",
      color: "#EA4C89",
      image : require('../../assets/drought.png'),
      sendingData: [
        {
          image: require('../../assets/drought.png'),
          text: "Consider using rainwater collection systems to water plants and gardens."
        },
        {
          image: require('../../assets/drought1.png'),
          text: "Install irrigation devices that are the most water efficient for each use, such as micro and drip irrigation, and soaker hoses."
        },
        {
          image: require('../../assets/drought3.jpg'),
          text: "Use mulch to retain moisture in the soil. Mulch also helps control weeds that compete with landscape plants for water."
        },
      ]
    },
    {
      id: "12",
      name: "Covid",
      icon: "logo-slack",
      color: "#D81C57",
      image : require('../../assets/covid.png'),
      sendingData: [
        {
          image: require('../../assets/cleanhands.jpg'),
          text: "Clean your hands often. Use soap and water, or an alcohol-based hand rub."
        },
        {
          image: require('../../assets/socialdistancing.jpg'),
          text: "Maintain a safe distance from anyone who is coughing or sneezing."
        },
        {
          image: require('../../assets/mask.jpg'),
          text: "Wear a mask when physical distancing is not possible."
        },
        {
          image: require('../../assets/sneeze.jpg'),
          text: "Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze."
        },
        {
          image: require('../../assets/donttouch.jpg'),
          text: "Don’t touch your eyes, nose or mouth."
        },
      ]
    },
    {
      id: "13",
      name: "Cyclone",
      icon: "logo-twitch",
      color: "#60419F",
      image : require('../../assets/cyclone.webp'),
      sendingData: [
        {
          image: require('../../assets/cyclone1.png'),
          text: "Planting trees to prevent cyclone damage."
        },
        {
          image: require('../../assets/cyclone2.png'),
          text: "In case of a storm surge/tide warning, or other flooding, know your nearest safe high ground and the safest access route to it."
        },
        {
          image: require('../../assets/cyclone3.png'),
          text: "Clear your property of loose material that could blow about and possibly cause injury or damage during extreme winds."
        },
      ]
    },
    {
      id: "14",
      name: "Tsunami",
      icon: "logo-vk",
      color: "#587EA3",
      image : require('../../assets/tsunami.png'),
      sendingData: [
        {
          image: require('../../assets/tsunami.png'),
          text: " Protect yourself from the effects of a tsunami by moving from the shore to safe, high grounds outside tsunami hazard areas."
        },
        {
          image: require('../../assets/tsunami1.png'),
          text: "Be alert to signs of a tsunami, such as a sudden rise or draining of ocean waters."
        },
        {
          image: require('../../assets/tsunami1.png'),
          text: "DO NOT wait! Leave as soon as you see any natural signs of a tsunami or receive an official tsunami warning."
        },
      ]
    },
  ])
  
  return(
    <View style={styles.container}>
      <Text style={styles.title} >Prevention Measures</Text>
      <View style={styles.sideBySide}>
        <View style={styles.leftSide}>
            <Text style={{ color:'white', left:30, fontSize: 25}}>welcome</Text>
        </View>
        <View style={styles.rightSide}>
        <Text style={{ color:'white',left:5, fontSize: 15, top: 5}}>{temp}</Text>
        </View>
      </View>
      <FlatList
        numColumns={3}
        data={menu}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Preventive', item.sendingData)} style={styles.listItem}>
              <Image style={styles.imageStyle} source={item.image} resizeMode="cover"/>
              <Text style={styles.iconName}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
  </View>
  )
}
const styles = StyleSheet.create({
  leftSide: {
    backgroundColor: '#89d7ee',
    height: 40,
    width: '50%',
    right: 10,
    borderRadius: 10
  },
  rightSide: {
    backgroundColor: '#89d7ee',
    width: '50%',
    left: 10,
    borderRadius: 10,
    height: 40
    },
  sideBySide: {
    marginBottom: 30,
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  imageStyle:{
      width:100,
      height:100
  },
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
title: {
  fontWeight: "bold",
  fontSize: 35,
  marginTop: 50,
  marginBottom: 15,
  color: "#03506f"
},
iconName: {
  fontWeight: "bold",
  fontSize: 20,
  margin: 10
},
listItem: {
  alignItems: 'center',
  justifyContent: 'center',
  width: "33%"
}
});

export default PreventionScreen