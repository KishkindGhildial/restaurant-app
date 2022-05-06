import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import CButton from '../widgets/Button';
import nohistory from '../../assets/nohistory.png';
import nointernet from '../../assets/nointernet.png';
import noorder from '../../assets/noorder.png';
import noresult from '../../assets/noresult.png';

const Search = ({navigation}) => {
  const pressFunction = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={styles.basicLayout}>
        <View style={styles.view1}>
          <BacknHeading title={'My Offers'} backButton={pressFunction} />
        </View>
        <View style={styles.view2}>
          <Text style={styles.title}>ohh snap! No offers yet</Text>
          <Text style={styles.text}>please check again.</Text>
        </View>
      </View>
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
    marginBottom: 16,
    marginTop: -150,
  },
  text: {
    width: 230,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 20,
    opacity: 0.57,
  },
});

export default Search;
