import React from 'react';
import { View, Text, Dimensions } from 'react-native';

function Notification() {
  return (
    <View style={{display: 'flex', flexDirection: 'row', margin: 15, justifyContent: 'space-between'}}>
      <View style={{width: Dimensions.get('window').width/1.5}}>
        <View>
          <Text style={{fontWeight: 'bold'}}>LOREM</Text>
        </View>
        <View style={{paddingTop: 5}}>
          <Text>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</Text>
        </View>
      </View>
      <View style={{display: 'flex', justifyContent: 'center'}}>
        <View style={{backgroundColor: '#FD911D', padding: 10, paddingLeft: 25, paddingRight: 25, borderRadius: 25, shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10,}}>
          <Text style={{fontWeight: 'bold', color: '#fff'}}>Lorem</Text>  
        </View>
      </View>
    </View>
  )
};

export default Notification;