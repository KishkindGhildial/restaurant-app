import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import bank from '../../assets/bank.png';
import card from '../../assets/card.png';

const DeliveryOptions = () => {
  const [radioState, setRadioState] = useState(0);
  return (
    <View style={styles.basicLayout}>
      <TextInput style={styles.input} placeholder="Address Line 1" />
      <View style={styles.br}></View>
      <TextInput style={styles.input} placeholder="Address Line 2" />
      <View style={styles.br}></View>
      <TextInput style={styles.input} placeholder="Phone Number" />
    </View>
  );
};

const styles = StyleSheet.create({
  basicLayout: {
    backgroundColor: '#fff',
    height: 156,
    width: 315,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    height: '30%',
    width: 260,
    fontSize: 15,
  },
  br: {
    width: 260,
    height: 1,
    backgroundColor: '#b3b3b3',
  },
});

export default DeliveryOptions;
