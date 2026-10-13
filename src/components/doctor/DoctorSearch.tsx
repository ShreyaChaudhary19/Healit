import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DoctorSearchProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function DoctorSearch({
  value,
  onChangeText,
}: DoctorSearchProps) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={22}
        color="#0A84FF"
      />

      <TextInput
        placeholder="Search Doctor or Specialization"
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    elevation: 3,
    height: 55,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});