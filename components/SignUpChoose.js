// Imports
import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

function SignUpChoose({ navigation }) {
  return (
    <View style={styles.baseview}>
    <Text style={styles.signUpText}>S'inscrire en tant que :</Text>

    <View style={styles.buttonView}>
    <TouchableOpacity  title = "Médecin" onPress={() => navigation.navigate("Inscription Med")} style={styles.Medecin}> 
    <Text style={styles.medecinText}>Médecin</Text>
    </TouchableOpacity>


    <TouchableOpacity title = "Patient" onPress={() => navigation.navigate("Inscription")} style={styles.Patient}> 
    <Text style={styles.patientText}>Patient</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signUpText : {
    textAlign: "center",
    fontSize: 35,
    height: 50,
    color: "#767676",
    marginTop: "40%"
  },
  Patient : {
    flex : 1,
    borderWidth:1,
    alignItems:'center',
    justifyContent : 'center',
    padding: 50,
    marginTop: "10%",
    marginLeft : "15%",
    marginRight : "15%",
    borderRadius:50,
    backgroundColor: "#84F8CD",
    borderColor: "#A7F9DA",
  },
  Medecin : {
    flex : 1,
    borderWidth:1,
    alignItems:'center',
    justifyContent : 'center',
    padding: 50,
    marginLeft : "15%",
    marginRight : "15%",
    borderRadius:60,
    backgroundColor: "#84F8CD",
    borderColor: "#A7F9DA",
  },
  
  medecinText : {
    fontSize: 30,
    color: "#707070",
  },

  patientText : {
    fontSize: 30,
    color: "#707070"
  },

  buttonView : {
    marginTop: "50%",
  },

  baseview: {
    flex : 1,
  }
})

export default SignUpChoose;