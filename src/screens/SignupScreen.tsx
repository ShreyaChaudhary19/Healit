import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Enter your name');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      Alert.alert('Error', 'Email must end with @gmail.com');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      Alert.alert('Error', 'Phone number must be exactly 10 digits');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const existingUser = await AsyncStorage.getItem(
        `user_${email}`
    );
    const existingPhone = await AsyncStorage.getItem(
        `phone_${phone}`
    );
    if (existingUser) {
        Alert.alert(
            'Error',
            'Email is already registered.'
        );
        return;
    }
    if (existingPhone) {
        Alert.alert(
            'Error',
            'Phone number is already registered.'
        );
        return;
    }

    const userData = {
      name,
      email,
      phone,
      password,
    };

    await AsyncStorage.setItem(
        `user_${email}`,
        JSON.stringify(userData)
    );
    await AsyncStorage.setItem(
        `email_${email}`,
        email
    );
    await AsyncStorage.setItem(
        `phone_${phone}`,
        email
    );

    Alert.alert('Success', 'Registration successful');
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Gmail Address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5FAFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#007AFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});