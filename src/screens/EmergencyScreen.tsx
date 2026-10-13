import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Linking,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EmergencyContactForm from '../components/emergency/EmergencyContactForm';
import EmergencyServices from '../components/emergency/EmergencyServices';
import EmergencyButtons from '../components/emergency/EmergencyButtons';
import MedicalInfoCard from '../components/emergency/MedicalInfoCard';
import SavedContacts from '../components/emergency/SavedContacts';
export default function EmergencyScreen() {

  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const [contacts, setContacts] = useState<any[]>([]);

  const [bloodGroup, setBloodGroup] = useState('');
  const [allergies, setAllergies] = useState('');
  const [diseases, setDiseases] = useState('');
  const [medicines, setMedicines] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    const saved =
      await AsyncStorage.getItem(
        'emergencyContact'
      );

    if (saved) {
      const data = JSON.parse(saved);

      setContactName(data.name);
      setContactPhone(data.phone);
    }
  };

  const saveContact = async () => {
    if (
      !contactName.trim() ||
      !contactPhone.trim()
    ) {
      Alert.alert(
        'Error',
        'Fill all fields'
      );
      return;
    }

    await AsyncStorage.setItem(
      'emergencyContact',
      JSON.stringify({
        name: contactName,
        phone: contactPhone,
      })
    );

    Alert.alert(
      'Success',
      'Emergency contact saved'
    );
  };
  return (
     <ScrollView
       style={styles.container}
       showsVerticalScrollIndicator={false}
    >
        <Text style={styles.heading}>
            🚨 Emergency SOS
        </Text>
        <EmergencyContactForm
          contactName={contactName}
          contactPhone={contactPhone}
          setContactName={setContactName}
          setContactPhone={setContactPhone}
          onSave={saveContact}
        />
        <TouchableOpacity
         style={styles.sosButton}
         onPress={() =>
            Alert.alert(
                'SOS Activated',
                'Emergency services will be contacted.'
            )
         }
        >
            <Text style={styles.sosText}>
                🚨 HOLD FOR SOS
            </Text>
        </TouchableOpacity>
        <EmergencyServices
          onAmbulance={() =>
            Linking.openURL('tel:108')
          }
          onPolice={() =>
            Linking.openURL('tel:112')
          }
          onFire={() =>
            Linking.openURL('tel:101')
          }
        />
        <EmergencyButtons
          onShareLocation={() =>
            Alert.alert(
                'Coming Soon',
                'Live Location sharing coming soon.'
          )
        }
        onHospitals={() =>
            Alert.alert(
                'Coming Soon',
                'Nearby Hospitals coming soon.'
            )
        }
        onPharmacy={() =>
            Alert.alert(
                'Coming Soon',
                'Nearby Pharmacies coming soon.'
            )
        }
        onBloodBank={() =>
            Alert.alert(
                'Coming Soon',
                'Nearby Blood Banks coming soon.'
            )
        }
      />
      <MedicalInfoCard
        bloodGroup={bloodGroup}
        allergies={allergies}
        diseases={diseases}
        medicines={medicines}
        notes={notes}
        setBloodGroup={setBloodGroup}
        setAllergies={setAllergies}
        setDiseases={setDiseases}
        setMedicines={setMedicines}
        setNotes={setNotes}
     />
     <SavedContacts
       contacts={contacts}
       onDelete={(id) =>
         Alert.alert(
            'Delete',
            `Delete Contact ${id}`
         )
       }
       onCall={(phone) =>
         Linking.openURL(`tel:${phone}`)
       }
     />
    </ScrollView>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF3B30',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 25,
  },

  sosButton: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
    elevation: 8,
  },

  sosText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  saveButton: {
    width: '100%',
    backgroundColor: '#0A84FF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    },
    saveText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },

  optionButton: {
    width: '100%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  optionText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});