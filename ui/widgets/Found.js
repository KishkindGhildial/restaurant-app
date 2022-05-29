import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import FoodCard from './FoodCard';

const Found = ({data}) => {
  return (
    <View style={styles.view}>
      <ScrollView>
        <View style={styles.resultHeader}>
          <Text style={styles.resultHeading}>Found {data.length} Results</Text>
        </View>
        <View style={styles.foodCardView}>
          {data.map(elem =>
            data.indexOf(elem) % 2 === 0 ? (
              <View style={styles.leftFoodCard}>
                <FoodCard
                  food={elem.image}
                  heading={elem.title}
                  key={elem.id}
                />
              </View>
            ) : (
              <View style={styles.rightFoodCard}>
                <FoodCard
                  food={elem.image}
                  heading={elem.title}
                  key={elem.id}
                />
              </View>
            ),
          )}
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
    marginTop: 50,
  },
  leftFoodCard: {
    marginTop: 30,
  },
  rightFoodCard: {
    marginTop: -30,
  },
});

export default Found;
