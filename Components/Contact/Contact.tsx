import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Linking,
} from 'react-native';
import {View, Text} from 'native-base';
import {Call, Sms, Location, Message} from 'iconsax-react-native';

export const Contact = () => {
  const handlePhonePress = () => {
    Linking.openURL('tel:+19726754000');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:ghulamjangda@gmail.com');
  };

  const handleContactUsPress = () => {
    Linking.openURL('https://makkahmasjid.net/contact-us/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableHighlight onPress={handlePhonePress} underlayColor="#DDDDDD">
        <View style={styles.row}>
          <Call size={32} color="#FF8A65" variant="Bold" />
          <Text style={styles.text}>
            Phone number:
            <Text style={{textDecorationLine: 'underline', color: '#42a8c3'}}>
              {' '}
              +1 972 675 4000
            </Text>
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={handleEmailPress} underlayColor="#DDDDDD">
        <View style={styles.row}>
          <Sms size={32} color="#FF8A65" variant="Bold" />
          <Text style={styles.text}>
            Email:
            <Text style={{textDecorationLine: 'underline', color: '#42a8c3'}}>
              {' '}
              ghulamjangda@gmail.com
            </Text>
          </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.row}>
        <Location size={32} color="#FF8A65" variant="Bold" />
        <Text style={styles.text}>
          Address:
          <Text style={{color: '#42a8c3'}}>
            {' '}
            3301 W Buckingham Rd. Garland TX 75042
          </Text>
        </Text>
        {/* <Text style={styles.text}></Text> */}
      </View>
      <Text style={styles.infoText}>
        Wants to discuss something. Feel free to message us your matter.
      </Text>
      <TouchableHighlight
        onPress={handleContactUsPress}
        underlayColor="#DDDDDD">
        <View style={styles.row}>
          <Message size={32} color="#FF8A65" variant="Bold" />
          <Text style={styles.text}>Contact Us</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#F2D2C5',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    marginHorizontal: 20,
    backgroundColor: '#F0F0F0',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
});
