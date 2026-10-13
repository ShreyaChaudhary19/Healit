import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  appointments: number;
  reports: number;
  predictions: number;
  medicines: number;
}

export default function DashboardCards({
  appointments,
  reports,
  predictions,
  medicines,
}: Props) {

  const cards = [
    {
      emoji: "👨‍⚕️",
      value: appointments,
      title: "Appointments",
      color: "#0A84FF",
    },
    {
      emoji: "📄",
      value: reports,
      title: "Reports",
      color: "#8E44AD",
    },
    {
      emoji: "🤖",
      value: predictions,
      title: "AI Predictions",
      color: "#00B894",
    },
    {
      emoji: "💊",
      value: medicines,
      title: "Medicines",
      color: "#FF9800",
    },
  ];

  return (
    <View style={styles.container}>

      {cards.map((card, index) => (

        <View
          key={index}
          style={styles.card}
        >

          <View
            style={[
              styles.iconCircle,
              { backgroundColor: card.color },
            ]}
          >
            <Text style={styles.icon}>
              {card.emoji}
            </Text>
          </View>

          <Text style={styles.value}>
            {card.value}
          </Text>

          <Text style={styles.title}>
            {card.title}
          </Text>

        </View>

      ))}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 22,
    paddingHorizontal: 15,
    marginBottom: 18,
    alignItems: "center",

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 28,
  },

  value: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
    color: "#111",
  },

  title: {
    marginTop: 8,
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    fontWeight: "600",
  },

});