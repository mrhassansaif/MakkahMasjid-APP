// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet, ScrollView} from 'react-native';
// import {Table, Row} from 'react-native-table-component';
// import axios from 'axios';

// const RamadanTable = () => {
//   const [tableData, setTableData] = useState<string[][]>([]);

//   const headerStyle = {backgroundColor: 'black'};
//   const rowStyle = {backgroundColor: 'black'};

//   const convertTo12HourFormat = (time24Hour: string) => {
//     const [hours, minutes] = time24Hour.split(':');
//     const period = parseInt(hours) >= 12 ? 'PM' : 'AM';
//     const hours12 = parseInt(hours) % 12 || 12; // Convert 0 to 12 for 12 AM
//     return `${hours12}:${minutes} ${period}`;
//   };

//   useEffect(() => {
//     const fetchNamazTimings = async () => {
//       try {
//         const latitude = 32.931764267092596; // Garland, TX
//         const longitude = -96.67948816258345;
//         const calculationMethod = 1; // ISNA
//         const timezone = 'America/Chicago';
//         const currentDate = new Date();
//         const formattedDate = `${currentDate.getDate()}-${
//           currentDate.getMonth() + 1
//         }-${currentDate.getFullYear()}`;
//         const apiUrl = `https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${latitude}&longitude=${longitude}&method=${calculationMethod}&timezone=${timezone}&school=1`;

//         const response = await axios.get(apiUrl);
//         const prayerTimings = response.data.data.timings;

//         // Specify the prayer timings to exclude
//         const excludedTimings = [
//           'Imsak',
//           'Midnight',
//           'Firstthird',
//           'Lastthird',
//           'Sunset',
//         ];

//         const iqamahTimings = [
//           '5:45 AM', // Fajr
//           '12:45 PM', // Dhuhr
//           '4:15 PM', // Asr
//           '6:45 PM', // Maghrib
//           '8:45 PM', // Isha
//         ];

//         const newTableData: string[][] = [];

//         for (const prayerName in prayerTimings) {
//           if (
//             prayerTimings.hasOwnProperty(prayerName) &&
//             !excludedTimings.includes(prayerName)
//           ) {
//             const timing24Hour = prayerTimings[prayerName];
//             const timing12Hour = convertTo12HourFormat(timing24Hour);

//             newTableData.push([
//               prayerName,
//               timing12Hour,
//               iqamahTimings[newTableData.length],
//             ]);
//           }
//         }

//         // Hardcoded Jumu'ah Khutba row
//         newTableData.push(["Jumu'ah Khutba", '', '2:10 PM/2:30 PM']);

//         setTableData(newTableData);
//       } catch (error) {
//         console.error('Error fetching prayer timings:', error);
//       }
//     };

//     fetchNamazTimings();
//   }, []);
//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal={true}>
//         <View style={styles.innerContainer}>
//           <Table>
//             <Row
//               data={['Prayer', 'Azan', 'Iqamah']}
//               style={[styles.header, headerStyle]}
//               textStyle={styles.text}
//             />
//             {tableData.map((rowData, index) => (
//               <Row
//                 key={index}
//                 data={rowData}
//                 style={[styles.row, rowStyle]}
//                 textStyle={styles.text}
//               />
//             ))}
//           </Table>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     // borderTopStartRadius: 30,
//     // borderTopEndRadius: 30,
//     height: 500,
//     backgroundColor: 'black',
//   },
//   innerContainer: {
//     marginLeft: 20,
//     marginRight: 2,
//     width: 353,
//     // borderTopStartRadius: 30,
//     // borderTopEndRadius: 30,
//     // height: 100,
//   },
//   header: {
//     height: 50,
//     justifyContent: 'center',
//     // borderTopStartRadius: 30,
//     // borderTopEndRadius: 30,
//     backgroundColor: 'black'
    
//   },
//   text: {textAlign: 'left', fontWeight: 'bold', margin: 5, color: 'white'},
//   row: {flexDirection: 'row', justifyContent: 'center'},
// });

// export default RamadanTable;


// Hassan ka Code idhar niche 
// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { Table, Row } from 'react-native-table-component';

// const RamadanTable = () => {
//   // Dummy data for the table
//   const tableData = [
//     ['1', '04-13', 'Mon', '4:30 AM', '6:45 PM'],
//     ['2', '04-14', 'Tue', '4:28 AM', '6:46 PM'],
//     ['3', '04-15', 'Wed', '4:26 AM', '6:47 PM'],
//     ['4', '04-16', 'Thu', '4:24 AM', '6:48 PM'],
//     ['5', '04-17', 'Fri', '4:22 AM', '6:49 PM'],
//     ['6', '04-18', 'Sat', '4:20 AM', '6:50 PM'],
//     ['7', '04-19', 'Sun', '4:18 AM', '6:51 PM'],
//   ];

