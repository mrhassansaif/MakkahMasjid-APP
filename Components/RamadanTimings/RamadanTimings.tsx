import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image } from 'native-base';
import RamadanTable from './RamadanTable';

export const RamadanTimings = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imagediv}>
        <Image
          source={require('../RamadanTimings/img/ramadanKareem.jpg')}
          style={styles.img}
          alt="Ramadan Timings Bg"
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <RamadanTable />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2D2C5',
  },
  imagediv: {
    width: '100%',
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 190,
  },
  scrollView: {
    flex: 1,
    marginTop: 20, // Adjust as needed
  },
});
