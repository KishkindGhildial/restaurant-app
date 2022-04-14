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
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AddressDetails from '../widgets/AddressDetails';

const Search = () => {
  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <BacknHeading title={'Checkout'} />
      </View>
      <View style={styles.view2}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Delivery</Text>
        </View>
        <View style={styles.addressDetails}>
          <View style={styles.textGroup}>
            <Text style={styles.text}>Address details</Text>
            <Pressable
              children={({pressed}) => (
                <Text style={[{color: pressed ? '#535353' : '#FF3144'}]}>
                  change
                </Text>
              )}
            />
          </View>
          <AddressDetails />
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
      <CButton title="Proceed to payment" />
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
  addressDetails: {
    marginBottom: 30,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 20,
  },
  textGroup: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Search;
