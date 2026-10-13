import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Doctor } from './DoctorData';

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctorName: string) => void;
}

export default function DoctorCard({
  doctor,
  onBook,
}: DoctorCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons
          name="person-circle"
          size={60}
          color="#0A84FF"
        />

        <View style={{ marginLeft: 15 }}>
          <Text style={styles.name}>
            {doctor.name}
          </Text>

          <Text style={styles.specialization}>
            {doctor.specialization}
          </Text>
        </View>
      </View>

      <View style={styles.details}>
        <Text>⭐ {doctor.rating}</Text>

        <Text>
          💼 {doctor.experience}
        </Text>

        <Text>💰 {doctor.fee}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          onBook(doctor.name)
        }
      >
        <Text style={styles.buttonText}>
          Book Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    elevation: 4,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  specialization: {
    color: '#666',
    marginTop: 3,
  },

  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 18,
  },

  button: {
    backgroundColor: '#0A84FF',
    padding: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});