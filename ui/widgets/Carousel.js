import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MFoodCard from './MFoodCard';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = ({Entries, itemClick}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    console.log(Entries);
    setEntries(Entries);
  }, [Entries]);

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          itemClick(item.id);
        }}
        children={() => (
          <View style={styles.carousel}>
            <MFoodCard
              food={item.image}
              heading={item.title}
              chain={item.restaurantChain}
            />
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.seeMoreContainer} onPress={goForward}>
        <Text style={styles.seeMore}>See More</Text>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 150}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -20,
  },
  carousel: {
    marginLeft: -50,
  },
  seeMoreContainer: {
    alignItems: 'flex-end',
  },
  seeMore: {
    marginRight: 30,
    color: '#FF3100',
  },
});
