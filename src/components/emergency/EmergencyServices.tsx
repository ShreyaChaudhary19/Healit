import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onAmbulance: () => void;
  onPolice: () => void;
  onFire: () => void;
}

export default function EmergencyServices({
  onAmbulance,
  onPolice,
  onFire,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        Emergency Services
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onAmbulance}
      >
        <Ionicons
          name="medical"
          size={24}
          color="#fff"
        />
        <Text style={styles.buttonText}>
          Call Ambulance
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: '#1565C0' },
        ]}
        onPress={onPolice}
      >
        <Ionicons
          name="shield"
          size={24}
          color="#fff"
        />
        <Text style={styles.buttonText}>
          Call Police
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: '#E65100' },
        ]}
        onPress={onFire}
      >
        <Ionicons
          name="flame"
          size={24}
          color="#fff"
        />
        <Text style={styles.buttonText}>
          Call Fire Brigade
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

  button: {
    backgroundColor: '#D32F2F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 12,
  },
});