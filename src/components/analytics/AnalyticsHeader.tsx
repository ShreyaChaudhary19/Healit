import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface Props {
  userName: string;
}

export default function AnalyticsHeader({
  userName,
}: Props) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <View style={styles.container}>

      <Text style={styles.greeting}>
        {greeting},
      </Text>

      <Text style={styles.name}>
        {userName} 👋
      </Text>

      <Text style={styles.subtitle}>
        Here's your complete health overview today.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    marginTop:50,
    marginBottom:20,
  },

  greeting:{
    color:"#777",
    fontSize:18,
  },

  name:{
    fontSize:34,
    fontWeight:"bold",
    color:"#111",
    marginTop:6,
  },

  subtitle:{
    color:"#666",
    marginTop:10,
    fontSize:16,
  },

});