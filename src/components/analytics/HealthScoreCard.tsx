import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface Props{
    score:number;
}

export default function HealthScoreCard({
    score,
}:Props){

const getStatus=()=>{

if(score>=90)
return "Excellent";

if(score>=75)
return "Very Good";

if(score>=60)
return "Good";

if(score>=40)
return "Needs Improvement";

return "Critical";

};

return(

<View style={styles.card}>

<Text style={styles.title}>
AI Health Score
</Text>

<Text style={styles.score}>
{score}
</Text>

<Text style={styles.status}>
{getStatus()}
</Text>

<Text style={styles.description}>
Based on your appointments,
medicine adherence,
reports and AI activity.
</Text>

</View>

);

}

const styles=StyleSheet.create({

card:{
backgroundColor:"#0A84FF",
borderRadius:28,
padding:30,
alignItems:"center",
elevation:6,
marginBottom:25,
},

title:{
color:"white",
fontSize:20,
fontWeight:"600",
},

score:{
fontSize:72,
fontWeight:"bold",
color:"white",
marginVertical:10,
},

status:{
fontSize:24,
fontWeight:"700",
color:"#EAF4FF",
},

description:{
marginTop:15,
textAlign:"center",
color:"#DCEEFF",
fontSize:15,
lineHeight:22,
},

});