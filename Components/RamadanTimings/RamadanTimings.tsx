import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, Text} from 'native-base';
import RamadanTable from './RamadanTable';

export const RamadanTimings = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imagediv}>
        <Image
          source={require('../RamadanTimings/img/r.png')}
          style={styles.img}
          alt="Ramadan Timings Bg"
        />
      </View>
      <RamadanTable />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2D2C5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagediv: {
    width: 350,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40%',
    marginTop: "20%"
  },
  img: {
    width: 320,
    height: 190,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 30,
  },
});
