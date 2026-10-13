import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }: any) {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const email = await AsyncStorage.getItem(
      'currentUser'
    );

    if (!email) return;

    const user = await AsyncStorage.getItem(
      `user_${email}`
    );

    if (!user) return;

    const userData = JSON.parse(user);

    setUserName(userData.name);
  };
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.welcome}>
        Hello {userName || 'User'} 👋
        </Text>

      <Text style={styles.heading}>
        Welcome to Healit
      </Text>

      <Text style={styles.subtitle}>
        Smart Healthcare Anytime Anywhere
      </Text>

      <TouchableOpacity
        style={styles.sosButton}
        onPress={() => navigation.navigate('Emergency')}
      >
        <Text style={styles.sosText}>
          🚨 Emergency SOS
        </Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>
        Services
      </Text>

      <View style={styles.grid}>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('AI')}
        >
          <Text style={styles.icon}>🤖</Text>
          <Text style={styles.cardTitle}>
            AI Assistant
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Doctor')}
        >
          <Text style={styles.icon}>👨‍⚕️</Text>
          <Text style={styles.cardTitle}>
            Doctors
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Medicine')}
        >
          <Text style={styles.icon}>💊</Text>
          <Text style={styles.cardTitle}>
            Medicines
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Records')}
        >
          <Text style={styles.icon}>📋</Text>
          <Text style={styles.cardTitle}>
            Records
          </Text>
        </TouchableOpacity>

      <TouchableOpacity
       style={styles.card}
      >
         <Text style={styles.icon}>📅</Text>
          <Text style={styles.cardTitle}>
            Appointments
         </Text>
        </TouchableOpacity>
        </View>

      <View style={styles.healthCard}>
        <Text style={styles.healthTitle}>
          Health Tip 💡
        </Text>

        <Text style={styles.healthText}>
          Drink at least 8 glasses of water daily and get
          7-8 hours of sleep for better health.
        </Text>
      </View>

   
    <View style={styles.healthCard}>
        <Text style={styles.healthTitle}>
            Health Score ❤️
        </Text>
        <Text style={styles.healthText}>
            85 / 100
        </Text>
    </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
    padding: 20,
  },

  welcome: {
    fontSize: 20,
    marginTop: 40,
    color: '#555',
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginTop: 5,
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    marginBottom: 25,
  },

  sosButton: {
    backgroundColor: '#FF3B30',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
  },

  sosText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 4,
  },

  icon: {
    fontSize: 35,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  healthCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 30,
    elevation: 4,
  },

  healthTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0A84FF',
  },

  healthText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});