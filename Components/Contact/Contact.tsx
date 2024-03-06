import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ArrowLeft } from 'iconsax-react-native'; // Import ArrowLeft icon

type ContactScreenProps = {
  navigation: BottomTabNavigationProp<{}>; // Specify the navigation prop type
};

export const Contact = ({ navigation }: ContactScreenProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Implement your logic to handle form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Number:', number);
    console.log('Message:', message);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setNumber('');
    setMessage('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F2D2C5', paddingHorizontal: 20 }}>
      {/* Custom header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" style={{ marginRight: 8 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: "center", color: 'black' }}>                  Contact</Text>
      </View>

      {/* Contact information */}
      <View style={{ marginTop: 100 }}>
        <Text style={{ fontSize: 16 }}>Email: ghulamjangda@gmail.com</Text>
        <Text style={{ fontSize: 16 }}>Address: 3301 W Buckingham Rd. Garland TX 75042</Text>
        <Text style={{ fontSize: 16 }}>Phone: +1 972 675 4000</Text>
      </View>

      {/* Form fields */}
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
          placeholder="Number"
          value={number}
          onChangeText={setNumber}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
          placeholder="Your message"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        {/* Send message button */}
        <TouchableOpacity
          style={{ backgroundColor: '#42a8c3', padding: 12, borderRadius: 5, alignItems: 'center', width: '50%', alignSelf: 'center' }}
          onPress={handleSubmit}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', }}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
