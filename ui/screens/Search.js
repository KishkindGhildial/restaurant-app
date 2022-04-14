import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import Found from '../widgets/Found';
import NotFound from '../widgets/NotFound';

const Search = () => {
  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <BacknHeading title={'Spicy Chicken'} />
      </View>
      <View style={styles.view2}>
        <Found />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view2: {
    flex: 6,
  },
  basicLayout: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
});

export default Search;
