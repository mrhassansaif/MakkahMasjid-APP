import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../Components/Home/Home';

export const HomeNavigator = () => {
  
  const HomeStack = createNativeStackNavigator()
  
    return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component ={Home} />
    </HomeStack.Navigator>
  )
}
