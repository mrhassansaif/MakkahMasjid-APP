import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../Components/Home/Home';
import {Home2, Mobile, More, MoreCircle, Setting2} from 'iconsax-react-native';
import {AboutUs} from '../Components/AboutUs/AboutUs';
import RowComponent from '../Components/RowComponent';
import {styles} from '../styles/global';
import {Text} from 'native-base';
import {ContactUs} from '../Components/ContactUs/ContactUs';
// import {Settings} from '../Components/RamadanTimings/RamadanTimings';
import { RamadanTimings } from '../Components/RamadanTimings/RamadanTimings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            size = 20;
            let iconName;

            if (route.name === 'Home') {
              return (
                <RowComponent localStyles={{
                  backgroundColor: focused ? '#e0f1f5' : '#fff',
                }}>
                  <Home2 size={size} color={focused ? '#42a8c3' : '#676767'} variant='Bold' />
                  {focused && <Text style={[styles.tabLabel]}>Home</Text>}
                </RowComponent>
              );
              // iconName = focused
              //   ? 'Home2'
              //   : 'Home2';
            } else if (route.name === 'About Us') {
              return (
                <RowComponent localStyles={{
                  backgroundColor: focused ? '#e0f1f5' : '#fff',
                }}>
                  <MoreCircle size={size} color={focused ? '#42a8c3' : '#676767'} variant='Bold'/>
                  {focused && <Text style={[styles.tabLabel]}>About Us</Text>}
                </RowComponent>
              );
              // iconName = focused ? 'Home2' : 'Home2';
            } else if (route.name === 'RamadanTimings') {
              return (
                <RowComponent localStyles={{
                  backgroundColor: focused ? '#e0f1f5' : '#fff',
                }}>
                  <Setting2 size={size} color={focused ? '#42a8c3' : '#676767'} variant='Bold'/>
                  {focused && <Text style={[styles.tabLabel]}>Ramadan Timings</Text>}
                </RowComponent>
              );
              // iconName = focused ? 'Home2' : 'Home2';
            // } else if (route.name === 'Contact Us') {
            //   return (
            //     <RowComponent localStyles={{
            //       backgroundColor: focused ? '#e0f1f5' : '#fff',
            //     }}>
            //       <Mobile size={size} color={focused ? '#42a8c3' : '#676767'} variant='Bold'/>
            //       {focused && <Text style={[styles.tabLabel]}>Contact Us</Text>}
            //     </RowComponent>
            //   );
              // iconName = focused ? 'Home2' : 'Home2';
            }

            // You can return any component that you like here!
            return <Home2 size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: '#e0f1f5',
          tabBarShowLabel: false,
          tabBarStyle: {
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12,
            
          }
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} // Hide the header for this specific screen
        />
        <Tab.Screen
          name="About Us"
          component={AboutUs}
          options={{headerShown: true, headerStyle:{backgroundColor: "#F2D2C5"}, headerTitleAlign: 'center',}} // Hide the header for this specific screen
        />
        <Tab.Screen
          name="RamadanTimings"
          component={RamadanTimings}
          options={{headerShown: false}} // Hide the header for this specific screen
        />
        {/* <Tab.Screen
          name="Contact Us"
          component={ContactUs}
          options={{headerShown: false}} // Hide the header for this specific screen
        /> */}
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
