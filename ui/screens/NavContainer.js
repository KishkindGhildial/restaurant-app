import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Menu from './Menu';

const NavContainer = ({navToggle, children}) => {
  const translateValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (navToggle) {
      openNav();
    } else {
      closeNav();
    }
  }, [navToggle]);

  const openNav = () => {
    Animated.parallel([
      Animated.timing(translateValue, {
        toValue: 250,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 0.65,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeNav = () => {
    Animated.parallel([
      Animated.timing(translateValue, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <Menu />
      <Animated.View
        style={[
          styles.basicLayout,
          {transform: [{scale: scaleValue}, {translateX: translateValue}]},
        ]}>
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  basicLayout: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
  },
});

export default NavContainer;
