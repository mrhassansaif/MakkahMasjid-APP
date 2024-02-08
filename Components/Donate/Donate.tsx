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
          <View style={styles.iconContainer}>
            <Image
              source={require('../Donate/img/pp.png')}
              style={styles.icon1}
              alt="Paypal Logo"
            />
            <Text style={styles.iconTitle}>Paypal</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require('../Donate/img/z.png')}
              style={styles.icon1}
              alt="Zelle Logo"
            />
            <Text style={styles.iconTitle}>Zelle</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../Donate/img/ca.png')}
              style={styles.icon2}
              alt="CashApp Logo"
            />
            <Text style={styles.iconTitle}>CashApp</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require('../Donate/img/v.png')}
              style={styles.icon2}
              alt="Venmo Logo"
            />
            <Text style={styles.iconTitle}>Venmo</Text>
          </View>
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
  donationIconsContainer: {
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
    marginVertical: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    width: '40%',
  },
  icon1: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
  },
  icon2: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  iconTitle: {
    marginTop: 5,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2
  },
});
