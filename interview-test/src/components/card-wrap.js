import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function CardWrap() {
  const [data] = useState([
    {
      img: 'https://www.goldsgym.com/wp-content/uploads/sites/1/2019/04/highfiveday-web.jpg'
    },
    {
      img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/5Min-banner.jpg?w=1155'
    },
    {
      img: 'https://www.goldsgym.com/wp-content/uploads/sites/1/2019/04/highfiveday-web.jpg'
    },
    {
      img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/5Min-banner.jpg?w=1155'
    },
    {
      img: 'https://www.goldsgym.com/wp-content/uploads/sites/1/2019/04/highfiveday-web.jpg'
    },
    {
      img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/5Min-banner.jpg?w=1155'
    }
  ]);

  return (
    <View>
      <Text style={{fontWeight: 'bold', padding: 15}}>LOREM</Text>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', backgroundColor: '#fff', height: 'auto', flexWrap: 'wrap',}}>
            <Image
              style={{width: Dimensions.get('window').width/2.275, height: Dimensions.get('window').height/6, marginBottom: 15, marginLeft: 15, borderRadius: 8}}
              source={{uri: `${item.img}`}}
            />
            <LinearGradient
              style={{
                position: 'absolute',
                left: 15,
                right: 0,
                top: 0,
                height: Dimensions.get('window').height/6,
                width: Dimensions.get('window').width/2.275,
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
  )
};

const styles = StyleSheet.create({
  captionContainer: {
    position: 'absolute',
    color: '#fff',
    width: '100%',
    height: 125,
    paddingLeft: 30,
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

export default CardWrap;
