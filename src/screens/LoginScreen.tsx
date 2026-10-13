import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
export default function LoginScreen({ navigation }: any) {
    const [loginInput, setLoginInput] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const handleLogin = async () => {
        let emailToSearch = loginInput;
        if (/^\d{10}$/.test(loginInput)) {
            const mappedEmail = await AsyncStorage.getItem(
                `phone_${loginInput}`
            );
            if (!mappedEmail) {
                Alert.alert(
                    'Error',
                    'Phone number not registered'
                );
                return;
            }
            emailToSearch = mappedEmail;
        }
        
        const user = await AsyncStorage.getItem(
            `user_${emailToSearch}`
        );
        if (!user) {
            Alert.alert('Error', 'User not found');
            return;
        }
        const userData = JSON.parse(user);
        if (userData.password !== password) {
            Alert.alert('Error', 'Incorrect password');
            return;
        }
        if (rememberMe) {
            await AsyncStorage.setItem(
                'isLoggedIn',
                'true'
            );
        }
        await AsyncStorage.setItem(
            'currentUser',
            userData.email
        );
        await AsyncStorage.setItem(
            'rememberMe',
            rememberMe ? 'true' : 'false'
        );

        navigation.replace('Home');
    };
  return (
    <View style={styles.container}>
      <Text
       style={{
        fontSize: 42,
        fontWeight: 'bold',
        color: '#0A84FF',
        textAlign: 'center',
        marginBottom: 40,
    }}
>
   Healit
</Text>

      <Text style={styles.heading}>
        Welcome Back
      </Text>

      <TextInput
        placeholder="Email or Phone Number"
        style={styles.input}
        value={loginInput}
        onChangeText={setLoginInput}
        autoCapitalize="none"
      />

      <View style={{ position: 'relative' }}>
         <TextInput
         placeholder="Password"
         secureTextEntry={!showPassword}
         style={styles.input}
         value={password}
         onChangeText={setPassword}
     />
      <TouchableOpacity
       style={{
         position: 'absolute',
         right: 15,
         top: 15,
     }}
     onPress={() => setShowPassword(!showPassword)}
     >
         <Ionicons
          name={showPassword ? 'eye-off' : 'eye'}
         size={22}
         color="gray"
     />
 </TouchableOpacity>
</View>

<TouchableOpacity
  onPress={() =>
    navigation.navigate('ForgotPassword')
  }
>
  <Text
    style={{
      textAlign: 'right',
      color: '#0A84FF',
      marginBottom: 15,
    }}
  >
    Forgot Password?
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => setRememberMe(!rememberMe)}
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  }}
>
  <Text style={{ fontSize: 18 }}>
    {rememberMe ? '☑' : '☐'}
  </Text>

  <Text
    style={{
      marginLeft: 8,
      color: '#333',
    }}
  >
    Remember Me
  </Text>
</TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
            Log In
        </Text>
     </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.signup}>
             Don't have an account? Sign Up
         </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff',
  },


  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#0A84FF',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },

  signup: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});