//   const headerStyle = { backgroundColor: 'black' };
//   const rowStyle = { backgroundColor: 'black' };

//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal={true}>
//         <View style={styles.innerContainer}>
//           <Table>
//             <Row
//               data={['Roza', 'Date', 'Day', 'Suhur', 'Iftar']}
//               style={[styles.header, headerStyle]}
//               textStyle={styles.text}
//             />
//             {tableData.map((rowData, index) => (
//               <Row
//                 key={index}
//                 data={rowData}
//                 style={[styles.row, rowStyle]}
//                 textStyle={styles.text}
//               />
//             ))}
//           </Table>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     height: 500,
//     backgroundColor: 'black',
//   },
//   innerContainer: {
//     marginLeft: 20,
//     marginRight: 2,
//     width: 353,
//   },
//   header: {
//     height: 50,
//     justifyContent: 'center',
//     backgroundColor: 'black'
//   },
//   text: { textAlign: 'left', fontWeight: 'bold', margin: 5, color: 'white' },
//   row: { flexDirection: 'row', justifyContent: 'center' },
// });

// export default RamadanTable;

//++++++++++++++++++++++++++++++++++++++++++++++++
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const RamadanTable = () => {
  // Dummy data for the table
  const tableData = [
    ["01", "03-11", "Mon", "04:43", "06:20"],
    ["02", "03-12", "Tue", "04:41", "06:18"],
    ["03", "03-13", "Wed", "04:38", "06:15"],
    ["04", "03-14", "Thu", "04:36", "06:13"],
    ["05", "03-15", "Fri", "04:34", "06:11"],
    ["06", "03-16", "Sat", "04:32", "06:09"],
    ["07", "03-17", "Sun", "04:29", "06:06"],
    ["08", "03-18", "Mon", "04:27", "06:04"],
    ["09", "03-19", "Tue", "04:25", "06:02"],
    ["10", "03-20", "Wed", "04:23", "05:59"],
    ["11", "03-21", "Thu", "04:21", "05:57"],
    ["12", "03-22", "Fri", "04:20", "05:55"],
    ["13", "03-23", "Sat", "04:18", "05:53"],
    ["14", "03-24", "Sun", "04:15", "05:50"],
    ["15", "03-25", "Mon", "04:13", "05:48"],
    ["16", "03-26", "Tue", "04:12", "05:46"],
    ["17", "03-27", "Wed", "04:09", "05:43"],
    ["18", "03-28", "Thu", "04:08", "05:41"],
    ["19", "03-29", "Fri", "04:06", "05:39"],
    ["20", "03-30", "Sat", "04:04", "05:37"],
    ["21", "03-31", "Sun", "05:02", "06:34"],
    ["22", "04-01", "Mon", "05:00", "06:32"],
    ["23", "04-02", "Tue", "04:58", "06:30"],
    ["24", "04-03", "Wed", "04:56", "06:28"],
    ["25", "04-04", "Thu", "04:53", "06:25"],
    ["26", "04-05", "Fri", "04:51", "06:23"],
    ["27", "04-06", "Sat", "04:49", "06:21"],
    ["28", "04-07", "Sun", "04:47", "06:19"],
    ["29", "04-08", "Mon", "04:44", "06:16"],
    ["30", "04-09", "Tue", "04:42", "06:14"],
    ["Eid ul-Fitr*", "04-10", "Wed", "04:40", "06:12"]
  ];
  

  const headerStyle = { backgroundColor: 'black' };
  const rowStyle = { backgroundColor: 'black' };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row
            data={['Roza', 'Date', 'Day', 'Suhur', 'Iftar']}
            style={[styles.header, headerStyle]}
            textStyle={styles.text}
          />
          {tableData.map((rowData, index) => (
            <Row
              key={index}
              data={index === tableData.length - 1 ? [rowData[0], rowData[1], rowData[2], "Eid Mubarak"] : rowData}
              style={[styles.row, rowStyle]}
              textStyle={styles.text}
            />
          ))}
        </Table>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  innerContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  text: { textAlign: 'left', fontWeight: 'bold', margin: 5, color: 'white' },
  row: { flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 1, borderColor: '#C1C0B9' },
});

export default RamadanTable;