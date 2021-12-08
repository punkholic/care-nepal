import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function App({name, place, color, onClick}) {

  return (
      <TouchableOpacity onPress={onClick} style={{
        backgroundColor: color,
        height: 80,
        width: 200,
        marginRight: 15,
        borderRadius: 10
      }}>
        <Text style={{marginTop:18, marginLeft: 10}}>Name: {name}</Text>
        <Text style={{marginLeft: 10}}>{place}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
});

