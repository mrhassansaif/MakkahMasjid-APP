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
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const RamadanTable = () => {
  // Dummy data for the table
  const tableData = [
    ['01', '04-13', 'Mon', '4:30 AM', '6:45 PM'],
    ['02', '04-14', 'Tue', '4:28 AM', '6:46 PM'],
    ['03', '04-15', 'Wed', '4:26 AM', '6:47 PM'],
    ['04', '04-16', 'Thu', '4:24 AM', '6:48 PM'],
    ['05', '04-17', 'Fri', '4:22 AM', '6:49 PM'],
    ['06', '04-18', 'Sat', '4:20 AM', '6:50 PM'],
    ['07', '04-19', 'Sun', '4:18 AM', '6:51 PM'],
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
              data={rowData}
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

