import React, {useState} from 'react';
import LoginSignup from '../widgets/LoginSignup';
import Signup from '../widgets/Signup';
import Login from '../widgets/Login';
import Button from '../widgets/Button';
import {View, StyleSheet, Text, Image} from 'react-native';
import FoodCard from '../widgets/FoodCard';
import ForYou from './ForYou';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import profile from '../../assets/profile.png';
import orders from '../../assets/orders.png';
import promo from '../../assets/promo.png';
import policy from '../../assets/policy.png';
import security from '../../assets/security.png';
import arrow from '../../assets/arrow.png';

export default Menu = ({navigation}) => {
  const styles = StyleSheet.create({
    basicLayout: {
      backgroundColor: '#ff3100',
      flex: 1,
      position: 'relative',
    },
    main: {
      flex: 1,
      //   height: 562,
      //   width: 260,
      marginRight: -1200,
      borderRadius: 30,
      backgroundColor: '#fff',
      //   position: 'absolute',
      //   top: 156,
      //   left: 210,
      shadowColor: '#fff',
      shadowOffset: {
        width: -30,
        height: 30,
      },
      shadowOpacity: 0.3,
      shadowRadius: 0,
      elevation: 18,
      transform: [{scale: 0.7}],
    },
    menu: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'transparant',
    },
    menuOptions: {
      margin: 20,
      marginLeft: 30,
      width: 200,
    },
    br: {
      width: 132,
      height: 0.4,
      backgroundColor: '#fff',
      marginLeft: 60,
    },
    mOption: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 200,
    },
    text: {
      marginLeft: 20,
    },
    menu1: {
      marginTop: 152,
    },
    signout: {
      marginTop: 230,
      margin: 20,
      marginLeft: 30,
      width: 200,
    },
    sout: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 200,
    },
    forYou: {
      width: '100%',
      height: '100%',
    },
  });
  const [selected, setSelected] = useState(1);
  // const pressFunction = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={styles.basicLayout}>
      <Pressable
        onPress={() => navigation.navigate('ForYou')}
        style={styles.forYou}
        children={() => (
          <View style={styles.main}>
            <ForYou />
          </View>
        )}
      />

      <View style={styles.menu}>
        <View style={styles.menu1}>
          <Pressable
            style={styles.menuOptions}
            children={({pressed}) => (
              <View style={styles.mOption}>
                <Image source={profile} />
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#fff'},
                    {fontSize: 17},
                    {fontWeight: '600'},
                    styles.text,
                  ]}>
                  Profile
                </Text>
              </View>
            )}
          />
          <View style={styles.br}></View>
          <Pressable
            style={styles.menuOptions}
            children={({pressed}) => (
              <View style={styles.mOption}>
                <Image source={orders} />
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#fff'},
                    {fontSize: 17},
                    {fontWeight: '600'},
                    styles.text,
                  ]}>
                  Orders
                </Text>
              </View>
            )}
          />
          <View style={styles.br}></View>
          <Pressable
            style={styles.menuOptions}
            children={({pressed}) => (
              <View style={styles.mOption}>
                <Image source={promo} />
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#fff'},
                    {fontSize: 17},
                    {fontWeight: '600'},
                    styles.text,
                  ]}>
                  Offer and Promo
                </Text>
              </View>
            )}
          />
          <View style={styles.br}></View>
          <Pressable
            style={styles.menuOptions}
            children={({pressed}) => (
              <View style={styles.mOption}>
                <Image source={policy} />
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#fff'},
                    {fontSize: 17},
                    {fontWeight: '600'},
                    styles.text,
                  ]}>
                  Privacy Policy
                </Text>
              </View>
            )}
          />
          <View style={styles.br}></View>
          <Pressable
            style={styles.menuOptions}
            children={({pressed}) => (
              <View style={styles.mOption}>
                <Image source={security} />
                <Text
                  style={[
                    {color: pressed ? '#4f4f4f' : '#fff'},
                    {fontSize: 17},
                    {fontWeight: '600'},
                    styles.text,
                  ]}>
                  Security
                </Text>
              </View>
            )}
          />
        </View>
        <Pressable
          style={styles.signout}
          children={({pressed}) => (
            <View style={styles.sout}>
              <Text
                style={[
                  {color: pressed ? '#4f4f4f' : '#fff'},
                  {fontSize: 17},
                  {fontWeight: '600'},
                  {marginRight: 10},
                ]}>
                Sign-Out
              </Text>
              <Image source={arrow} />
            </View>
          )}
        />
      </View>
    </View>
  );
};
