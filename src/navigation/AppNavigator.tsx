import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

import DoctorScreen from '../screens/DoctorScreen';
import AIScreen from '../screens/AIScreen';
import MedicineScreen from '../screens/MedicineScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import RecordsScreen from '../screens/RecordsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import BottomTabs from './BottomTabs';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        />

        <Stack.Screen
          name="Home"
          component={BottomTabs}
        />

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen
          name="Doctor"
          component={DoctorScreen}
        />

        <Stack.Screen
          name="AI"
          component={AIScreen}
        />

        <Stack.Screen
          name="Medicine"
          component={MedicineScreen}
        />

        <Stack.Screen
          name="Emergency"
          component={EmergencyScreen}
        />

        <Stack.Screen
          name="Records"
          component={RecordsScreen}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 