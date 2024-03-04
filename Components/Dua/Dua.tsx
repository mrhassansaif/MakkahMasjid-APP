import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import Loader from './Loader';

const Dua = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const [loading, setLoading] = useState(true);
  const [randomAyahs, setRandomAyahs] = useState<
    Array<{ english: string; arabic: string }>
  >([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Home', // Set the back button text to 'Home'
    });
  }, [navigation]);

  useEffect(() => {
    const fetchRandomAyahs = async () => {
      try {
        // Check if the stored dua exists and is still valid (less than 24 hours old)
        const storedDua = await AsyncStorage.getItem('randomDua');
        const storedTimestamp = await AsyncStorage.getItem('duaTimestamp');
        const currentTimestamp = Date.now();

        if (
          storedDua &&
          storedTimestamp &&
          currentTimestamp - parseInt(storedTimestamp) < 24 * 60 * 60 * 1000
        ) {
          setRandomAyahs(JSON.parse(storedDua));
          setLoading(false);
        } else {
          const surahNumber = Math.floor(Math.random() * 114) + 1;

          const englishResponse = await axios.get(
            `https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`
          );
          const englishAyahs = englishResponse.data.data.ayahs;

          const arabicResponse = await axios.get(
            `https://api.alquran.cloud/v1/surah/${surahNumber}`
          );
          const arabicAyahs = arabicResponse.data.data.ayahs;

          const randomAyahsArray: Array<{ english: string; arabic: string }> = [];

          for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * englishAyahs.length);
            randomAyahsArray.push({
              english: englishAyahs[randomIndex].text,
              arabic: arabicAyahs[randomIndex].text,
            });
          }

          // Save the new dua along with the timestamp
          await AsyncStorage.setItem('randomDua', JSON.stringify(randomAyahsArray));
          await AsyncStorage.setItem('duaTimestamp', currentTimestamp.toString());

          setRandomAyahs(randomAyahsArray);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Ayahs:', error);
        setLoading(false);
      }
    };

    fetchRandomAyahs();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <Loader />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.duaContainer}>
          <Text style={styles.title}>
            Dua's in English & Arabic Translation
          </Text>
          {randomAyahs.map((ayah, index) => (
            <View key={index} style={{ marginBottom: 20 }}>
              <Text>
                -----------------------------------------------------------------------------</Text>
              <Text style={styles.ayahTextEng}>{ayah.english}</Text>
              <Text style={styles.ayahTextArabic}>{ayah.arabic}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#f2d2c4',
  },
  duaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    maxHeight: 800,
    borderWidth: 2,
    backgroundColor: '#F0F0F0',
    borderColor: '#fff',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    margin: 10,
  },
  ayahTextEng: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    color: 'brown',
    overflow: 'scroll',
  },
  ayahTextArabic: {
    fontSize: 16,
    textAlign: 'right',
    margin: 10,
    color: '#712c09',
    fontWeight: 'bold',
    overflow: 'scroll',
  },
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});

export default Dua;
