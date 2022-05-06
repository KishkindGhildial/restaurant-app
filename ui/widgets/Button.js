import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

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
          pressFunction();
        }}
        children={({pressed}) => (
          <Text
            style={[{color: pressed ? '#4f4f4f' : '#fff'}, styles.buttonText]}>
            {title}
          </Text>
        )}
        style={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonStyle: {
    backgroundColor: '#FF3000',
    height: 70,
    width: 314,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});

export default Button;
