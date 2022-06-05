import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import CButton from '../widgets/Button';
import nohistory from '../../assets/nohistory.png';
import nointernet from '../../assets/nointernet.png';
import noorder from '../../assets/noorder.png';
import noresult from '../../assets/noresult.png';

const OrderComplete = ({navigation}) => {
  const pressFunction = () => {
    navigation.navigate('ForYou');
  };
  return (
    <>
      <View style={styles.basicLayout}>
        <View style={styles.view1}></View>
        <View style={styles.view2}>
          <Text style={styles.heading}>Order Complete</Text>
          <View>
            <Image source={noorder} style={styles.icon} />
          </View>
          <Text style={styles.title}>Thank you for Ordering</Text>
          <Text style={styles.text}>Your order will be delivered soon</Text>
        </View>
      </View>
      <CButton title={'Continue Shopping'} pressFunction={pressFunction} />
    </>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  view2: {
    flex: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicLayout: {
    backgroundColor: '#fff',
    flex: 1,
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
  icon: {
    marginLeft: -25,
  },
  heading: {
    fontSize: 34,
    marginTop: 26,
    marginBottom: 16,
  },
});

export default OrderComplete;
