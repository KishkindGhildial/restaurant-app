import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import CButton from '../widgets/Button';
import nohistory from '../../assets/nohistory.png';
import nointernet from '../../assets/nointernet.png';
import noorder from '../../assets/noorder.png';
import noresult from '../../assets/noresult.png';

const NotFound = () => {
  return (
    <>
      <View style={styles.view}>
        <View style={styles.innerView}>
          <Image source={noresult} />
          <Text style={styles.title}>Item not Found</Text>
          <Text style={styles.text}>
            Try searching the item with a different keyword.
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 26,
    marginBottom: 16,
  },
  text: {
    width: 230,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 20,
    opacity: 0.57,
  },
  innerView: {
    marginTop: -150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotFound;
