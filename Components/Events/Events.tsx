import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Linking,
} from 'react-native';
import {CloseCircle, InfoCircle} from 'iconsax-react-native';

type EventType = {
  id: number;
  title: string;
  description: string;
};

export const Events = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  const openLink = () => {
    // Replace 'your_link_here' with the actual link you want to open
    Linking.openURL('https://makkahmasjid.net/events/');
  };

  const eventsData: EventType[] = [
    {
      id: 1,
      title:
        'Mark Your Calendar: Celebration of ‘Mayraj un Nabi’ at Makkah Masjid Garland',
      description:
        'Dear Brothers and Sisters, We are delighted to extend a heartfelt invitation to you for the upcoming celebration of “Mayraj un Nabi” at Makkah Masjid Garland. This auspicious event will be led by the esteemed ALLAMA KALEEMULLAH NIZAM, the Imam of Makkah Masjid, on the 7th of February 2024, which falls on a Wednesday night after Isha prayer.The Isha JAMA’AT will commence promptly at 8:00 PM, setting the stage for a night filled with spiritual enlightenment and reflection. We encourage you to join us in this unique opportunity to connect with our faith and community. Event Details: Date: 7th February 2024 (Wednesday) Time: Night after Isha prayer (Isha JAMA’AT at 8:00 PM) Venue: Makkah Masjid Garland Address: 3301 W, Buckingham Road, Garland, TX 75042. The gathering promises to be a soulful experience, providing a platform to deepen our understanding of the significance of Mairaj un Nabi. Following the spiritual session, a delectable dinner will be served, offering an opportunity for brothers and sisters to come together in fellowship. Save the date, mark your calendar, and join us for an uplifting and spiritually enriching experience at Makkah Masjid Garland. Let us come together as a community to celebrate the blessings of Mairaj un Nabi. We look forward to your presence, and may this gathering be a source of blessings and enlightenment for all.',
    },
    {
      id: 2,
      title: 'Event 2',
      description:
        'Description of Event 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 3,
      title: 'Event 3',
      description:
        'Description of Event 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 4,
      title: 'Event 4',
      description:
        'Description of Event 4. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const openModal = (event: EventType) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderEventsInRows = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {eventsData.map(event => (
          <TouchableOpacity key={event.id} onPress={() => openModal(event)}>
            <View style={styles.row}>
              <View style={[styles.gridBox, {width: '100%'}]}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.description}>
                  {event.description.length > 150
                    ? event.description.substring(0, 150) + '...'
                    : event.description}
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
      {renderEventsInRows()}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView style={{maxHeight: 450}}>
              <Text style={styles.modalTitle}>{selectedEvent?.title}</Text>
              <Text style={styles.modalDescription}>
                {selectedEvent?.description}
              </Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
              
              <TouchableOpacity
                onPress={closeModal}
                style={[styles.button, {backgroundColor: '#f2d2c4'}]}>
                  <View style={styles.buttonContent}><CloseCircle size="25" color="#FF8A65"/>
                <Text style={styles.buttonText}>Close</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={openLink}
                style={[styles.button, {backgroundColor: '#8e4322'}]}>
                  <View style={styles.buttonContent}>
                  <InfoCircle size="25" color="#FF8A65"/>
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
    color: '#333', // Change text color to black
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555', // Change text color to a darker shade
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add background color with transparency
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
    color: '#333', // Change text color to black
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'left',
    lineHeight: 20,
    color: '#555', // Change text color to a darker shade
  },
  closeButton: {
    backgroundColor: '#f2d2c4',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '50%',
    marginLeft: 70,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#8e4322',
    fontWeight: 'bold',
  },
  // Add these styles
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
