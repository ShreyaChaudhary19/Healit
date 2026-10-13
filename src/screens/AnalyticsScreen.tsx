import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AnalyticsScreen() {
  const [appointments, setAppointments] = useState(0);
  const [reports, setReports] = useState(0);
  const [predictions, setPredictions] = useState(0);
  const [medicines, setMedicines] = useState(0);
  const [contacts, setContacts] = useState(0);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    const email = await AsyncStorage.getItem("currentUser");

    if (!email) return;

    const appointmentData = await AsyncStorage.getItem(
      `appointments_${email}`
    );

    if (appointmentData) {
      setAppointments(JSON.parse(appointmentData).length);
    }

    const reportData = await AsyncStorage.getItem(
      `reports_${email}`
    );

    if (reportData) {
      setReports(JSON.parse(reportData).length);
    }

    const predictionData = await AsyncStorage.getItem(
      `predictions_${email}`
    );

    if (predictionData) {
      setPredictions(JSON.parse(predictionData).length);
    }

    const medicineData = await AsyncStorage.getItem(
      `medicines_${email}`
    );

    if (medicineData) {
      setMedicines(JSON.parse(medicineData).length);
    }

    const contactData = await AsyncStorage.getItem(
      `emergencyContacts_${email}`
    );

    if (contactData) {
      setContacts(JSON.parse(contactData).length);
    }
  };

  const healthScore = Math.min(
    100,
    50 +
      appointments * 5 +
      reports * 3 +
      medicines * 4 +
      predictions * 2
  );

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Health Analytics
      </Text>

      <View style={styles.scoreCard}>
        <Text style={styles.scoreTitle}>
          AI Health Score
        </Text>

        <Text style={styles.score}>
          {healthScore}%
        </Text>

        <Text style={styles.scoreSubtitle}>
          Based on your health activity
        </Text>
      </View>

      <Text style={styles.heading}>
        Dashboard
      </Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.icon}>👨‍⚕️</Text>
          <Text style={styles.number}>
            {appointments}
          </Text>
          <Text style={styles.label}>
            Appointments
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>📄</Text>
          <Text style={styles.number}>
            {reports}
          </Text>
          <Text style={styles.label}>
            Reports
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.icon}>🤖</Text>
          <Text style={styles.number}>
            {predictions}
          </Text>
          <Text style={styles.label}>
            AI Predictions
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>💊</Text>
          <Text style={styles.number}>
            {medicines}
          </Text>
          <Text style={styles.label}>
            Medicines
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.icon}>🚑</Text>
          <Text style={styles.number}>
            {contacts}
          </Text>
          <Text style={styles.label}>
            Emergency Contacts
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.icon}>❤️</Text>
          <Text style={styles.number}>
            {healthScore}
          </Text>
          <Text style={styles.label}>
            Health Score
          </Text>
        </View>
      </View>

      <Text style={styles.heading}>
        Weekly Activity
      </Text>

      {[
        ["Appointments", appointments],
        ["Reports", reports],
        ["Predictions", predictions],
        ["Medicines", medicines],
      ].map(([title, value]) => (
        <View key={title} style={{ marginBottom: 18 }}>
          <Text style={styles.progressTitle}>
            {title}
          </Text>

          <View style={styles.progressBg}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${Math.min(
                    Number(value) * 20,
                    100
                  )}%`,
                },
              ]}
            />
          </View>
        </View>
      ))}

      <Text style={styles.heading}>
        AI Health Insights
      </Text>

      <View style={styles.tipCard}>
        <Text style={styles.tip}>
          ✅ Keep taking medicines on time.
        </Text>

        <Text style={styles.tip}>
          ✅ Schedule regular doctor visits.
        </Text>

        <Text style={styles.tip}>
          ✅ Upload reports for better AI analysis.
        </Text>

        <Text style={styles.tip}>
          ✅ Keep emergency contacts updated.
        </Text>
      </View>

      <Text style={styles.heading}>
        Recent Activity
      </Text>

      <View style={styles.activityCard}>
        <Text style={styles.activity}>
          👨‍⚕️ Doctor Appointments : {appointments}
        </Text>

        <Text style={styles.activity}>
          📄 Medical Reports : {reports}
        </Text>

        <Text style={styles.activity}>
          🤖 AI Predictions : {predictions}
        </Text>

        <Text style={styles.activity}>
          💊 Medicines Added : {medicines}
        </Text>

        <Text style={styles.activity}>
          🚑 Emergency Contacts : {contacts}
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0A84FF",
    marginTop: 40,
    marginBottom: 20,
  },

  scoreCard: {
    backgroundColor: "#0A84FF",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    marginBottom: 25,
  },

  scoreTitle: {
    color: "#fff",
    fontSize: 20,
  },

  score: {
    color: "#fff",
    fontSize: 52,
    fontWeight: "bold",
    marginVertical: 10,
  },

  scoreSubtitle: {
    color: "#EAF4FF",
    fontSize: 15,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#222",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },

  icon: {
    fontSize: 34,
  },

  number: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0A84FF",
    marginTop: 8,
  },

  label: {
    marginTop: 8,
    color: "#666",
    textAlign: "center",
  },

  progressTitle: {
    marginBottom: 8,
    fontWeight: "600",
  },

  progressBg: {
    height: 12,
    backgroundColor: "#ddd",
    borderRadius: 10,
  },

  progressFill: {
    height: 12,
    backgroundColor: "#0A84FF",
    borderRadius: 10,
  },

  tipCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    elevation: 4,
  },

  tip: {
    fontSize: 16,
    marginBottom: 12,
  },

  activityCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    elevation: 4,
    marginBottom: 40,
  },

  activity: {
    fontSize: 16,
    marginBottom: 12,
  },
});