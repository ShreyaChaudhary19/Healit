import React from 'react';
import {
  View,
 Text,
  TextInput,
  StyleSheet,
} from 'react-native';

interface Props {
  bloodGroup: string;
  allergies: string;
  diseases: string;
  medicines: string;
  notes: string;

  setBloodGroup: (text: string) => void;
  setAllergies: (text: string) => void;
  setDiseases: (text: string) => void;
  setMedicines: (text: string) => void;
  setNotes: (text: string) => void;
}

export default function MedicalInfoCard({
  bloodGroup,
  allergies,
  diseases,
  medicines,
  notes,
  setBloodGroup,
  setAllergies,
  setDiseases,
  setMedicines,
  setNotes,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        Medical Information
      </Text>

      <TextInput
        placeholder="Blood Group (A+, O+, B-, etc.)"
        value={bloodGroup}
        onChangeText={setBloodGroup}
        style={styles.input}
      />

      <TextInput
        placeholder="Allergies"
        value={allergies}
        onChangeText={setAllergies}
        style={styles.input}
      />

      <TextInput
        placeholder="Medical Conditions"
        value={diseases}
        onChangeText={setDiseases}
        style={styles.input}
      />

      <TextInput
        placeholder="Current Medicines"
        value={medicines}
        onChangeText={setMedicines}
        style={styles.input}
      />

      <TextInput
        placeholder="Emergency Notes"
        value={notes}
        onChangeText={setNotes}
        multiline
        numberOfLines={4}
        style={[styles.input, { height: 100 }]}
      />
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

  input: {
    backgroundColor: '#F5F8FF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});