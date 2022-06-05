import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import CButton from '../widgets/Button';
import nohistory from '../../assets/nohistory.png';
import nointernet from '../../assets/nointernet.png';
import noorder from '../../assets/noorder.png';
import noresult from '../../assets/noresult.png';

const Search = ({id}) => {
  const header = ['History', 'Orders'];
  const icon = [nohistory, noorder];
  const title = ['No history yet', 'No orders yet'];
  console.log(id);
  return (
    <>
      <View style={styles.basicLayout}>
        <View style={styles.view1}>
          <BacknHeading title={header[id]} />
        </View>
        <View style={styles.view2}>
          <View>
            <Image source={icon[id]} />
          </View>
          <Text style={styles.title}>{title[id]}</Text>
          <Text style={styles.text}>
            Hit the orange button down below to Create an order
          </Text>
        </View>
      </View>
      <CButton title={'Start Ordering'} />
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
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 20,
    opacity: 0.57,
  },
  icon: {
    marginLeft: -25,
  },
});

export default Search;
