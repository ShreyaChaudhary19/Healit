import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function MedicineScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        Medicine Delivery
      </Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.name}>Paracetamol</Text>
        <Text>₹50</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.name}>Crocin</Text>
        <Text>₹80</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.name}>Vitamin C</Text>
        <Text>₹120</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>
          Order Medicines
        </Text>
      </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginTop: 40,
    marginBottom: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  orderButton: {
    backgroundColor: '#0A84FF',
    padding: 18,
    borderRadius: 15,
    marginTop: 20,
  },

  orderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});