import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export const Home = () => {
  const prayerTimings = [
    {name: 'Fajr', azan: '6:14', iqamah: '6:35'},
    {name: 'Dhuhar', azan: '12:30', iqamah: '1:00'},
    {name: 'Asr', azan: '12:30', iqamah: '1:00'},
    {name: 'Maghrib', azan: '12:30', iqamah: '1:00'},
    {name: 'Isha', azan: '12:30', iqamah: '1:00'},
    // Add more prayer timings as needed
  ];
  return (
    <View style={styles.container}>
      <View style={styles.div1}>
        <View style={styles.row1}>
          <View style={styles.column}>
            <Text style={styles.rowText}>Row 1 text</Text>
            <Text style={styles.rowText}>Row 2 text</Text>
            <Text style={styles.rowText}>Row 3 text</Text>
          </View>
          <View style={styles.column}>
            <Image
              source={require('../Home/img/mpic.png')}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.row}>
            <View style={styles.column}>
              {/* Icon and title for the first column */}
              <Image
                source={require('../Home/img/icon1.png')}
                style={styles.icon}
              />
              <Text style={styles.iconTitle}>Icon 1 Title</Text>
            </View>
            <View style={styles.column}>
              {/* Icon and title for the second column */}
              <Image
                source={require('../Home/img/icon2.png')}
                style={styles.icon}
              />
              <Text style={styles.iconTitle}>Icon 2 Title</Text>
            </View>
            <View style={styles.column}>
              {/* Icon and title for the third column */}
              <Image
                source={require('../Home/img/icon3.png')}
                style={styles.icon}
              />
              <Text style={styles.iconTitle}>Icon 3 Title</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              {/* Icon and title for the first column */}
              <Image
                source={require('../Home/img/icon1.png')}
                style={styles.icon}
              />
              <Text style={styles.iconTitle}>Icon 1 Title</Text>
            </View>
            <View style={styles.column}>
              {/* Icon and title for the second column */}
              <Image
                source={require('../Home/img/icon2.png')}
                style={styles.icon}
              />
              <Text style={styles.iconTitle}>Icon 2 Title</Text>
            </View>
            <View style={styles.column}>
              {/* Icon and title for the third column */}
              <Image
                source={require('../Home/img/icon3.png')}
                style={styles.icon}
              />
              <Text style={styles.iconTitle}>Icon 3 Title</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.div2}>
        <View style={styles.row3}>
          <Text style={styles.columnText}>Prayer</Text>
          <Text style={styles.columnText}>Azan</Text>
          <Text style={styles.columnText}>Iqamah</Text>
        </View>

        {/* Table for Prayer Timings */}
        {prayerTimings.map((prayer, index) => (
          <View key={index} style={styles.row4}>
            <Text style={styles.columnText2}>{prayer.name}</Text>
            <Text style={styles.columnText2}>{prayer.azan}</Text>
            <Text style={styles.columnText2}>{prayer.iqamah}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  div1: {
    width: '100%',
    height: '58%',
    alignItems: 'center',
    backgroundColor: '#f2d2c4',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  row1: {
    backgroundColor: '#d98c86',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    width: '80%',
    borderWidth: 2,
    borderColor: '#cd7069',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  column: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  rowText: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  row2: {
    backgroundColor: '#f3e2da',
    marginTop: '5%',
    width: '90%',
    borderWidth: 2,
    borderColor: '#f4f4f4',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  iconTitle: {
    fontSize: 16,
    marginTop: 5,
    color: 'black',
  },
  div2: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    backgroundColor: '#dff1f5',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: 2,
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    marginTop: 10,
    marginBottom: 10,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  columnText: {
    color: 'black',
    fontWeight: 'bold',
  },
  row4: {
    backgroundColor: '#00c5e4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: "14%"
    // marginTop: 10,
  },
  columnText2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
