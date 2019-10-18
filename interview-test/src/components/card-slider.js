import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function CardSlider() {
  const [data] = useState([
    {
      img: 'https://www.goldsgym.com/wp-content/uploads/sites/1/2019/04/highfiveday-web.jpg'
    },
    {
      img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/5Min-banner.jpg?w=1155'
    }
  ]);

  return (
    <View style={{padding: 15, paddingTop: 0}}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontWeight: 'bold'}}>LOREM</Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>LOREM IPSUM ></Text>
        </View>
      </View>
      <View>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => (
            <View style={{marginTop: 15, justifyContent: 'center'}}>
              <Image
                style={{width: Dimensions.get('window').width/1.5, height: 120, borderRadius: 8, marginRight: 15}}
                source={{uri: `${item.img}`}}
              />
              <LinearGradient
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 120,
                  width: Dimensions.get('window').width/1.5,
                  borderRadius: 8
                }}
                colors={['rgba(0,0,0, 0.4)', 'rgba(0,0,0, 0.4)', 'rgba(0,0,0, 0.6)']}
              />
              <View style={styles.captionContainer}>
                <View style={{paddingTop: 5}}>
                  <Text style={styles.captionTitle}>LOREM IPSUM</Text>
                  <Text style={styles.captionContent}>Lorem</Text>
                  <Text style={{color: '#fff'}}>0 lorem | 0 lorem</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  captionContainer: {
    position: 'absolute',
    color: '#fff',
    width: '100%',
    height: 100,
    paddingLeft: 15,
    marginBottom: 15,
    justifyContent: 'flex-end'
  },

  captionTitle: {
    marginTop: 60,
    color: '#FD911D', 
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },

  captionContent: {
    color: '#fff', 
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 3
  },
});

export default CardSlider;