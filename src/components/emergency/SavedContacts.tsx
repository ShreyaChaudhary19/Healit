import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Contact {
  id: string;
  name: string;
  phone: string;
}

interface Props {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onCall: (phone: string) => void;
}

export default function SavedContacts({
  contacts,
  onDelete,
  onCall,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>
        Saved Emergency Contacts
      </Text>

      {contacts.length === 0 ? (
        <Text style={styles.empty}>
          No emergency contacts added yet.
        </Text>
      ) : (
        contacts.map(contact => (
          <View
            key={contact.id}
            style={styles.contactCard}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>
                {contact.name}
              </Text>

              <Text style={styles.phone}>
                {contact.phone}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => onCall(contact.phone)}
              style={styles.callButton}
            >
              <Ionicons
                name="call"
                size={22}
                color="#fff"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onDelete(contact.id)}
              style={styles.deleteButton}
            >
              <Ionicons
                name="trash"
                size={22}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        ))
      )}
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

  empty: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 20,
  },

  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  phone: {
    marginTop: 4,
    color: '#666',
  },

  callButton: {
    backgroundColor: '#2E7D32',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  deleteButton: {
    backgroundColor: '#D32F2F',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});