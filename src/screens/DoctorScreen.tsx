import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doctors } from '../components/doctor/DoctorData';
import DoctorSearch from '../components/doctor/DoctorSearch';
import DoctorCard from '../components/doctor/DoctorCard';
import AppointmentForm from '../components/doctor/AppointmentForm';
import AppointmentHistory from '../components/doctor/AppointmentHistory';

export default function DoctorScreen() {
  interface Appointment {
     doctor: string;
     date: string;
     time: string;
     }
     const [appointments, setAppointments] =
       useState<Appointment[]>([]);
    const [selectedDoctor, setSelectedDoctor] =
      useState('');
    const [appointmentDate, setAppointmentDate] =
      useState('');
    const [appointmentTime, setAppointmentTime] =
      useState('');
    const [selectedDate, setSelectedDate] =
      useState(new Date());
    const [selectedTime, setSelectedTime] =
      useState(new Date());
    const [showDatePicker, setShowDatePicker] =
      useState(false);
    const [showTimePicker, setShowTimePicker] =
      useState(false);
    const [amPm, setAmPm] =
      useState<'AM' | 'PM'>('AM');
  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const email =
     await AsyncStorage.getItem(
        'currentUser'
    );

    if (!email) return;

    const data =
      await AsyncStorage.getItem(
        `appointments_${email}`
      );

    if (data) {
      setAppointments(JSON.parse(data));
    }
  };
  const handleTimeChange = (
            event: any,
            selected?: Date
        ) => {
            setShowTimePicker(false);
            if (selected) {
                setSelectedTime(selected);
                let hours = selected.getHours();
                const minutes = selected
                 .getMinutes()
                 .toString()
                 .padStart(2, '0');
                 const period =
                  hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12;
                setAppointmentTime(
                    `${hours}:${minutes}`
                );
                setAmPm(period);
            }
        };

  const bookAppointment = async (
    doctorName: string
  ) => {
    if(
        !appointmentDate.trim() ||
        !appointmentTime.trim()
    )
    {
        Alert.alert(
            'Error',
            'Please select date and time'
        );
        
        return;
    }
    const email =
        await AsyncStorage.getItem(
            'currentUser'
        );
        if(!email) return;
        const newAppointment: Appointment = {
            doctor: doctorName,
            date: appointmentDate,
            time: `${appointmentTime} ${amPm}`,
        };
        const updatedAppointments = [
            ...appointments,
            newAppointment,
        ];
        setAppointments(updatedAppointments);
        await AsyncStorage.setItem(
            `appointments_${email}`,
            JSON.stringify(updatedAppointments)
        );
        Alert.alert(
            'Appointment Booked',
            `Appointment booked with ${doctorName} on ${appointmentDate} at ${appointmentTime}` 
        );
        setAppointmentDate('');
        setAppointmentTime('');
  };
  const handleDateChange = (
     event: any,
     selected?: Date
 ) => {
  setShowDatePicker(false);

  if (selected) {
    setSelectedDate(selected);

    const day = selected
      .getDate()
      .toString()
      .padStart(2, '0');

    const month = (selected.getMonth() + 1)
      .toString()
      .padStart(2, '0');

    const year = selected.getFullYear();

    setAppointmentDate(
      `${day}/${month}/${year}`
    );
  }
};

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>
        Find a Doctor
      </Text>
      <DoctorSearch
        value={selectedDoctor}
        onChangeText={setSelectedDoctor}
    />
    <AppointmentForm
  appointmentDate={appointmentDate}
  appointmentTime={appointmentTime}
  amPm={amPm}

  selectedDate={selectedDate}
  selectedTime={selectedTime}

  showDatePicker={showDatePicker}
  showTimePicker={showTimePicker}

  onDatePress={() => setShowDatePicker(true)}
  onTimePress={() => setShowTimePicker(true)}

  onToggleAmPm={() =>
    setAmPm(amPm === 'AM' ? 'PM' : 'AM')
  }

  onDateChange={handleDateChange}
  onTimeChange={handleTimeChange}
/>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 15 }}
    >
        {[
            'All',
            'Cardiologist',
            'Dermatologist',
            'Neurologist',
            'Orthopedic',
            'Ophthalmologist',
            'General Physician',
        ].map((specialty) => (
             <TouchableOpacity
               key={specialty}
               style={{
                 backgroundColor:
                   selectedDoctor === specialty
                     ? '#0A84FF'
                     : '#fff',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 20,
                marginRight: 10,
            }}
            onPress={() =>
                setSelectedDoctor(
                    specialty === 'All'
                      ? ''
                      : specialty
                    )
                }
            >
                <Text
                  style={{
                    color:
                      selectedDoctor === specialty
                       ? '#fff'
                       : '#333',
                    }}
                >
                    {specialty}
                </Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
      
{doctors
  .filter((doctor) =>
    doctor.name
      .toLowerCase()
      .includes(selectedDoctor.toLowerCase()) ||
    doctor.specialization
      .toLowerCase()
      .includes(selectedDoctor.toLowerCase())
  )
  .map((doctor) => (
    <DoctorCard
      key={doctor.id}
      doctor={doctor}
      onBook={bookAppointment}
    />
  ))}
  <AppointmentHistory
    appointments={appointments}
/>

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
    marginTop: 40,
    marginBottom: 20,
  },
});
