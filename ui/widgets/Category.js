import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Category = ({text, selected, setSelected, id}) => {
  return (
    <Pressable
      style={[
        {borderBottomColor: selected === id ? '#FF3100' : '#f2f2f2'},
        styles.loginOptionButton,
      ]}
      onPress={() => {
        setSelected(id);
      }}
      children={({pressed}) => (
        <Text style={[{color: pressed ? '#4f4f4f' : '#000'}, {fontSize: 16}]}>
          {text}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
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

export default Category;
