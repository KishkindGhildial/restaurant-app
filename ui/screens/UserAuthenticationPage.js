import React, {useState} from 'react';
import LoginSignup from '../widgets/LoginSignup';
import Signup from '../widgets/Signup';
import Login from '../widgets/Login';
import Button from '../widgets/Button';
import {View, StyleSheet} from 'react-native';
import FoodCard from '../widgets/FoodCard';

export default UserAuthenticationPage = () => {
  const styles = StyleSheet.create({
    view1: {
      flex: 7,
    },
    view2: {
      flex: 8,
    },
    basicLayout: {
      backgroundColor: '#f2f2f2',
      flex: 1,
    },
  });
  const [selected, setSelected] = useState(1);

  // const changeLoginSignup = option => {
  //   setSelected(option);
  // };

  return (
    <View style={styles.basicLayout}>
      <View style={styles.view1}>
        <LoginSignup
          changeLoginSignup={option => setSelected(option)}
          selected={selected}
        />
      </View>
      <View style={styles.view2}>
        {selected === 1 ? <Login /> : <Signup />}
      </View>
      <Button title="Get Started" />
    </View>
  );
};
