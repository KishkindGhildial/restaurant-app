import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import FoodCard from './FoodCard';

const Found = () => {
  return (
    <View style={styles.view}>
      <ScrollView>
        <View style={styles.resultHeader}>
          <Text style={styles.resultHeading}>Found 6 Results</Text>
        </View>
        <View style={styles.foodCardView}>
          <View style={styles.leftFoodCard}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </View>
          <View style={styles.rightFoodCard}>
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.06,
    shadowRadius: 11.95,
    elevation: 18,
    zIndex: 2,
  },
  resultHeader: {
    alignItems: 'center',
  },
  resultHeading: {
    fontSize: 28,
    marginTop: 35,
  },
  foodCardView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 60,
  },
  leftFoodCard: {
    marginTop: 30,
  },
  rightFoodCard: {
    marginTop: -30,
  },
});

export default Found;
