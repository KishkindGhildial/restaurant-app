import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.view}>
      <View style={styles.inputStyle}>
        <Text style={styles.lable}>Email Address</Text>
        <TextInput
          style={[styles.textInputStyle, {fontSize: 16}]}
          placeholder={'Email'}
          value={email}
          onChangeText={newText => setEmail(newText)}
        />
      </View>
      <View style={styles.inputStyle}>
        <Text style={styles.lable}>Password</Text>
        <TextInput
          style={[styles.textInputStyle, {fontSize: 16}]}
          placeholder={'Password'}
          secureTextEntry={true}
          value={password}
          onChangeText={newText => setPassword(newText)}
        />
      </View>
      <View style={styles.forgotPassword}>
        <Pressable
          children={({pressed}) => (
            <Text
              style={[
                {color: pressed ? '#FF9F8F' : '#FF3128'},
                {fontSize: 16},
              ]}>
              Forgot Passcode?
            </Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  textInputStyle: {
    width: 314,
    justifyContent: 'center',
  },
  inputStyle: {
    borderBottomColor: '#5B5B5B',
    borderBottomWidth: 0.5,
    height: 59,
    width: 314,
    justifyContent: 'space-evenly',
    marginBottom: 32,
    transform: [{translateY: -25}],
  },
  lable: {
    color: '#919191',
    fontSize: 15,
  },
  forgotPassword: {
    width: 314,
    justifyContent: 'space-evenly',
    marginBottom: 45,
    transform: [{translateY: -35}],
  },
});

export default Login;
