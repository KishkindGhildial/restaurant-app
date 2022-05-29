import 'react-native-gesture-handler';
import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, useDrawerStatus} from '@react-navigation/drawer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LandingPage from './ui/screens/LandingPage';
import UserAuthenticationPage from './ui/screens/UserAuthenticationPage';
import Search from './ui/screens/Search';
import ForYou from './ui/screens/ForYou';
import History from './ui/screens/History';
import NoInternet from './ui/screens/NoInternet';
import OrderComplete from './ui/screens/OrderComplete';
import MyOffers from './ui/screens/MyOffers';
import Payment from './ui/screens/Payment';
import Delivery from './ui/screens/Delivery';
import Menu from './ui/screens/Menu';
import Note from './ui/screens/Note';
import Cart from './ui/screens/Cart';
import Profile from './ui/screens/Profile';
import CustomNav from './ui/widgets/CustomNav';
import Food from './ui/screens/Food';
import NavContainer from './ui/screens/NavContainer';
import MainContent from './ui/screens/MainContent';
import Header from './ui/screens/Header';
import FoodPage from './ui/screens/FoodPage';
import WishList from './ui/screens/WishList';

const Stack = createNativeStackNavigator();
export const OnNavClickContext = React.createContext();

const App = () => {
  [navToggle, setNavToggle] = useState(false);
  [screenName, setScreenName] = useState('');
  const onNavClick = () => {
    setNavToggle(prevState => !prevState);
  };
  console.log(navToggle);
  return (
    <>
      <OnNavClickContext.Provider value={onNavClick}>
        <NavContainer navToggle={navToggle}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName={'LandingPage'}>
              <Stack.Screen name="LandingPage" component={LandingPage} />
              <Stack.Screen
                name="UserAuthenticationPage"
                component={UserAuthenticationPage}
              />
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="ForYou" component={ForYou} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="Delivery" component={Delivery} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="OrderComplete" component={OrderComplete} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="MyOffers" component={MyOffers} />
              <Stack.Screen name="History" component={History} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Food" component={Food} />
              <Stack.Screen name="FoodPage" component={FoodPage} />
              <Stack.Screen name="WishList" component={WishList} />
            </Stack.Navigator>
          </NavigationContainer>
        </NavContainer>
      </OnNavClickContext.Provider>
    </>
  );
};

export default App;
