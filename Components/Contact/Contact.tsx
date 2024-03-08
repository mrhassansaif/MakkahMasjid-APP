import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View, Image, Text } from 'native-base';

export const Contact = () => {
  
  return (
    <View style={styles.mainContainer}>
    <View style={styles.imagediv}>
      <Image
        source={require('../About/img/masjid2009.png')}
        style={styles.img}
        alt="About Us Background"
      />
    </View>
    <View style={styles.contentdiv}>
      <View style={styles.row1}>
        <View style={styles.leftcol}>
          <Text style={styles.historyheading}>About Us</Text>
        </View>
        {/* <View style={styles.rightcol}>
          <Text style={styles.historydate}>Jan 1, 2021 • 3344 views</Text>
        </View> */}
      </View>

      <View style={styles.row2}>
        <Text style={styles.title}>MOSQUE HISTORY</Text>
        <Text style={styles.author}>By: Makkah MAsjid</Text>
        <ScrollView style={styles.scrollView}>
        <Text style={styles.paragraph}>
            The Makkah Masjid, also known as <Text style={styles.bold}>IDEA – Islamic Directions and Enhancement Association</Text>, is a non-profit Islamic organization situated in Garland, TX. It functions as both a Mosque and a Community Center, catering to the Muslim communities of Garland, Richardson, and the entire DFW area. All activities and services provided by Makkah Masjid adhere to the teachings of Islam, as prescribed by the <Text style={styles.italic}>Quran</Text> and the <Text style={styles.italic}>Sunnah</Text> (traditions) of <Text style={styles.bold}>Prophet Mohammed</Text> (Peace be upon him), as well as the pious ones (<Text style={styles.bold}>Sahaba</Text> & <Text style={styles.bold}>Awliyah</Text>).

            Established in 1993 as the <Text style={styles.bold}>Islamic Directions Enhancement Association (IDEA)</Text>, Makkah Masjid offers Islamic educational, social, and cultural services to the Muslim community in the locality. Additionally, IDEA actively promotes the teachings of Islam to both inquiring Muslims and non-Muslims. In <Text style={styles.italic}>Ramadan</Text> of 2007, to better cater to the religious needs of the community and cultivate an Islamic learning environment for children, IDEA acquired the Makkah Masjid property. This property spans 2.66 acres, with a building area exceeding 10,000 square feet and a parking lot capacity of over 200 spots. This spacious location enables the accommodation of both large and small events, gatherings, and classes, with dedicated rooms allocated for sisters and children.
          </Text>
        </ScrollView>
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
  imagediv: {
    width: 350,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    width: 320,
    height: 190,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 30,
  },
  contentdiv: {
    backgroundColor: 'rgba(240, 240, 240, 0.60)',
    width: 320,
    height: 400,
    borderRadius: 20,
  },
  row1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  leftcol: {
    padding: 6,
    // backgroundColor: '#F2F2F2',
    borderRadius: 6,
  },
  historyheading: {
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5
  },
  historydate: {},
  rightcol: {},
  row2: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    padding: 10,
  },
  author: {
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign: 'left',
    color: '#333333',
    // alignItems: 'flex-start',
    marginLeft: 30,
    marginBottom: 10,
    // padding: 10
  },
  paragraph: {
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'left',
    color: '#333333',
    // alignItems: 'flex-start',
    marginLeft: 30,
    lineHeight: 30,
    marginBottom: 10,
    // padding: 10
  },
  scrollView: {
    maxHeight: 280, // You can adjust this value based on your requirement
    maxWidth: 300, //
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});
