import React, {createContext, useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import MFoodCard from '../widgets/MFoodCard';
import BacknHeading from '../widgets/BacknHeading';
import MainHeader from '../widgets/MainHeader';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {NativeScreenNavigationContainer} from 'react-native-screens';
import ForYouFooter from '../widgets/ForYouFooter';
import searchIcon from '../../assets/search.png';
import Carousel from '../widgets/Carousel';
import Category from '../widgets/Category';
import FoodCard from '../widgets/MFoodCard';
import Search from './Search';
import {OnNavClickContext} from '../../App';
import food from '../../data';

// export const toggleWishlistContext = createContext();

const ForYou = ({route, navigation}) => {
  const axios = require('axios');
  const [search, setSearch] = React.useState(null);
  const [selected, setSelected] = React.useState(0);
  const [foodData, setFoodData] = React.useState([]);
  const [cartData, setCartData] = React.useState([]);
  const [wishList, setWishList] = React.useState([]);
  const foodCategory = [
    'Breakfast',
    'Appetizer',
    'Salad',
    'Soup',
    'SideDish',
    'MainCourse',
    'Bread',
    'Dessert',
    'Sauce',
    'Fingerfood',
    'Beverage',
  ];
  const onNavClick = useContext(OnNavClickContext);
  let categoryElement = [];
  const menuClick = () => {
    // navigation.navigate('Menu');
    onNavClick();
  };
  const cartClick = () => {
    navigation.navigate('Cart');
  };
  const pressFunction = component => {
    if (component === 'History') {
      navigation.navigate(component, {
        id: 1,
      });
    } else if (component === 'WishList') {
      navigation.navigate(component, {
        wishList: wishList,
        itemClick: itemClick,
      });
    } else {
      navigation.navigate(component);
    }
  };
  const resultOnClickFunction = elem => {
    navigation.navigate('Food', {name: elem.title});
    setModalVisible(false);
  };

  const itemClick = id => {
    navigation.navigate('FoodPage', {
      id: id,
      addToCart: addToCart,
      toggleWishlist: toggleWishlist,
    });
    setModalVisible(false);
  };

  const addToCart = id => {
    setCartData(prevState => [...prevState, id]);
    // newState = [...prevState]
    // return newState.push(id)
  };

  const toggleWishlist = id => {
    setWishList(prevState => {
      let wl = [...prevState];
      if (wl.includes(id)) {
        i = wl.indexOf(id);
        wl.splice(i, 1);
      } else {
        wl.push(id);
      }
      console.log(wl);
      return wl;
    });
  };

  const createCategoryElement = () => {
    categoryElement = foodCategory.map(elem => (
      <Category
        text={elem}
        selected={selected}
        setSelected={setSelected}
        id={foodCategory.indexOf(elem)}
      />
    ));
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

  // async function fetchData() {
  //   try {
  //     const response = await axios.get(
  //       `https://api.spoonacular.com/food/menuItems/search?apiKey=0cad765dd1604398baf3bd424f260df8&query=${foodCategory[selected]}&number=10`,
  //     );
  //     data = response.data.menuItems;
  //     console.log(data);
  //     setFoodData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function fetchData() {
    try {
      data = food[foodCategory[selected]].menuItems;
      setFoodData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    createCategoryElement();
  }, [selected]);

  const [modalVisible, setModalVisible] = useState(false);
  return (
    // <toggleWishlistContext.Provider value={toggleWishlist}>
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.outerModalView}>
              <View style={styles.innerModalView}>
                {/* <Pressable
                  onPress={() => setModalVisible(false)}
                  children={() => (
                    <>
                      <Text>X</Text>
                    </>
                  )}
                /> */}
                <Search
                  backButton={() => setModalVisible(false)}
                  pressFunction={itemClick}
                />
              </View>
            </View>
          </Modal>
          <Pressable
            onPress={() => setModalVisible(true)}
            children={() => (
              <>
                <View style={styles.inputInnerView} pointerEvents="none">
                  <Image source={searchIcon} />
                  <TextInput
                    style={styles.input}
                    onChangeText={setSearch}
                    value={search}
                    placeholder="Search"
                  />
                </View>
              </>
            )}
          />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[{maxHeight: 60}]}>
          <View style={styles.loginOption}>
            {foodCategory.map(elem => (
              <Category
                text={elem}
                selected={selected}
                setSelected={setSelected}
                id={foodCategory.indexOf(elem)}
                key={foodCategory.indexOf(elem)}
              />
            ))}
          </View>
        </ScrollView>
        <Carousel Entries={foodData} itemClick={itemClick} />
        <ForYouFooter pressFunction={pressFunction} wishList={wishList} />
      </View>
    </View>
    // </toggleWishlistContext.Provider>
  );
};

const windowHeight = Dimensions.get('window').height;
const modalHeight = windowHeight - 145;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  view2: {
    flex: 6,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // shadowOpacity: 0.06,
    // shadowRadius: 11.95,
    // elevation: 18,
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
    zIndex: 1,
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
  outerModalView: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerModalView: {
    marginTop: 145,
    height: modalHeight,
    width: windowWidth,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});

export default ForYou;
