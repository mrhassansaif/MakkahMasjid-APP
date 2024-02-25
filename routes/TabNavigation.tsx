import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../Components/Home/Home';
import {ArchiveBook, Home2, Location} from 'iconsax-react-native';
import {About} from '../Components/About/About';
import RowComponent from '../Components/RowComponent';
import {styles} from '../styles/global';
import {Text} from 'native-base';
import {RamadanTimings} from '../Components/RamadanTimings/RamadanTimings';
import {Donate} from '../Components/Donate/Donate';
import Dua from '../Components/Dua/Dua';

import {Linking} from 'react-native'; // Add this line
import {News} from '../Components/Events/News';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const openLocationLink = () => {
    Linking.openURL('https://maps.app.goo.gl/h6ojwYvdYvYBfe9G7');
  };

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size}) => {
            size = 20;

            if (route.name === 'Home') {
              return (
                <RowComponent
                  localStyles={{
                    backgroundColor: focused ? '#e0f1f5' : '#fff',
                  }}>
                  <Home2
                    size={size}
                    color={focused ? '#42a8c3' : '#676767'}
                    variant="Bold"
                  />
                  {focused && <Text style={[styles.tabLabel]}>Home</Text>}
                </RowComponent>
              );
            } else if (route.name === 'About') {
              return (
                <RowComponent
                  localStyles={{
                    backgroundColor: focused ? '#e0f1f5' : '#fff',
                  }}>
                  <ArchiveBook
                    size={size}
                    color={focused ? '#42a8c3' : '#676767'}
                    variant="Bold"
                  />
                  {focused && <Text style={[styles.tabLabel]}>About Us</Text>}
                </RowComponent>
              );
            } else if (route.name === 'Location') {
              return (
                <RowComponent
                  localStyles={{
                    backgroundColor: '#fff', // Set background color without conditional check
                  }}
                  onPress={openLocationLink} // Handle the onPress event to open the link
                >
                  <Location
                    size={size}
                    color={'#676767'} // Set the color without conditional check
                    variant="Bold"
                  />
                  {focused && <Text style={[styles.tabLabel]}>Location</Text>}
                </RowComponent>
              );
            }
            return null; // Return null for tabs that don't need to render an icon
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: '#e0f1f5',
          tabBarShowLabel: false,
          tabBarStyle: {
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12,
            height: 60,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: '#F2D2C5'},
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Tab.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen
          name="Donate"
          component={Donate}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#F2D2C5'},
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Dua"
          component={Dua}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#F2D2C5'},
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="RamadanTimings"
          component={RamadanTimings}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#F2D2C5'},
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#F2D2C5'},
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
