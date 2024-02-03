import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, Text} from 'native-base';

export const Donate = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.alarmingText}>
        Kindly select from the available methods listed below, or feel free to
        reach out to us via phone or text at 972-897-2437 for assistance. Thank
        you.
      </Text>
      <View style={styles.donationIconsContainer}>
        <View style={styles.row1}>
        <Image
            source={require('../Donate/img/pp.png')}
            style={styles.icon1}
            alt="Paypal Logo"
          />
        <Image
            source={require('../Donate/img/zell.png')}
            style={styles.icon1}
            alt="Zelle Logo"
          />
        </View>
        <View style={styles.row2}>
        <Image
            source={require('../Donate/img/ca.png')}
            style={styles.icon2}
            alt="Paypal Logo"
          />
        <Image
            source={require('../Donate/img/v.png')}
            style={styles.icon2}
            alt="Zelle Logo"
          />
        </View>
      </View>
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
  alarmingText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 25,
  },
  donationIconsContainer:{
    // borderWidth: 2,
    // borderColor: 'blue',
    width: '100%',
    marginTop: 10,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20
  },
  icon1: {
    width: 150,
    height: 60,
    borderRadius: 10,
  },
  icon2: {
    width: 150,
    height: 90,
    borderRadius: 10,
  },
});
