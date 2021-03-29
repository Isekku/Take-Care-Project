import * as React from 'react';
import { Text, View, Button, TouchableOpacity, TextInput, Linking, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import SignInScreen from './SignInScreen';



//Écran sur lequel on arrive la première fois qu'on ouvre l'appli
export default function DropScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity style={styles.SignUpB} onPress={() => navigation.navigate("Choix Inscription")}>
        <Text>Inscription</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.SignInB} onPress={() => navigation.navigate("Connexion")}>
        <Text>Connexion</Text>
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
    padding : 30,
    marginTop:"100%",
    marginLeft : "15%",
    marginRight : "15%",
    borderRadius:30,

  },
  SignInB : {
    flex : 1,
    borderWidth:1,
    alignItems:'center',
    justifyContent : 'center',
    padding : 30,
    marginTop:"10%",
    marginLeft : "15%",
    marginRight : "15%",
    borderRadius:30,
  }
});
