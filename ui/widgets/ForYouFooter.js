import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import heartButton from '../../assets/heartButton.png';
import historyButton from '../../assets/historyButton.png';
import userButton from '../../assets/userButton.png';
import homeButton from '../../assets/homeButton.png';

const Button = ({title, pressFunction}) => {
  return (
    <View style={styles.buttonView}>
      {/* <Pressable
        style={({pressed}) => [
          {
            color: pressed ? '#FF3128' : 'white',
          },
          styles.buttonStyle,
        ]}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable> */}
      <Pressable
        onPress={() => {
          pressFunction('ForYou');
        }}
        children={({pressed}) => <Image source={homeButton} />}
        style={styles.buttonStyle}
      />
      <Pressable
        onPress={() => {
          pressFunction('MyOffers');
        }}
        children={({pressed}) => <Image source={heartButton} />}
        style={styles.buttonStyle}
      />
      <Pressable
        onPress={() => {
          pressFunction('Profile');
        }}
        children={({pressed}) => <Image source={userButton} />}
        style={styles.buttonStyle}
      />
      <Pressable
        onPress={() => {
          pressFunction('History');
        }}
        children={({pressed}) => <Image source={historyButton} />}
        style={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
    flexDirection: 'row',
    paddingHorizontal: 32,
  },
  buttonStyle: {},
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});

export default Button;
