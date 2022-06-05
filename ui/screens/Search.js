import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import BacknHeading from '../widgets/BacknHeading';
import Found from '../widgets/Found';
import NotFound from '../widgets/NotFound';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {NavigationContainer} from '@react-navigation/native';
import food from '../../data';
import chevronL from '../../assets/chevronL.png';

const Search = ({backButton, pressFunction}) => {
  // const backButton = () => {
  //   navigation.goBack();
  // };
  // const {query} = route.params;
  const axios = require('axios');

  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState('');

  // async function fetchData() {
  //   try {
  //     const response = await axios.get(
  //       `https://api.spoonacular.com/food/menuItems/suggest?apiKey=0cad765dd1604398baf3bd424f260df8&query=${search}&number=10`,
  //     );
  //     data = await response.data.results;
  //     console.log(data);
  //     setSearchResult(data);
  //     console.log(searchResult);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function fetchData() {
    let data = [];
    try {
      for (const cat in food) {
        for (const item in food[cat].menuItems) {
          let title = food[cat].menuItems[item].title;
          if (title.includes(search)) {
            data.push(food[cat].menuItems[item]);
          }
        }
      }
      console.log(data);
      setSearchResult(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (search) {
      setTimeout(fetchData, 300);
      // fetchData();
    }
  }, [search]);

  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <View style={styles.view}>
          <View style={styles.header}>
            <Pressable
              onPress={() => {
                backButton();
              }}
              children={({pressed}) => (
                // <Text
                //   style={[
                //     {color: pressed ? '#FF9F8F' : '#FF3128'},
                //     {fontSize: 16},
                //     styles.button,
                //   ]}>
                //   {`<`}
                // </Text>
                <Image source={chevronL} style={styles.button} />
              )}
            />
            <View style={styles.headingView}>
              <TextInput
                style={styles.input}
                onChangeText={setSearch}
                value={search}
                placeholder="Search"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        {/* {query === '' ? <NotFound /> : <Found data={searchResult} />} */}
        <ScrollView style={[{flex: 1}]}>
          {searchResult.map(elem => (
            <Pressable
              onPress={() => {
                pressFunction(elem.id);
              }}
              key={elem.id}
              children={({pressed}) => (
                <View style={[{alignItems: 'center'}]}>
                  <View
                    style={[
                      {
                        backgroundColor:
                          searchResult.indexOf(elem) % 2 === 0
                            ? '#f2f2f2'
                            : '#fff',
                      },
                      styles.suggestions,
                    ]}>
                    <Text
                      style={[
                        {color: pressed ? '#626262' : '#000000'},
                        {fontSize: 16},
                        styles.suggestionsText,
                      ]}>
                      {elem.title}
                    </Text>
                  </View>
                  {/* <View style={styles.br}></View> */}
                </View>
              )}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 60,
  },
  view2: {
    flex: 6,
    borderRadius: 60,
    marginVertical: 20,
  },
  basicLayout: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 60,
  },
  view: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 32,
    // paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    fontSize: 17,
  },
  heading: {
    fontSize: 17,
    // marginHorizontal: 15,
    width: '100%',
    textAlign: 'center',
  },
  headingView: {
    width: '80%',
    height: 60,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
  },
  suggestions: {
    height: 80,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  suggestionsText: {
    marginHorizontal: 20,
    fontSize: 18,
    width: 340,
  },
  br: {
    borderBottomColor: '#FF3128',
    borderBottomWidth: 1,
    width: 200,
  },
});

export default Search;
