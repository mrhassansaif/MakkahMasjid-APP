import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  
  return (
    // <SafeAreaView>
      <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.avatarContainer}>
        <Image style={styles.avatar}
        
          source={{
          uri: 'https://makkahmasjid.net/wp-content/uploads/2024/01/LOGO-1.png',
        }}
      />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Makkah Masjid</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>your@email.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoText}>Garland, TX</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Bio:</Text>
          <Text style={styles.infoText}>Your bio goes here</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Portfolio:</Text>
          <Text style={styles.infoText}>https://makkahmasjid.net</Text>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F3',
  },
  body: {
    marginTop:120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  nameContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
  },
});

export default App;
