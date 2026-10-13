import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Healit</Text>
      <Text style={styles.tagline}>
        Smart Healthcare Anytime Anywhere
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A84FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
  },
  tagline: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});