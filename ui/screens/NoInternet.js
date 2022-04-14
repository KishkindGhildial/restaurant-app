import React, {useState} from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';
import BacknHeading from '../widgets/BacknHeading';
import NoNetwork from '../widgets/NoNetwork';
import CButton from '../widgets/Button';

const Search = () => {
  return (
    <View style={styles.basicLayout}>
      <View style={styles.view2}>
        <NoNetwork />
      </View>
      <CButton title={'Try Again'} />
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view2: {
    flex: 6,
  },
  basicLayout: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Search;
