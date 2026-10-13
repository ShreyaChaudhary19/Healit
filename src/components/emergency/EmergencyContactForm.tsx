import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  contactName: string;
  contactPhone: string;

  setContactName: (text: string) => void;
  setContactPhone: (text: string) => void;

  onSave: () => void;
}

export default function EmergencyContactForm({
  contactName,
  contactPhone,
  setContactName,
  setContactPhone,
  onSave,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        Emergency Contact
      </Text>

      <TextInput
        placeholder="Contact Name"
        value={contactName}
        onChangeText={setContactName}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone Number"
        value={contactPhone}
        onChangeText={setContactPhone}
        keyboardType="phone-pad"
        maxLength={10}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onSave}
      >
        <Text style={styles.buttonText}>
          Save Contact
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
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#F5F8FF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#0A84FF',
    padding: 16,
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});