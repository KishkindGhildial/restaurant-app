import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import Found from '../widgets/Found';
import NotFound from '../widgets/NotFound';
import DeliveryOptions from '../widgets/DeliveryOptions';
import CButton from '../widgets/Button';
import PaymentMethod from '../widgets/PaymentMethod';
import {clearErrors} from 'react-native/Libraries/LogBox/Data/LogBoxData';

const Search = ({navigation}) => {
  const pressFunction = () => {
    navigation.navigate('OrderComplete');
  };
  const backButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <BacknHeading title={'Checkout'} backButton={backButton} />
      </View>
      <View style={styles.view2}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Payment</Text>
        </View>
        <View style={styles.paymentmethod}>
          <Text style={styles.text}>Payment Method</Text>
          <PaymentMethod />
        </View>
        <View style={styles.deliveryoptions}>
          <Text style={styles.text}>Delivery Options</Text>
          <DeliveryOptions />
        </View>
        <View style={styles.total}>
          <Text style={{fontSize: 17}}>Total</Text>
          <Text style={{fontSize: 18}}>23,000</Text>
        </View>
      </View>
      <CButton title="Place Order" pressFunction={pressFunction} />
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
  },
  text: {
    marginVertical: 20,
    paddingLeft: 7,
    fontSize: 16,
  },
  deliveryoptions: {
    marginBottom: 20,
  },
  paymentmethod: {
    marginBottom: 30,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 20,
  },
});

export default Search;
