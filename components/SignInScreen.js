import * as React from 'react';
import { Text, View, Button, TouchableOpacity, TextInput, Linking, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import DropScreen from './DropScreen'


//TouchableOpacity = Bouton
//Faut remettre la nav
function SignInScreen({ navigation }) {
  return (
    <View>
  
    <Text style={styles.TextLog}>Connexion</Text>

    <TextInput placeholder = "Adreese mail" style = {styles.EmailInput}/>
    <TextInput placeholder = "Mot de passe" secureTextEntry={true} style = {styles.PasswordInput}/>
    
    <TouchableOpacity style={styles.SignInB} onPress={() => navigation.goBack()}>
        <Text>Connexion</Text>
      </TouchableOpacity>

    </View>

  );
}

export default SignInScreen;


const styles = StyleSheet.create({
  TextLog : {
    fontSize: 50,
    color: "#000",
    textAlign: 'center', 
    marginTop : "60%"
  }, 
  EmailInput : {
        textAlign: 'center',
        marginTop : "30%", 
        backgroundColor : '#21F3A6',
        marginLeft : "10%",
        marginRight : "10%",
        padding :10,
        borderRadius : 30
  },
  PasswordInput : {
    textAlign: 'center',
        marginTop : "10%", 
        backgroundColor : '#21F3A6',
        marginLeft : "10%",
        marginRight : "10%",
        padding :10,
        borderRadius : 30
  },
  SignInB : {
    textAlign: 'center',
    justifyContent : 'center',
    marginTop : "10%", 
    backgroundColor : '#21F3A6',
    marginLeft : "30%",
    marginRight : "30%",
    padding :10,
    borderRadius : 30
  }


  

  
});
