import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function AIScreen() {
  const [symptom, setSymptom] = useState('');
  const [response, setResponse] = useState('');

  const analyzeSymptoms = () => {
    const text = symptom.toLowerCase();
    if (!text.trim()) {
        setResponse('Please enter your symptoms.');
        return;
    }
    if (
        text.includes('fever') &&
        text.includes('cough')
    ) {
        setResponse(
            'Possible Condition: Flu\n\nSeverity: Medium\n\nRecommendation: Drink fluids, rest well, and monitor your temperature.'
        );
    } else if (
        text.includes('headache') &&
        text.includes('nausea')
    ) {
        setResponse(
            'Possible Condition: Migraine\n\nSeverity: Medium\n\nRecommendation: Rest in a quiet room and stay hydrated.'
        );
    } else if (
        text.includes('body pain') ||
        text.includes('fatigue')
    ) {
        setResponse(
            'Possible Condition: Viral Infection\n\nSeverity: Mild\n\nRecommendation: Rest and maintain hydration.'
        );
    } else {
        setResponse(
            'Unable to determine a condition.\n\nRecommendation: Please consult a doctor for proper diagnosis.'
        );
    }
};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        AI Health Assistant
      </Text>

      <TextInput
        placeholder="Describe your symptoms..."
        style={styles.input}
        multiline
        value={symptom}
        onChangeText={setSymptom}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={analyzeSymptoms}
      >
        <Text style={styles.buttonText}>
          Analyze Symptoms
        </Text>
      </TouchableOpacity>
      <Text
        style={{
            color: 'gray',
            marginBottom: 10,
        }}
    >
        This AI assistant is for informational purposes only.
    </Text>

      {response ? (
        <View style={styles.resultCard}>
          <Text style={styles.resultText}>
            {response}
          </Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F8FF',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginTop: 40,
    marginBottom: 20,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    height: 150,
    textAlignVertical: 'top',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#0A84FF',
    padding: 18,
    borderRadius: 15,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  resultCard: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
  },

  resultText: {
    fontSize: 16,
    lineHeight: 24,
  },
});