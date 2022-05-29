import React, {useContext, useEffect, useState} from 'react';
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
import FoodHeader from '../widgets/FoodHeading';
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
import heart from '../../assets/heartButton.png';
import FoodImageCarousel from '../widgets/FoodImageCarousel';
import CButton from '../widgets/Button';
import {add} from 'react-native-reanimated';

const ForYou = ({navigation, route}) => {
  const [foodData, setFoodData] = React.useState([]);
  const onNavClick = useContext(OnNavClickContext);
  let categoryElement = [];
  const menuClick = () => {
    // navigation.navigate('Menu');
    onNavClick();
  };
  const backClick = () => {
    navigation.goBack();
  };

  let {id, addToCart, toggleWishlist} = route.params;
  //   let id = 243991;

  function fetchData() {
    try {
      for (const cat in food) {
        for (const item in food[cat].menuItems) {
          if (food[cat].menuItems[item].id === id) {
            setFoodData(food[cat].menuItems[item]);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  // async function fetchData() {
  //   try {
  //     Object.values(food).forEach(category => {
  //       category.menuItems.forEach(item => {
  //         if (item.id === id) {
  //           setFoodData(menuItem);
  //         }
  //       })
  //     })
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const addToWishlist = () => {
  //   console.log('hello');
  // };

  console.log(foodData);

  useEffect(() => {
    fetchData();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.basicLayout}>
        <View style={styles.view1}>
          <FoodHeader
            title={'For You'}
            menuClick={menuClick}
            cartClick={backClick}
          />
        </View>
        <View style={styles.view2}>
          <View style={styles.imageView}>
            <Image source={{uri: foodData.image}} style={styles.foodStyle} />
            {/* <FoodImageCarousel Entries={foodData} /> */}
          </View>
          <View style={styles.headingView}>
            <Text style={styles.heading}>{foodData.title}</Text>
            <View style={styles.like}>
              <Pressable
                onPress={() => {
                  toggleWishlist(foodData.id);
                }}
                children={() => <Image source={heart} />}
              />
            </View>
          </View>
        </View>
      </View>
      <CButton title={'Add To Cart'} pressFunction={addToCart} />
    </>
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
  },
  basicLayout: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    borderRadius: 30,
  },
  heading: {
    fontSize: 28,
    // marginLeft: 40,
    // marginVertical: 20,
    width: '60%',
    textAlign: 'center',
  },
  foodStyle: {
    width: 242,
    height: 242,
    borderRadius: 30,
    marginTop: 30,
  },
  imageView: {
    width: '100%',
    height: 300,
    alignItems: 'center',
  },
  headingView: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  like: {
    position: 'absolute',
    top: 6,
    left: 40,
  },
});

export default ForYou;
