import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import CButton from '../widgets/Button';
import nohistory from '../../assets/nohistory.png';
import nointernet from '../../assets/nointernet.png';
import noorder from '../../assets/noorder.png';
import noresult from '../../assets/noresult.png';
import food from '../../data';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import emptyWishlist from '../../assets/emptyWishlist.jpeg';

const WishList = ({route, navigation}) => {
  const [foodData, setFoodData] = useState([]);
  const pressFunction = () => {
    navigation.goBack();
  };
  const {wishList, itemClick} = route.params;
  console.log(wishList);

  function fetchData() {
    const data = [];
    try {
      for (const cat in food) {
        for (const item in food[cat].menuItems) {
          if (wishList.includes(food[cat].menuItems[item].id)) {
            data.push(food[cat].menuItems[item]);
            console.log(data);
            setFoodData(data);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // navigation.addListener('didFocus', () => {
    //   fetchData();
    // });
    fetchData();
  }, []);

  return (
    <>
      <View style={styles.basicLayout}>
        <View style={styles.view1}>
          <BacknHeading title={'WishList'} backButton={pressFunction} />
        </View>
        <View style={styles.view2}>
          <ScrollView style={styles.ScrollView}>
            <View style={styles.constainer}>
              <View style={styles.left}>
                {foodData.map((elem, index) =>
                  index % 2 === 0 ? (
                    <Pressable
                      children={() => <FoodCard foodData={elem} />}
                      onPress={() => {
                        itemClick(elem.id);
                      }}
                      key={elem.id}
                      style={styles.card}
                    />
                  ) : null,
                )}
              </View>
              {!foodData.length ? (
                <View style={styles.notFound}>
                  <Image source={emptyWishlist} style={styles.notFoundImage} />
                </View>
              ) : (
                <View style={styles.right}>
                  {foodData.map((elem, index) =>
                    index % 2 !== 0 ? (
                      <Pressable
                        children={() => <FoodCard foodData={elem} />}
                        onPress={() => {
                          itemClick(elem.id);
                        }}
                        key={elem.id}
                        style={styles.card}
                      />
                    ) : null,
                  )}
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  view2: {
    flex: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicLayout: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    marginBottom: 16,
    marginTop: -150,
  },
  text: {
    width: 230,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 20,
    opacity: 0.57,
  },
  ScrollView: {
    flex: 1,
    paddingTop: 30,
    width: '100%',
  },
  left: {},
  right: {
    marginTop: 50,
  },
  constainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  card: {
    marginTop: 30,
  },
  notFound: {
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  notFoundImage: {
    transform: [{scale: 0.75}],
  },
});

export default WishList;
