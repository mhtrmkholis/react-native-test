import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import Notification from './src/components/notification';
import Backdrop from './src/components/backdrop';
import CardSlider from './src/components/card-slider';
import CardWarp from './src/components/card-wrap';
import SearchFilter from './src/components/search-and-filter';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Notification />
        <Backdrop />
        <SearchFilter />
        <CardSlider />
        <CardWarp />
      </ScrollView>
    </SafeAreaView>
  );
};
