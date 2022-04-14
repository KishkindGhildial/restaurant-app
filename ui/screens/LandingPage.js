import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import face1 from '../../assets/face1.png';
import face2 from '../../assets/face2.png';
import MiniLogo from '../../assets/MiniLogo.png';

export default LandingPage = () => {
  return (
    <>
      <View style={styles.barStyle}></View>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="light-content"
        showHideTransition="fade"
      />
      <SafeAreaView style={styles.basicLayout}>
        <View style={styles.box1}>
          <View style={styles.logo}>
            <Image source={MiniLogo} />
          </View>
          <Text style={styles.heading}>Toon Restaurant</Text>
        </View>
        <View style={styles.box2}>
          <Image
            source={face1}
            style={[
              styles.face1Style,
              {
                transform: [{scale: 0.95}],
              },
            ]}
          />
          <Image
            source={face2}
            style={[
              styles.face2Style,
              {
                transform: [{scale: 0.95}],
              },
            ]}
          />
        </View>
        <View style={styles.buttonView}>
          {/* <Pressable
            style={({pressed}) => [
              {
                color: pressed ? '#FF3128' : 'white',
              },
              styles.buttonStyle,
            ]}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable> */}
          <Pressable
            children={({pressed}) => (
              <Text
                style={[
                  {color: pressed ? '#FF9F8F' : '#FF3128'},
                  styles.buttonText,
                ]}>
                Get Started
              </Text>
            )}
            style={styles.buttonStyle}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  basicLayout: {
    backgroundColor: '#FF3128',
    // marginTop: 32,
    paddingHorizontal: 24,
    // height: '100%',
    flex: 1,
  },
  barStyle: {
    backgroundColor: '#1f1f1f',
    height: 44,
  },
  face1Style: {
    position: 'absolute',
    left: -10,
    top: 0,
  },
  face2Style: {
    position: 'absolute',
    right: -7,
    top: 100,
    zIndex: -1,
  },
  box1: {
    flex: 2,
    paddingTop: 10,
    paddingHorizontal: 34,
  },
  box2: {
    position: 'relative',
    top: -20,
    flex: 3,
    backgroundColor: 'transparent',
  },

  heading: {
    fontSize: 65,
    color: '#ffffff',
    fontWeight: '400',
    lineHeight: 100,
  },
  logo: {
    height: 73,
    width: 73,
    borderRadius: 100,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  buttonView: {
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#ffffff',
    height: 70,
    width: 314,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
