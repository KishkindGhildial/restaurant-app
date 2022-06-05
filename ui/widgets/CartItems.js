import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';

const DeliveryOptions = () => {
  const [radioState, setRadioState] = useState(0);
  return <View style={styles.basicLayout}></View>;
};

const styles = StyleSheet.create({
  basicLayout: {
    backgroundColor: '#fff',
    height: 102,
    width: 315,
    borderRadius: 20,
  },
});

export default DeliveryOptions;
