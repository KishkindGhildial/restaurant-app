import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import Found from '../widgets/Found';
import NotFound from '../widgets/NotFound';
import DeliveryOptions from '../widgets/DeliveryOptions';
import CButton from '../widgets/Button';
import PaymentMethod from '../widgets/PaymentMethod';

const Note = () => {
  return (
    <View style={styles.basicLayout}>
      <View style={styles.title}>
        <Text>Please Note</Text>
      </View>
      <View>
        <View></View>
        <View></View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  basicLayout: {
    width: 315,
    height: 322,
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
  },
  title: {
    width: 315,
    height: 66,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Note;
