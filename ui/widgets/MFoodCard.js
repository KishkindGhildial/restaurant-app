import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import food1 from '../../assets/mfood1.png';

const MFoodCard = ({food, heading, chain}) => {
  return (
    <View style={styles.outerView}>
      <View style={styles.innerView}>
        <Image
          source={{
            uri: food,
          }}
          style={styles.image}
        />
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.text}>{chain}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    width: 220,
    height: 321,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: '#E9E9E9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.06,
    shadowRadius: 11.95,
    elevation: 18,
    zIndex: 2,
    marginVertical: 15,
    marginLeft: 30,
  },
  innerView: {
    width: 220,
    height: 270,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.06,
    shadowRadius: 11.95,
    elevation: 18,
    zIndex: 2,
    alignItems: 'center',
    overflow: 'visible',
  },
  image: {
    marginTop: -60,
    borderRadius: 60,
    height: 140,
    width: 164,
    backgroundColor: 'white',
  },
  heading: {
    fontStyle: 'normal',
    fontSize: 22,
    lineHeight: 22,
    textAlign: 'center',
    color: '#000',
    opacity: 0.9,
    marginTop: 20,
  },
  text: {
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    color: '#000',
    opacity: 0.9,
    color: '#FA4A0C',
    marginTop: 30,
  },
});

export default MFoodCard;
