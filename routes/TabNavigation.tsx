import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeNavigator} from './navigators/HomeNavigator';

export const TabNavigation = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeNavigator} />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  );
};
