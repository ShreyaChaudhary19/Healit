import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';

interface AppointmentFormProps {
  appointmentDate: string;
  appointmentTime: string;
  amPm: 'AM' | 'PM';

  selectedDate: Date;
  selectedTime: Date;

  showDatePicker: boolean;
  showTimePicker: boolean;

  onDatePress: () => void;
  onTimePress: () => void;

  onToggleAmPm: () => void;

  onDateChange: (
    event: any,
    date?: Date
  ) => void;

  onTimeChange: (
    event: any,
    date?: Date
  ) => void;
}

export default function AppointmentForm({
  appointmentDate,
  appointmentTime,
  amPm,

  selectedDate,
  selectedTime,

  showDatePicker,
  showTimePicker,

  onDatePress,
  onTimePress,

  onToggleAmPm,

  onDateChange,
  onTimeChange,
}: AppointmentFormProps)
 {
  return (
    <View>

      {/* Date Picker */}
      <TouchableOpacity
        style={styles.pickerBox}
        onPress={onDatePress}
      >
        <Ionicons
          name="calendar-outline"
          size={22}
          color="#0A84FF"
        />

        <Text style={styles.pickerText}>
          {appointmentDate || 'Select Appointment Date'}
        </Text>
      </TouchableOpacity>

      {/* Time Picker */}
      <View style={styles.timeRow}>

        <TouchableOpacity
          style={[styles.pickerBox, { flex: 1 }]}
          onPress={onTimePress}
        >
          <Ionicons
            name="time-outline"
            size={22}
            color="#0A84FF"
          />

          <Text style={styles.pickerText}>
            {appointmentTime || 'Select Time'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.amPmButton}
          onPress={onToggleAmPm}
        >
          <Text style={styles.amPmText}>
            {amPm}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
            <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={onDateChange}
        />
        )}
        {showTimePicker && (
            <DateTimePicker
            value={selectedTime}
            mode="time"
            display="default"
            is24Hour={false}
            onChange={onTimeChange}
        />
    )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  pickerBox: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 16,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  pickerText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  amPmButton: {
    marginLeft: 12,
    backgroundColor: '#0A84FF',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 55,
  },

  amPmText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});