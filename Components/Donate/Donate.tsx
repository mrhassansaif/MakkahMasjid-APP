import React from 'react';
import {StyleSheet, Linking, TouchableOpacity} from 'react-native';
import {View, Image, Text} from 'native-base';

export const Donate = () => {
  const handlePaypalIconPress = () => {
    // Open YouTube link
    Linking.openURL('https://www.paypal.com/qrcodes/managed/919aa092-be5e-4cef-a6a1-31ef0f19f268?utm_source=hawk_quick_link');
  };
  const handleZelleIconPress = () => {
    // Open YouTube link
    Linking.openURL('https://enroll.zellepay.com/qr-codes?data=ewogICJuYW1lIiA6ICJJU0xBTUlDIERJUkVDVElPTlMgJiBFTkhBTkNFTUVOVCBBU1NPQyBEIiwKICAidG9rZW4iIDogIm1ha2thaG1hc2ppZGdhcmxhbmRAZ21haWwuY29tIiwKICAiYWN0aW9uIiA6ICJwYXltZW50Igp9');
  };
  const handleCashAppIconPress = () => {
    // Open YouTube link
    Linking.openURL('http://$MakkahMasjid');
  };
  const handleVenmoIconPress = () => {
    // Open YouTube link
    Linking.openURL('http://@MakkahMasjid');
  };

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
            <TouchableOpacity onPress={handlePaypalIconPress}>
              <Image
                source={require('../Donate/img/pp.png')}
                style={styles.icon1}
                alt="Paypal Logo"
              />
            </TouchableOpacity>
            <Text style={styles.iconTitle}>Paypal</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleZelleIconPress}>
              <Image
                source={require('../Donate/img/z.png')}
                style={styles.icon1}
                alt="Zelle Logo"
              />
            </TouchableOpacity>

            <Text style={styles.iconTitle}>Zelle</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleCashAppIconPress}>
              <Image
                source={require('../Donate/img/ca.png')}
                style={styles.icon2}
                alt="CashApp Logo"
              />
            </TouchableOpacity>

            <Text style={styles.iconTitle}>CashApp</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleVenmoIconPress}>
              <Image
                source={require('../Donate/img/v.png')}
                style={styles.icon2}
                alt="Venmo Logo"
              />
            </TouchableOpacity>

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
    letterSpacing: 2,
  },
});
