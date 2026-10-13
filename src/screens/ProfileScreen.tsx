import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
} from 'react-native';
type Profile = {
  name: string;
  age: string;
  gender: string;
  bloodGroup: string;
  height: string;
  weight: string;
  allergies: string;
  medicalConditions: string;
  medications: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  relationship: string;
};

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [medications, setMedications] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  
  const [relationship, setRelationship] = useState('');

  const [savedProfile, setSavedProfile] =
    useState<Profile | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await AsyncStorage.getItem('userProfile');

      if (data) {
        const profile: Profile = JSON.parse(data);

        setName(profile.name || '');
        setAge(profile.age || '');
        setGender(profile.gender || '');
        setBloodGroup(profile.bloodGroup || '');
        setHeight(profile.height || '');
        setWeight(profile.weight || '');
        setAllergies(profile.allergies || '');
        setMedicalConditions(profile.medicalConditions || '');
        setMedications(profile.medications || '');
        setEmergencyContactName(
          profile.emergencyContactName || ''
        );
        setEmergencyContactNumber(
          profile.emergencyContactNumber || ''
        );
        setRelationship(
             profile.relationship || ''
        );

        setSavedProfile(profile);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveProfile = async () => {
    if (
      !name ||
      !age ||
      !gender ||
      !bloodGroup ||
      !emergencyContactName ||
      !emergencyContactNumber
    ) {
      Alert.alert(
        'Missing Information',
        'Please fill all required fields'
      );
      return;
    }

    try {
      const profile: Profile = {
        name,
        age,
        gender,
        bloodGroup,
        height,
        weight,
        allergies,
        medicalConditions,
        medications,
        emergencyContactName,
        emergencyContactNumber,
        relationship,
      };

      await AsyncStorage.setItem(
        'userProfile',
        JSON.stringify(profile)
      );

      setSavedProfile(profile);

      Alert.alert(
        'Success',
        'Profile Saved Successfully'
      );
    } catch (error) {
      console.log(error);

      Alert.alert(
        'Error',
        'Failed to save profile'
      );
    }
  };

  if (savedProfile) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>
          Profile Information
        </Text>

        <View style={styles.profileCard}>
          <Text style={styles.infoText}>
            👤 Name: {savedProfile.name}
          </Text>

          <Text style={styles.infoText}>
            🎂 Age: {savedProfile.age}
          </Text>

          <Text style={styles.infoText}>
            🚻 Gender: {savedProfile.gender}
          </Text>

          <Text style={styles.infoText}>
            🩸 Blood Group: {savedProfile.bloodGroup}
          </Text>

          <Text style={styles.infoText}>
            📏 Height: {savedProfile.height} cm
          </Text>

          <Text style={styles.infoText}>
            ⚖️ Weight: {savedProfile.weight} kg
          </Text>

          <Text style={styles.infoText}>
            ⚠️ Allergies: {savedProfile.allergies}
          </Text>

          <Text style={styles.infoText}>
            🏥 Conditions:
            {' '}
            {savedProfile.medicalConditions}
          </Text>

          <Text style={styles.infoText}>
            💊 Medications:
            {' '}
            {savedProfile.medications}
          </Text>

          <Text style={styles.infoText}>
            👨‍👩‍👧 Contact Name:
            {' '}
            {savedProfile.emergencyContactName}
          </Text>
          <Text style={styles.infoText}>
            ❤️ Relationship:
              {' '}
              {savedProfile.relationship}
          </Text>
          <Text style={styles.infoText}>
            📞 Contact Number:
            {' '}
            {savedProfile.emergencyContactNumber}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setSavedProfile(null)}
        >
          <Text style={styles.editButtonText}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        My Profile
      </Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Age"
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Gender</Text>

<View style={styles.pickerContainer}>
  <Picker
    selectedValue={gender}
    onValueChange={(itemValue) =>
      setGender(itemValue)
    }
  >
    <Picker.Item label="Select Gender" value="" />
    <Picker.Item label="Female" value="Female" />
    <Picker.Item label="Male" value="Male" />
    <Picker.Item label="Other" value="Other" />
  </Picker>
</View>

      <Text style={styles.label}>Blood Group</Text>

<View style={styles.pickerContainer}>
  <Picker
    selectedValue={bloodGroup}
    onValueChange={(itemValue) =>
      setBloodGroup(itemValue)
    }
  >
    <Picker.Item label="Select Blood Group" value="" />

    <Picker.Item label="A+" value="A+" />
    <Picker.Item label="A-" value="A-" />

    <Picker.Item label="B+" value="B+" />
    <Picker.Item label="B-" value="B-" />

    <Picker.Item label="AB+" value="AB+" />
    <Picker.Item label="AB-" value="AB-" />

    <Picker.Item label="O+" value="O+" />
    <Picker.Item label="O-" value="O-" />
  </Picker>
</View>

      <TextInput
        placeholder="Height (cm)"
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Weight (kg)"
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Allergies"
        style={styles.input}
        value={allergies}
        onChangeText={setAllergies}
      />

      <TextInput
        placeholder="Medical Conditions"
        style={styles.input}
        value={medicalConditions}
        onChangeText={setMedicalConditions}
      />

      <TextInput
        placeholder="Current Medications"
        style={styles.input}
        value={medications}
        onChangeText={setMedications}
      />

      <TextInput
        placeholder="Emergency Contact Name"
        style={styles.input}
        value={emergencyContactName}
        onChangeText={setEmergencyContactName}
      />

      <Text style={styles.label}>
        Emergency Contact Relationship
      </Text>

<View style={styles.pickerContainer}>
  <Picker
    selectedValue={relationship}
    onValueChange={(itemValue) =>
      setRelationship(itemValue)
    }
  >
    <Picker.Item label="Select" value="" />
    <Picker.Item label="Mother" value="Mother" />
    <Picker.Item label="Father" value="Father" />
    <Picker.Item label="Brother" value="Brother" />
    <Picker.Item label="Sister" value="Sister" />
    <Picker.Item label="Spouse" value="Spouse" />
    <Picker.Item label="Friend" value="Friend" />
    <Picker.Item label="Other" value="Other" />
  </Picker>
</View>

      <TextInput
        placeholder="Emergency Contact Number"
        style={styles.input}
        value={emergencyContactNumber}
        onChangeText={setEmergencyContactNumber}
        keyboardType="phone-pad"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={saveProfile}
      >
        <Text style={styles.buttonText}>
          Save Profile
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A84FF',
    marginTop: 50,
    marginBottom: 30,
  },

  input: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  button: {
    backgroundColor: '#0A84FF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 30,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  profileCard: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    elevation: 4,
  },

  infoText: {
    fontSize: 17,
    marginBottom: 15,
    color: '#333',
  },

  editButton: {
    backgroundColor: '#0A84FF',
    padding: 18,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 30,
  },

  editButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  pickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    overflow: 'hidden',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },
});