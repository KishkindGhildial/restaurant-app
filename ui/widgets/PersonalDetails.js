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
import profileImg from '../../assets/profileimg.png';

const DeliveryOptions = () => {
  const [radioState, setRadioState] = useState(0);
  return (
    <View style={styles.basicLayout}>
      <View style={styles.profileImg}>
        <Image source={profileImg} />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>Thelma Sara-bear</Text>
        <Text style={styles.email}>thelma_sara-bear@gmail.com</Text>
        <View style={styles.br}></View>
        <Text style={styles.phno}>+233 54138989</Text>
        <View style={styles.br}></View>
        <Text style={styles.address}>
          Trasaco hotel, behind navrongo campus
        </Text>
      </View>
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
    // alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  br: {
    width: 165,
    height: 1,
    backgroundColor: '#b3b3b3',
  },
  details: {
    maxWidth: 190,
  },
  name: {
    fontSize: 18,
    lineHeight: 22,
  },
  email: {
    marginVertical: 5,
    fontSize: 13,
  },
  phno: {
    marginVertical: 5,
    fontSize: 13,
  },
  address: {
    marginVertical: 5,
    fontSize: 13,
  },
});

export default DeliveryOptions;
