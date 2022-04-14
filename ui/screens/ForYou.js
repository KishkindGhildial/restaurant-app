import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  TextInput,
} from 'react-native';
import MFoodCard from '../widgets/MFoodCard';
import BacknHeading from '../widgets/BacknHeading';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Search = () => {
  const [search, setSearch] = React.useState(null);
  const [selected, setSelected] = React.useState(1);
  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <BacknHeading title={'For You'} />
      </View>
      <View style={styles.view2}>
        <Text style={styles.heading}>Delicious {'\n'}food for you</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Search"
          />
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardView}>
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
            <MFoodCard />
          </View>
        </ScrollView>
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
  input: {
    backgroundColor: '#eee',
    width: 314,
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 17,
    marginBottom: 20,
  },
  inputView: {
    width: '100%',
    alignItems: 'center',
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

export default Search;
