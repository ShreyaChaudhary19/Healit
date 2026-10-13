import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface MedicalRecord {
  id: string;
  reportName: string;
  reportDate: string;
  description: string;
}

export default function RecordsScreen() {
  const [reportName, setReportName] = useState<string>('');
  const [reportDate, setReportDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [records, setRecords] = useState<MedicalRecord[]>([]);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async (): Promise<void> => {
    try {
      const email = await AsyncStorage.getItem(
        'currentUser'
      );

      if (!email) return;

      const storedRecords =
        await AsyncStorage.getItem(
          `records_${email}`
        );

      if (storedRecords) {
        setRecords(JSON.parse(storedRecords));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addRecord = async (): Promise<void> => {
    if (!reportName.trim()) {
      Alert.alert(
        'Error',
        'Please enter report name'
      );
      return;
    }

    if (!reportDate.trim()) {
      Alert.alert(
        'Error',
        'Please enter report date'
      );
      return;
    }

    try {
      const email = await AsyncStorage.getItem(
        'currentUser'
      );

      if (!email) return;

      const newRecord: MedicalRecord = {
        id: Date.now().toString(),
        reportName,
        reportDate,
        description,
      };

      const updatedRecords = [
        ...records,
        newRecord,
      ];

      setRecords(updatedRecords);

      await AsyncStorage.setItem(
        `records_${email}`,
        JSON.stringify(updatedRecords)
      );

      setReportName('');
      setReportDate('');
      setDescription('');

      Alert.alert(
        'Success',
        'Medical record added'
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRecord = async (
    id: string
  ): Promise<void> => {
    try {
      const email = await AsyncStorage.getItem(
        'currentUser'
      );

      if (!email) return;

      const updatedRecords = records.filter(
        record => record.id !== id
      );

      setRecords(updatedRecords);

      await AsyncStorage.setItem(
        `records_${email}`,
        JSON.stringify(updatedRecords)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        Medical Records
      </Text>

      <TextInput
        placeholder="Report Name"
        style={styles.input}
        value={reportName}
        onChangeText={setReportName}
      />

      <TextInput
        placeholder="Report Date"
        style={styles.input}
        value={reportDate}
        onChangeText={setReportDate}
      />

      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={addRecord}
      >
        <Text style={styles.addButtonText}>
          Add Record
        </Text>
      </TouchableOpacity>

      {records.map(record => (
        <View
          key={record.id}
          style={styles.card}
        >
          <Text style={styles.title}>
            {record.reportName}
          </Text>

          <Text style={styles.info}>
            📅 {record.reportDate}
          </Text>

          <Text style={styles.info}>
            📝 {record.description}
          </Text>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() =>
              deleteRecord(record.id)
            }
          >
            <Text style={styles.deleteText}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
    padding: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginTop: 50,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  addButton: {
    backgroundColor: '#0A84FF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  info: {
    marginTop: 4,
    color: '#555',
  },

  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
  },

  deleteText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});