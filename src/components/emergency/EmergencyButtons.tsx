import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onShareLocation: () => void;
  onHospitals: () => void;
  onPharmacy: () => void;
  onBloodBank: () => void;
}

export default function EmergencyButtons({
  onShareLocation,
  onHospitals,
  onPharmacy,
  onBloodBank,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        Quick Emergency Actions
      </Text>

      <TouchableOpacity
        style={styles.item}
        onPress={onShareLocation}
      >
        <Ionicons
          name="location"
          size={24}
          color="#0A84FF"
        />
        <Text style={styles.text}>
          Share Live Location
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={onHospitals}
      >
        <Ionicons
          name="medkit"
          size={24}
          color="#E53935"
        />
        <Text style={styles.text}>
          Nearby Hospitals
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={onPharmacy}
      >
        <Ionicons
          name="medical"
          size={24}
          color="#43A047"
        />
        <Text style={styles.text}>
          Nearby Pharmacies
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={onBloodBank}
      >
        <Ionicons
          name="water"
          size={24}
          color="#D32F2F"
        />
        <Text style={styles.text}>
          Nearby Blood Banks
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 15,
    elevation: 5,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginBottom: 18,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },

  text: {
    fontSize: 17,
    marginLeft: 15,
    color: '#333',
    fontWeight: '600',
  },
});