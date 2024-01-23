import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContactUs } from "../../Components/ContactUs/ContactUs";

export const ContactNavigator = () => {
  
  const ContactStack = createNativeStackNavigator()
  
    return (
    <ContactStack.Navigator>
        <ContactStack.Screen name="Contact" component ={ContactUs} />
    </ContactStack.Navigator>
  )
}
