import React, {useState} from 'react';
import MiniLogo from '../../assets/MiniLogo.png';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from 'react-native';
import largeLogo from '../../assets/largeIcon.png';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const LoginSignup = ({changeLoginSignup, selected}) => {
  return (
    <>
      <View style={styles.view}>
        <View style={styles.sectionLayout}>
          <Image
            style={[
              {paddingLeft: 40},
              {
                transform: [{scale: 0.9}],
              },
            ]}
            source={largeLogo}
          />
        </View>
        <View style={styles.loginOption}>
          <Pressable
            style={[
              {borderBottomColor: selected == 1 ? '#FF3100' : '#fff'},
              styles.loginOptionButton,
            ]}
            onPress={() => {
              changeLoginSignup(1);
            }}
            children={({pressed}) => (
              <Text
                style={[{color: pressed ? '#4f4f4f' : '#000'}, {fontSize: 16}]}>
                Login
              </Text>
            )}
          />
          <Pressable
            style={[
              {borderBottomColor: selected == 2 ? '#FF3100' : '#fff'},
              styles.loginOptionButton,
            ]}
            onPress={() => {
              changeLoginSignup(2);
            }}
            children={({pressed}) => (
              <Text
                style={[{color: pressed ? '#4f4f4f' : '#000'}, {fontSize: 16}]}>
                Sign-Up
              </Text>
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // height: 350,
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
    justifyContent: 'space-between',
  },
  sectionLayout: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: '78%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginOption: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '12%',
  },
  loginOptionButton: {
    width: 134,
    alignItems: 'center',
    textAlign: 'center',
    height: '100%',
    paddingTop: 5,
    borderBottomWidth: 3,
  },
});

export default LoginSignup;
