import React from 'react';
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

const App = () => {
  return (
    <>
      <Note />
    </>
  );
};

export default App;
