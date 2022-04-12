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
          <Image source={nointernet} />
          <Text style={styles.title}>No internet Connection</Text>
          <Text style={styles.text}>
            Your internet connection is currently not available please check or
            try again.
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotFound;
