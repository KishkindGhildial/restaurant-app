import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import MFoodCard from '../widgets/MFoodCard';
import BacknHeading from '../widgets/BacknHeading';
import MainHeader from '../widgets/MainHeader';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {NativeScreenNavigationContainer} from 'react-native-screens';
import ForYouFooter from '../widgets/ForYouFooter';
import searchIcon from '../../assets/search.png';
import Carousel from '../widgets/Carousel';

const ForYou = ({navigation}) => {
  const axios = require('axios');
  const [search, setSearch] = React.useState(null);
  const [selected, setSelected] = React.useState(1);
  const menuClick = () => {
    // navigation.toggleDrawer();
    navigation.navigate('Menu');
  };
  const cartClick = () => {
    navigation.navigate('Cart');
  };
  const pressFunction = component => {
    if (component === 'History') {
      navigation.navigate(component, {
        id: 1,
      });
    } else {
      navigation.navigate(component);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch('www.themealdb.com/api/json/v1/1/categories.php');
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  async function fetchData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <MainHeader
          title={'For You'}
          menuClick={menuClick}
          cartClick={cartClick}
        />
      </View>
      <View style={styles.view2}>
        <Text style={styles.heading}>Delicious {'\n'}food for you</Text>
        <View style={styles.inputView}>
          <View style={styles.inputInnerView}>
            <Pressable
              onPress={() =>
                navigation.navigate('Search', {
                  query: search,
                })
              }
              children={() => <Image source={searchIcon} />}
            />
            <TextInput
              style={styles.input}
              onChangeText={setSearch}
              value={search}
              placeholder="Search"
            />
          </View>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[{maxHeight: 60}]}>
          <View style={styles.loginOption}>
            <Pressable
              style={[
                {borderBottomColor: selected == 1 ? '#FF3100' : '#f2f2f2'},
                styles.loginOptionButton,
              ]}
              onPress={() => {
                setSelected(1);
              }}
              children={({pressed}) => (
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#000'},
                    {fontSize: 16},
                  ]}>
                  Foods
                </Text>
              )}
            />
            <Pressable
              style={[
                {borderBottomColor: selected == 2 ? '#FF3100' : '#f2f2f2'},
                styles.loginOptionButton,
              ]}
              onPress={() => {
                setSelected(2);
              }}
              children={({pressed}) => (
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#000'},
                    {fontSize: 16},
                  ]}>
                  Drinks
                </Text>
              )}
            />
            <Pressable
              style={[
                {borderBottomColor: selected == 3 ? '#FF3100' : '#f2f2f2'},
                styles.loginOptionButton,
              ]}
              onPress={() => {
                setSelected(3);
              }}
              children={({pressed}) => (
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#000'},
                    {fontSize: 16},
                  ]}>
                  Snacks
                </Text>
              )}
            />
            <Pressable
              style={[
                {borderBottomColor: selected == 4 ? '#FF3100' : '#f2f2f2'},
                styles.loginOptionButton,
              ]}
              onPress={() => {
                setSelected(4);
              }}
              children={({pressed}) => (
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#000'},
                    {fontSize: 16},
                  ]}>
                  Sauce
                </Text>
              )}
            />
            <Pressable
              style={[
                {borderBottomColor: selected == 5 ? '#FF3100' : '#f2f2f2'},
                styles.loginOptionButton,
              ]}
              onPress={() => {
                setSelected(5);
              }}
              children={({pressed}) => (
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#000'},
                    {fontSize: 16},
                  ]}>
                  Dessert
                </Text>
              )}
            />
            <Pressable
              style={[
                {borderBottomColor: selected == 6 ? '#FF3100' : '#f2f2f2'},
                styles.loginOptionButton,
              ]}
              onPress={() => {
                setSelected(6);
              }}
              children={({pressed}) => (
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#000'},
                    {fontSize: 16},
                  ]}>
                  Specials
                </Text>
              )}
            />
          </View>
        </ScrollView>

        {/* <ScrollView horizontal={true}>
          <View style={styles.option}>
            <Text style={styles.heading}>Delicious {'\n'}food for you</Text>
            <Text style={styles.heading}>Delicious {'\n'}food for you</Text>
            <Text style={styles.heading}>Delicious {'\n'}food for you</Text>
            <Text style={styles.heading}>Delicious {'\n'}food for you</Text>
          </View>
        </ScrollView> */}
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardView}>
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
          </View>
        </ScrollView> */}
        <Carousel />
        <ForYouFooter pressFunction={pressFunction} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  view2: {
    flex: 6,
    backgroundColor: '#f2f2f2',
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
  basicLayout: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  button: {
    fontSize: 17,
    marginHorizontal: 15,
  },
  heading: {
    fontSize: 34,
    marginLeft: 40,
    marginVertical: 20,
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
  },
  inputInnerView: {
    backgroundColor: '#eee',
    width: 314,
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 17,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: 230,
  },
  loginOption: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    marginLeft: 50,
  },
  loginOptionButton: {
    width: 87,
    alignItems: 'center',
    textAlign: 'center',

    paddingTop: 5,
    borderBottomWidth: 3,
  },
});

export default ForYou;
