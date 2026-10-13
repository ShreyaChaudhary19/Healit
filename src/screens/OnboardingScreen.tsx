import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Healit</Text>

      <Text style={styles.title}>
        Smart Healthcare
      </Text>

      <Text style={styles.subtitle}>
        Doctor Booking • AI Health Assistant •
        Medicine Delivery • Emergency SOS
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
     >
        <Text style={styles.buttonText}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  logo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 15,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },

  button: {
    marginTop: 40,
    backgroundColor: '#0A84FF',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 15,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});