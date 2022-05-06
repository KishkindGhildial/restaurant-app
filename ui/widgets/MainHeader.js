import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {clearErrors} from 'react-native/Libraries/LogBox/Data/LogBoxData';
import cart from '../../assets/shopping-cart.png';
import sideBar from '../../assets/sidebar.png';

const MainHeader = ({menuClick, cartClick}) => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            menuClick();
          }}
          children={() => <Image source={sideBar} />}
        />
        <View style={styles.headingView}>
          <Pressable
            onPress={() => {
              cartClick();
            }}
            children={() => <Image source={cart} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingTop: 32,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  button: {
    fontSize: 17,
    marginHorizontal: 15,
  },
  headingView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainHeader;
