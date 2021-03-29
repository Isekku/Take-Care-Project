import * as React from 'react';
import { Text, View, Button, TouchableOpacity, TextInput, Linking, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import SignInScreen from './SignInScreen';



//Écran sur lequel on arrive la première fois qu'on ouvre l'appli
export default function DropScreen({ navigation }) {
  return (
    <View>
      <Image
      style={styles.Logo}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }}
      />
      <TouchableOpacity style={styles.SignUpB} onPress={() => navigation.navigate("Choix Inscription")}>
        <Text style={styles.signUpText}>Inscription</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.SignInB} onPress={() => navigation.navigate("Connexion")}>
        <Text style={styles.signInText}>Connexion</Text>
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
    marginTop:"100%",
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

  signUpText : {
    fontSize: 20,
    color: "#72807B",
  },

  signInText : {
    fontSize: 20,
    color: "#72807B",
  }
});
