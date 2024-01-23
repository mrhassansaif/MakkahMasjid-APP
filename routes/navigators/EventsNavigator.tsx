import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Events } from '../../Components/Events/Events';

export const EventsNavigator = () => {
  
  const EventsStack = createNativeStackNavigator()
  
    return (
    <EventsStack.Navigator>
        <EventsStack.Screen name="Events" component ={Events} />
    </EventsStack.Navigator>
  )
}
