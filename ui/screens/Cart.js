import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import Found from '../widgets/Found';
import NotFound from '../widgets/NotFound';
import DeliveryOptions from '../widgets/DeliveryOptions';
import CButton from '../widgets/Button';
import PaymentMethod from '../widgets/PaymentMethod';
import {clearErrors} from 'react-native/Libraries/LogBox/Data/LogBoxData';
import CartItems from '../widgets/CartItems';
import swipe from '../../assets/swip.png';

const Search = ({navigation}) => {
  const pressFunction = () => {
    navigation.navigate('Delivery');
  };
  const backButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <BacknHeading title={'Cart'} backButton={backButton} />
      </View>
      <View style={styles.view2}>
        <View style={styles.titleView}>
          <Image source={swipe} />
          <Text style={styles.text}>Swipe on an item to delete</Text>
        </View>
        <ScrollView>
          <View style={styles.cartItemsView}>
            <CartItems />
          </View>
          <View style={styles.cartItemsView}>
            <CartItems />
          </View>
          <View style={styles.cartItemsView}>
            <CartItems />
          </View>
        </ScrollView>
      </View>
      <CButton title="Complete Order" pressFunction={pressFunction} />
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  view2: {
    flex: 6,
    alignItems: 'center',
  },
  basicLayout: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  titleView: {
    width: 315,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },
  text: {
    marginTop: 5,
    marginHorizontal: 5,
    fontSize: 10,
  },
  cartItemsView: {
    marginBottom: 15,
  },
});

export default Search;
