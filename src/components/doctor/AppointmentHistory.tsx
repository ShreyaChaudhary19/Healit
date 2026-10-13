import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface Appointment {
  doctor: string;
  date: string;
  time: string;
}

interface AppointmentHistoryProps {
  appointments: Appointment[];
}

export default function AppointmentHistory({
  appointments,
}: AppointmentHistoryProps) {
  return (
    <>
      <Text style={styles.heading}>
        My Appointments
      </Text>

      {appointments.length === 0 ? (
        <Text>No appointments booked yet.</Text>
      ) : (
        appointments.map((appointment, index) => (
          <View
            key={index}
            style={styles.card}
          >
            <Text>
              👨‍⚕️ {appointment.doctor}
            </Text>

            <Text>
              📅 {appointment.date}
            </Text>

            <Text>
              ⏰ {appointment.time}
            </Text>
          </View>
        ))
      )}
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
  },
});