import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import axios from 'axios';

const NamazTable = () => {
  const [tableData, setTableData] = useState<string[][]>([]);

  const headerStyle = { backgroundColor: '#aeebf9' };
  const rowStyle = { backgroundColor: '#00c0ea' };

  const convertTo12HourFormat = (time24Hour: string) => {
    const [hours, minutes] = time24Hour.split(':');
    const period = parseInt(hours) >= 12 ? 'PM' : 'AM';
    const hours12 = (parseInt(hours) % 12) || 12; // Convert 0 to 12 for 12 AM
    return `${hours12}:${minutes} ${period}`;
  };

  useEffect(() => {
    const fetchNamazTimings = async () => {
      try {
        const latitude = 32.931764267092596; // Garland, TX
        const longitude = -96.67948816258345;
        const calculationMethod = 1; // ISNA
        const timezone = "America/Chicago";
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
        const apiUrl = `https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${latitude}&longitude=${longitude}&method=${calculationMethod}&timezone=${timezone}&school=1`;

        const response = await axios.get(apiUrl);
        const prayerTimings = response.data.data.timings;

        // Specify the prayer timings to exclude
        const excludedTimings = ["Imsak", "Midnight", "Firstthird", "Lastthird", "Sunset"];

        const iqamahTimings = [
          "5:45 AM", // Fajr
          "12:45 PM", // Dhuhr
          "4:15 PM", // Asr
          "6:45 PM", // Maghrib
          "8:45 PM" // Isha
        ];

        const newTableData: string[][] = [];

        for (const prayerName in prayerTimings) {
          if (prayerTimings.hasOwnProperty(prayerName) && !excludedTimings.includes(prayerName)) {
            const timing24Hour = prayerTimings[prayerName];
            const timing12Hour = convertTo12HourFormat(timing24Hour);

            newTableData.push([prayerName, timing12Hour, iqamahTimings[newTableData.length]]);
          }
        }

        // Hardcoded Jumu'ah Khutba row
        newTableData.push(["Jumu'ah Khutba", "", "2:10 PM/2:30 PM"]);

        setTableData(newTableData);
      } catch (error) {
        console.error("Error fetching prayer timings:", error);
      }
    };

    fetchNamazTimings();
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <View style={styles.container}>
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
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", borderTopStartRadius: 30, borderTopEndRadius: 30 },
  innerContainer: {marginLeft: 2, marginRight: 2, width: 353, backgroundColor: 'white', borderTopStartRadius: 30, borderTopEndRadius: 30},
  tablecontainer: {height: 50},
  header: { height: 50, justifyContent: 'center', borderTopStartRadius: 30, borderTopEndRadius: 30 },
  text: { textAlign: 'center', fontWeight: 'bold', margin: 5, color: 'black'},
  row: { flexDirection: 'row', justifyContent: 'center' },
});

export default NamazTable;
