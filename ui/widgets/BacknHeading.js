import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {clearErrors} from 'react-native/Libraries/LogBox/Data/LogBoxData';

const BacknHeading = ({title}) => {
  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <Pressable
          children={({pressed}) => (
            <Text
              style={[
                {color: pressed ? '#FF9F8F' : '#FF3128'},
                {fontSize: 16},
                styles.button,
              ]}>
              {`<`}
            </Text>
          )}
        />
        <View style={styles.headingView}>
          <Text style={styles.heading}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 32,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    alignItems: 'center',
  },
  button: {
    fontSize: 17,
    marginHorizontal: 15,
  },
  heading: {
    fontSize: 17,
    marginHorizontal: 15,
    width: '100%',
    textAlign: 'center',
  },
  headingView: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BacknHeading;
