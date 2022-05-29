import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Text, ScrollView, Image} from 'react-native';
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
import Category from '../widgets/Category';

const Food = ({route, navigation}) => {
  const [foodData, setFoodData] = useState([]);
  const pressFunction = () => {};
  const backButton = () => {
    navigation.goBack();
  };
  const axios = require('axios');
  const {name} = route.params;
  async function fetchData() {
    console.log(
      `https://api.spoonacular.com/food/menuItems/search?apiKey=0cad765dd1604398baf3bd424f260df8&query=${name}&number=1`,
    );
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/menuItems/search?apiKey=0cad765dd1604398baf3bd424f260df8&query=${name}&number=1`,
      );
      data = await response.data.menuItems;
      console.log(data);
      setFoodData(data);
      console.log(foodData.title);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    console.log(foodData);
  }, []);
  return foodData.map(elem => (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <BacknHeading title={elem.title} backButton={backButton} />
      </View>
      <View style={styles.view2}>
        <Image
          source={{
            uri: elem.image,
          }}
          style={styles.image}
        />
        {/* <Pressable
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
          /> */}
      </View>
      <CButton title="Add to Cart" pressFunction={pressFunction} />
    </View>
  ));
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
  image: {
    height: 200,
    width: 200,
  },
});

export default Food;
