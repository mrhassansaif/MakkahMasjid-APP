import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, Alert } from 'react-native'; // Import Alert
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ArrowLeft } from 'iconsax-react-native'; // Import ArrowLeft icon
import { auth, db, setDoc, collection, doc } from '../Firebase/FirebaseConfig'; // Import doc function

type ContactScreenProps = {
  navigation: BottomTabNavigationProp<{}>; // Specify the navigation prop type
};

export const Contact = ({ navigation }: ContactScreenProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !email || !number || !message) {
      Alert.alert('Please fill out all fields'); // Use Alert.alert instead of alert
      return;
    }

    // Save form data to Firestore
    try {
      const messagesCollectionRef = collection(db, 'messages 2024'); // Reference to the 'messages 2024' collection
      await setDoc(doc(messagesCollectionRef), { name, email, number, message }); // Add a new document with form data

      // Reset form fields after submission
      setName('');
      setEmail('');
      setNumber('');
      setMessage('');

      Alert.alert('Message submitted successfully!'); // Use Alert.alert instead of alert
    } catch (error) {
      console.error('Error saving message:', error);
      Alert.alert('An error occurred while submitting the message. Please try again later.'); // Use Alert.alert instead of alert
    }
  };

  const handleCall = () => {
    Linking.openURL(`tel:972-897-2437`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:ghulamjangda@gmail.com`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F2D2C5', paddingHorizontal: 20 }}>
      {/* Custom header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" style={{ marginRight: 8 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'black' }}>Contact</Text>
      </View>

      {/* Contact information */}
      <View style={{ marginTop: 50 }}>
        {/* Handle phone call */}
        <TouchableOpacity onPress={handleCall}>
          <Text style={{ fontSize: 16, color: 'black', marginVertical: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Phone:</Text>{' '}
            <Text style={{ textDecorationLine: 'underline' }}>+1 972 675 4000</Text>
          </Text>
        </TouchableOpacity>
        {/* Handle email */}
        <TouchableOpacity onPress={handleEmail}>
          <Text style={{ fontSize: 16, color: 'black', marginVertical: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Email:</Text>{' '}
            <Text style={{ textDecorationLine: 'underline' }}>ghulamjangda@gmail.com</Text>
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: 'black', marginVertical: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Address:</Text>{' '}
          3301 W Buckingham Rd. Garland TX 75042
        </Text>
      </View>

      {/* Form fields */}
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: 'black',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            color: 'black',
          }}
          placeholderTextColor="black"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: 'black',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            color: 'black',
          }}
          placeholderTextColor="black"
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: 'black',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            color: 'black',
          }}
          placeholderTextColor="black"
          placeholder="Number"
          value={number}
          onChangeText={setNumber}
        />
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: 'black',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
            color: 'black',
          }}
          placeholderTextColor="black"
          placeholder="Your message"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        {/* Send message button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#8e4322',
            padding: 12,
            borderRadius: 50,
            alignItems: 'center',
            width: '50%',
            alignSelf: 'center',
          }}
          onPress={handleSubmit}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
