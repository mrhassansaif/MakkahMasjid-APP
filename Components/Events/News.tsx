import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Linking,
} from 'react-native';
import { CloseCircle, InfoCircle } from 'iconsax-react-native';
import { collection, doc, db, onSnapshot } from '../Firebase/FirebaseConfig'; // Import Firestore functions
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


type NewsType = {
  id: string;
  title: string;
  content: string;
};

export const News = () => {
  const navigation = useNavigation(); // Initialize useNavigation hook
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsType | null>(null);
  const [newsData, setNewsData] = useState<NewsType[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Home', // Set the back button text to 'Home'
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'News'), snapshot => {
      const fetchedNews: NewsType[] = [];
      snapshot.forEach(doc => {
        const newsData = doc.data(); // Extract data from Firestore document
        fetchedNews.push({ id: doc.id, title: newsData.title, content: newsData.content });
      });
      setNewsData(fetchedNews);
    });
  
    return () => unsubscribe();
  }, []);
  

  const openLink = () => {
    Linking.openURL('https://makkahmasjid.net/events/');
  };

  const openModal = (news: NewsType) => {
    setSelectedNews(news);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderNewsInRows = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {newsData.map(news => (
          <TouchableOpacity key={news.id} onPress={() => openModal(news)}>
            <View style={styles.row}>
              <View style={[styles.gridBox, { width: '100%' }]}>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.description}>
                  {news.content.length > 150
                    ? news.content.substring(0, 150) + '...'
                    : news.content}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {renderNewsInRows()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView style={{ maxHeight: 450 }}>
              <Text style={styles.modalTitle}>{selectedNews?.title}</Text>
              <Text style={styles.modalDescription}>
                {selectedNews?.content}
              </Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={closeModal}
                style={[styles.button, { backgroundColor: '#f2d2c4' }]}>
                <View style={styles.buttonContent}>
                  <CloseCircle size="25" color="#FF8A65" />
                  <Text style={styles.buttonText}>Close</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={openLink}
                style={[styles.button, { backgroundColor: '#8e4322' }]}>
                <View style={styles.buttonContent}>
                  <InfoCircle size="25" color="#FF8A65" />
                  <Text style={styles.buttonText}>More Info.</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2d2c4',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  row: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  gridBox: {
    maxWidth: '90%',
    height: 250,
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'left',
    lineHeight: 20,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '40%',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 3,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

