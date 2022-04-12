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
  return (
    <View style={styles.basicLayout}>
      <Pressable
        onPress={() => {
          setRadioState(0);
        }}>
        <View style={styles.option}>
          <View
            style={[
              styles.outerCircle,
              {borderColor: radioState === 0 ? 'red' : '#9f9f9f'},
            ]}>
            <View
              style={[
                styles.innerCircle,
                {backgroundColor: radioState === 0 ? 'red' : '#f2f2f2'},
              ]}></View>
          </View>
          <Text style={styles.text}>Door delivery</Text>
        </View>
      </Pressable>
      <View style={styles.br}></View>
      <Pressable
        onPress={() => {
          setRadioState(1);
        }}>
        <View style={styles.option}>
          <View
            style={[
              styles.outerCircle,
              {borderColor: radioState === 1 ? 'red' : '#9f9f9f'},
            ]}>
            <View
              style={[
                styles.innerCircle,
                {backgroundColor: radioState === 1 ? 'red' : '#f2f2f2'},
              ]}></View>
          </View>
          <Text style={styles.text}>Pick up</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  basicLayout: {
    backgroundColor: '#fff',
    height: 156,
    width: 315,
    borderRadius: 20,
  },
  outerCircle: {
    borderWidth: 1,
    borderColor: '#FA4A0C',
    width: 17,
    height: 17,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 7,
    height: 7,
    backgroundColor: '#FA4A0C',
    borderRadius: 100,
  },
  option: {
    height: 75,
    width: 315,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  br: {
    width: 220,
    height: 1,
    backgroundColor: '#b3b3b3',
    marginLeft: 60,
  },
  text: {
    fontSize: 17,
    marginLeft: 25,
  },
});

export default DeliveryOptions;
