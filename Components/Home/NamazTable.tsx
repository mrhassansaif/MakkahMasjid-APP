import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const NamazTable = () => {
  const tableHead = ['Prayer', 'Azan', 'Iqamah'];
  const tableData = [
    ['Fajr', '5:30 AM', '5:45 AM'],
    ['Dhuhr', '12:30 PM', '12:45 PM'],
    ['Asr', '4:00 PM', '4:15 PM'],
    ['Maghrib', '6:30 PM', '6:45 PM'],
    ['Isha', '8:30 PM', '8:45 PM'],
  ];

  const headerStyle = { backgroundColor: '#aeebf9' };
  const rowStyle = { backgroundColor: '#00c0ea' };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style = {styles.innerContainer}>
          <Table style = {styles.tablecontainer}>
            <Row data={tableHead} style={[styles.header, headerStyle]} textStyle={styles.text} />
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
  container: { flex: 1, paddingTop: 2, width: "100%", borderTopStartRadius: 30, borderTopEndRadius: 30 },
  innerContainer: {width: 360, backgroundColor: 'white', borderTopStartRadius: 30, borderTopEndRadius: 30},
  tablecontainer: {height: 200},
  header: { height: 50, justifyContent: 'center', borderTopStartRadius: 30, borderTopEndRadius: 30 },
  text: { textAlign: 'center', fontWeight: 'bold', margin: 6, color: 'black', padding: 10 },
  row: { flexDirection: 'row', justifyContent: 'center' },
});

export default NamazTable;
