import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackdropCaption from '../components/backdrop-caption';

function Backdrop() {
  return (
    <View>
      <Image
        style={{width: '100%', height: 230}}
        source={{uri: `https://ichef.bbci.co.uk/news/660/cpsprodpb/10AAF/production/_102317286_gettyimages-598137608.jpg`}}
      />
      <LinearGradient
        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        colors={['rgba(0,0,0, 0.8)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 105,
          height: 125,
        }}
      />
      <BackdropCaption />
    </View>
  )
};

export default Backdrop;