import React, { useLayoutEffect } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native'; // Import Dimensions
import { View, Image } from 'native-base';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export const RamadanTimings = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Home', // Set the back button text to 'Home'
    });
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../RamadanTimings/img/ramadan2024.jpg')}
        alt="Ramadan Timings Bg"
        style={styles.image}
        resizeMode="contain" // Set resizeMode to contain
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2D2C5',
    paddingHorizontal: 10, // Add horizontal padding
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width - 20, // Set width to screen width - 20px padding
  },
});
