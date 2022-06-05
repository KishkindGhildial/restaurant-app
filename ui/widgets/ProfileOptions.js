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
import chevronR from '../../assets/chevronR.png';

const DeliveryOptions = ({title}) => {
  const [radioState, setRadioState] = useState(0);
  return (
    <View style={styles.basicLayout}>
      <Text style={[{fontSize: 18}]}>{title}</Text>
      <Image source={chevronR} />
    </View>
  );
};

const styles = StyleSheet.create({
  basicLayout: {
    backgroundColor: '#fff',
    height: 60,
    width: 315,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});

export default DeliveryOptions;
