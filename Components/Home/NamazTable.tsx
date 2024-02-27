import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { db, doc, onSnapshot } from '../Firebase/FirebaseConfig'; // Import Firestore functions
import axios from 'axios';
import SkeletonLoader from './SkeletonLoader';

const NamazTable = () => {
  const [tableData, setTableData] = useState<string[][]>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const headerStyle = { backgroundColor: '#aeebf9' };
  const rowStyle = { backgroundColor: '#00c0ea' };

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'NamazTimings', '2024'), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data && data.timings) {
          const namazTimings = data.timings;
          updateTableData(namazTimings);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const updateTableData = async (namazTimings: any) => {
    const formattedTimings: string[][] = [];
    for (const timing of namazTimings) {
      const azanTiming = await fetchAzanTiming(timing.namazName); // Fetch Azan timing
      formattedTimings.push([timing.namazName, azanTiming, timing.timing]);
    }
    setTableData(formattedTimings);
    setLoading(false); // Set loading state to false after data fetching and formatting
  };

  const fetchAzanTiming = async (namazName: string) => {
    try {
      const latitude = 32.931764267092596; // Garland, TX
      const longitude = -96.67948816258345;
      const calculationMethod = 1; // ISNA
      const timezone = 'America/Chicago';
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
      const apiUrl = `https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${latitude}&longitude=${longitude}&method=${calculationMethod}&timezone=${timezone}&school=1`;

      const response = await axios.get(apiUrl);
      const prayerTimings = response.data.data.timings;

      console.log('Prayer Timings:', prayerTimings); // Log prayerTimings object

      // Check if namazName exists in prayerTimings
      if (prayerTimings && prayerTimings.hasOwnProperty(namazName)) {
        const azanTime24hr = prayerTimings[namazName];

        // Convert 24-hour format to 12-hour format
        const azanTime12hr = azanTime24hr.split(':').map((str: string, index: number) => {
          if (index === 0) {
            return parseInt(str, 10) % 12 || 12; // Convert hour part
          } else {
            return str; // Keep minute part as it is
          }
        }).join(':');

        return azanTime12hr;
      } else {
        console.error(`Namaz name "${namazName}" not found in prayer timings.`);
        return '';
      }
    } catch (error) {
      console.error('Error fetching Azan timing:', error);
      return '';
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <SkeletonLoader /> // Show skeleton loader while loading
      ) : (
        <ScrollView horizontal={true}>
          <View style={styles.innerContainer}>
            <Table style={styles.tablecontainer}>
              <Row data={['Prayer', 'Azan', 'Iqamah']} style={[styles.header, headerStyle]} textStyle={styles.text} />
              {tableData.map((rowData, index) => (
                <Row key={index} data={rowData} style={[styles.row, rowStyle]} textStyle={styles.text} />
              ))}
            </Table>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', borderTopStartRadius: 30, borderTopEndRadius: 30 },
  innerContainer: { marginLeft: 2, marginRight: 2, width: 353, backgroundColor: 'white', borderTopStartRadius: 30, borderTopEndRadius: 30 },
  tablecontainer: { height: 50 },
  header: { height: 50, justifyContent: 'center', borderTopStartRadius: 30, borderTopEndRadius: 30 },
  text: { textAlign: 'center', fontWeight: 'bold', margin: 5, color: 'black' },
  row: { flexDirection: 'row', justifyContent: 'center' },
});

export default NamazTable;
