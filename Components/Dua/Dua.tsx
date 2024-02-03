import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const Dua = () => {
  const [randomAyahs, setRandomAyahs] = useState<
    Array<{english: string; arabic: string}>
  >([]);

  useEffect(() => {
    // Fetch 3 random Ayahs from a specific Surah with both English and Arabic translations
    const fetchRandomAyahs = async () => {
      try {
        const surahNumber = Math.floor(Math.random() * 114) + 1; // Random Surah number between 1 and 114

        // Fetch English translation
        const englishResponse = await axios.get(
          `https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`,
        );
        const englishAyahs = englishResponse.data.data.ayahs;

        // Fetch Arabic translation
        const arabicResponse = await axios.get(
          `https://api.alquran.cloud/v1/surah/${surahNumber}`,
        );
        const arabicAyahs = arabicResponse.data.data.ayahs;

        // Combine English and Arabic translations
        const randomAyahsArray: Array<{english: string; arabic: string}> = [];

        for (let i = 0; i < 2; i++) {
          const randomIndex = Math.floor(Math.random() * englishAyahs.length);
          randomAyahsArray.push({
            english: englishAyahs[randomIndex].text,
            arabic: arabicAyahs[randomIndex].text,
          });
        }

        setRandomAyahs(randomAyahsArray);
      } catch (error) {
        console.error('Error fetching Ayahs:', error);
      }
    };

    fetchRandomAyahs();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.duaContainer}>
        <Text style={styles.title}>Dua's in English & Arabic Tranlation</Text>
        {randomAyahs.map((ayah, index) => (
          <View key={index} style={{marginBottom: 20}}>
            <Text style={styles.ayahTextEng}>{ayah.english}</Text>
            <Text style={styles.ayahTextArabic}>{ayah.arabic}</Text>
          </View>
        ))}
      </View>
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
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
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
    margin: 10
  },
  ayahTextEng: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    color: 'brown',
    overflow: 'scroll'
  },
  ayahTextArabic: {
    fontSize: 16,
    textAlign: 'right',
    margin: 10,
    color: '#712c09',
    fontWeight: 'bold',
    overflow: 'scroll',
  },
});

export default Dua;
