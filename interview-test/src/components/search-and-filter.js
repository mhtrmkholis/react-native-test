import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Feather, Octicons } from '@expo/vector-icons';

function SearchFilter() {
  return (
    <View style={{display: 'flex', flexDirection: 'row', margin: 15, justifyContent: 'space-between'}}>
      <View style={{width: Dimensions.get('window').width/1.5}}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={20} color="rgba(0,0,0, 0.6)" style={{marginLeft: 15}} />
          <TextInput style={styles.inputs}
            placeholder='Search'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
          />
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 15}}>
        <View style={{display: 'flex', justifyContent: 'center'}}>
          <Octicons name="settings" size={22} color="rgba(0,0,0, 0.6)" />
        </View>
        <View style={{display: 'flex', justifyContent: 'center', marginLeft: 6}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.6)'}}>Filter</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    borderColor: '#000',
    height: 45,
    marginLeft: 16,
    flex: 1,
  },
});

export default SearchFilter;