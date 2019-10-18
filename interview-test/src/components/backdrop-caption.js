import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

function BackdropCaption() {
  return (
    <View style={styles.captionContainer}>
      <View style={{paddingTop: 5}}>
        <View style={{backgroundColor: '#FD911D', padding: 10, paddingLeft: 25, paddingRight: 25, borderRadius: 25, shadowColor: "#000", shadowOffset: { width: 0, height: 5, }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10, width: Dimensions.get('window').width/2 - 20}}>
          <Text style={{fontWeight: 'bold', color: '#fff', textAlign: 'center'}}>LOREM IPSUM</Text>  
        </View>
        <Text style={styles.captionTitle}>LOREM IPSUM</Text>
        <Text style={styles.captionContent}>LOREM IPSUM</Text>
        <Text style={styles.captionContent}>LOREM</Text>
        <Text style={{color: '#fff'}}>0 lorem | 0 lorem</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  captionContainer: {
    position: 'absolute',
    color: '#fff',
    width: '100%',
    marginTop: 87,
    height: 143,
    paddingLeft: 15,
    paddingBottom: 10,
    justifyContent: 'flex-end'
  },

  captionTitle: {
    marginTop: 60,
    color: '#FD911D', 
    fontSize: 14,
    fontWeight: 'bold',
  },

  captionContent: {
    color: '#fff', 
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default BackdropCaption;