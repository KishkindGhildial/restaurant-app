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
import PersonalDetails from '../widgets/PersonalDetails';
import ProfileOptions from '../widgets/ProfileOptions';

const Search = ({navigation}) => {
  const pressFunction = () => {
    navigation.navigate('ForYou');
  };
  const backButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <BacknHeading title={'Profile'} backButton={backButton} />
      </View>
      <View style={styles.view2}>
        <View style={styles.titleView}>
          <Text style={styles.title}>My profile</Text>
        </View>
        <View style={styles.profileDetails}>
          <View style={styles.textGroup}>
            <Text style={styles.text}>Personal details</Text>
            <Pressable
              children={({pressed}) => (
                <Text style={[{color: pressed ? '#535353' : '#FF3144'}]}>
                  change
                </Text>
              )}
            />
          </View>
          <PersonalDetails />
        </View>
        <Pressable
          children={({pressed}) => (
            <View style={styles.profileOptions}>
              <ProfileOptions title={'Orders'} />
            </View>
          )}
        />
        <Pressable
          children={({pressed}) => (
            <View style={styles.profileOptions}>
              <ProfileOptions title={'Pending reviews'} />
            </View>
          )}
        />
        <Pressable
          children={({pressed}) => (
            <View style={styles.profileOptions}>
              <ProfileOptions title={'Faq'} />
            </View>
          )}
        />
        <Pressable
          children={({pressed}) => (
            <View style={styles.profileOptions}>
              <ProfileOptions title={'Help'} />
            </View>
          )}
        />
      </View>
      <CButton title="Update" pressFunction={pressFunction} />
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
  profileOptions: {
    marginBottom: 10,
  },
  profileDetails: {
    marginBottom: 30,
  },
  textGroup: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Search;
