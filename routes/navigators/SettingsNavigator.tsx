import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Settings } from '../../Components/Settings/Settings';

export const SettingsNavigator = () => {
  
  const SettingsStack = createNativeStackNavigator()
  
    return (
    <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component ={Settings} />
    </SettingsStack.Navigator>
  )
}
