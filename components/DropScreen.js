import * as React from 'react';
import { Text, View, Button, TouchableOpacity, TextInput, Linking, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import SignInScreen from './SignInScreen';



//Écran sur lequel on arrive la première fois qu'on ouvre l'appli
export default function DropScreen({ navigation }) {
  return (
    <View>
      <View>
      <Image
      style={styles.tclogo}
      source={require("../assets/logo_tc_png.png")}
      />
      </View>
      <TouchableOpacity style={styles.SignUpB} onPress={() => navigation.navigate("Choix Inscription")}>
        <Text style={styles.signText}>Inscription</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.SignInB} onPress={() => navigation.navigate("Connexion")}>
        <Text style={styles.signText}>Connexion</Text>
      </TouchableOpacity>
      
    </View>
  );
}



const styles = StyleSheet.create({
  SignUpB : {
    flex : 1,
    borderWidth:1,
    alignItems:'center',
    justifyContent : 'center',
    padding: 40,
    marginTop:"60%",
    marginLeft : "15%",
    marginRight : "15%",
    borderRadius:50,
    backgroundColor: "#84F8CD",
    borderColor: "#84F8CD",
  },

  SignInB : {
    flex : 1,
    borderWidth:1,
    alignItems:'center',
    justifyContent : 'center',
    padding : 40,
    marginTop:"5%",
    marginLeft : "15%",
    marginRight : "15%",
    borderRadius:50,
    backgroundColor: "#84F8CD",
    borderColor: "#84F8CD",
  },

  signText : {
    fontSize: 23,
    color: "#72807B",
  },

  tclogo: {
    position: "relative",
    left: "26%",
    top: 200,
    width: 200,
    height: 170,
    justifyContent : 'center',
    alignItems : 'center'
  }
});
