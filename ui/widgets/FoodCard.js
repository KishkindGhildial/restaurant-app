import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import food1 from '../../assets/food1.png';

const FoodCard = ({foodData}) => {
  return (
    <View style={styles.outerView}>
      <View style={styles.innerView}>
        <Image
          source={{
            uri: foodData.image,
          }}
          style={styles.image}
        />
        <Text style={styles.heading}>{foodData.title}</Text>
        <Text style={styles.text}>N1,900</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    width: 156,
    height: 252,
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
    marginVertical: 5,
  },
  innerView: {
    width: 156,
    height: 212,
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
    paddingHorizontal: 3,
  },
  image: {
    marginTop: -60,
    borderRadius: 50,
    height: 124,
    width: 128,
    backgroundColor: 'white',
  },
  heading: {
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#000',
    opacity: 0.9,
    marginTop: 15,
  },
  text: {
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    color: '#000',
    opacity: 0.9,
    color: '#FA4A0C',
    marginTop: 10,
  },
});

export default FoodCard;
