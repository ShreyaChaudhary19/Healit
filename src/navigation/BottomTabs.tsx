
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import DoctorScreen from '../screens/DoctorScreen';
import AIScreen from '../screens/AIScreen';
import RecordsScreen from '../screens/RecordsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0A84FF',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName: React.ComponentProps<
            typeof Ionicons
          >['name'] = 'help-circle';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'AI') {
            iconName = 'chatbubble-ellipses';
          } else if (route.name === 'Doctor') {
            iconName = 'medkit';
          } else if (route.name === 'Records') {
            iconName = 'document-text';
          } else if (route.name === 'Analytics') {
            iconName = 'heart';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AI" component={AIScreen} />
      <Tab.Screen name="Doctor" component={DoctorScreen} />
      <Tab.Screen name="Records" component={RecordsScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}