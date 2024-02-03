import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import NamazTable from './NamazTable';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();

  const handleDonateIconPress = () => {
    navigation.navigate('Donate' as never); // explicitly type as 'never'
  };

  const handleYoutubeIconPress = () => {
    // Open YouTube link
    Linking.openURL('https://www.youtube.com/@makkahmasjid6399');
  };

  const handleDuaIconPress = () => {
    navigation.navigate('Dua' as never); // explicitly type as 'never'
  };

  return (
    <View style={styles.container}>
      <View style={styles.div1}>
        <View style={styles.imagediv}>
          <Image
            source={require('../Home/img/MasjidC.png')}
            style={styles.img}
            alt="Makkah Masjid Logo"
          />
        </View>

        <View style={styles.iconscontainer}>
          <View style={styles.iconsrow1}>
            <View style={styles.iconWithText}>
              <TouchableOpacity onPress={handleDonateIconPress}>
                <Image
                  source={require('../Home/img/Donate.png')}
                  style={styles.icon}
                  alt=""
                />
              </TouchableOpacity>
              <Text style={styles.iconTitle}>Donate</Text>
            </View>
            <View style={styles.iconWithText}>
              <TouchableOpacity onPress={handleDuaIconPress}>
                <Image
                  source={require('../Home/img/dua.png')}
                  style={styles.icon}
                  alt=""
                />
              </TouchableOpacity>
              <Text style={styles.iconTitle}>Dua</Text>
            </View>
            <View style={styles.iconWithText}>
              <Image
                source={require('../Home/img/Qibla.png')}
                style={styles.icon}
                alt=""
              />
              <Text style={styles.iconTitle}>Qibla</Text>
            </View>
          </View>
          <View style={styles.iconsrow2}>
            <View style={styles.iconWithText}>
              <Image
                source={require('../Home/img/Event.png')}
                style={styles.icon}
                alt=""
              />
              <Text style={styles.iconTitle}>Events</Text>
            </View>
            <View style={styles.iconWithText}>
              <Image
                source={require('../Home/img/Location.png')}
                style={styles.icon}
                alt=""
              />
              <Text style={styles.iconTitle}>Location</Text>
            </View>
            <View style={styles.iconWithText}>
              <TouchableOpacity onPress={handleYoutubeIconPress}>
                <Image
                  source={require('../Home/img/yt.png')}
                  style={styles.icon}
                  alt=""
                />
              </TouchableOpacity>
              <Text style={styles.iconTitle}>Youtube</Text>
            </View>
          </View>
        </View>
      </View>
      <NamazTable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: 2.5,
  },
  div1: {
    width: '99%',
    height: '60%',
    marginBottom: 3,
    alignItems: 'center',
    backgroundColor: '#f2d2c4',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  imagediv: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  img: {
    width: '90%',
    height: 180,
    borderRadius: 20,
  },
  iconscontainer: {
    width: '90%',
    borderWidth: 2,
    backgroundColor: '#F0F0F0',
    borderColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  iconsrow1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 5,
  },
  iconsrow2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 5,
  },
  iconWithText: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  iconTitle: {
    fontSize: 14,
    color: 'black',
  },
});
