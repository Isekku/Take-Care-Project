import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, } from 'react-native';

//TouchableOpacity = Bouton
//Faut remettre la nav
function SignInScreen({ navigation }) {
  return (
    <View style={styles.view}>
  
    <Text style={styles.TextLog}>Connexion</Text>

    <TextInput placeholder = "Adresse mail" style = {styles.EmailInput}/>
    <TextInput placeholder = "Mot de passe" secureTextEntry={true} style = {styles.PasswordInput}/>


    <TouchableOpacity style={styles.passwordForgot} onPress={() => navigation.goBack()}>
      <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.SignInB} onPress={() => navigation.goBack()}>
        <Text style={styles.connexionText}> Se connecter</Text>
      </TouchableOpacity>

    
    </View>

  );
}

export default SignInScreen;


const styles = StyleSheet.create({
  view : {
    flex: 1
  },

  TextLog : {
    fontSize: 50,
    color: "#717171",
    textAlign: 'center', 
    marginTop : "60%"
  }, 
  EmailInput : {
        textAlign: 'left',
        fontSize : 20,
        marginTop : "30%", 
        backgroundColor : '#84F8CD',
        marginLeft : "10%",
        marginRight : "10%",
        padding :20,
        borderRadius : 50
  },
  PasswordInput : {
        textAlign: 'left',
        fontSize: 20,
        marginTop : "10%", 
        backgroundColor : '#84F8CD',
        marginLeft : "10%",
        marginRight : "10%",
        padding :20,
        borderRadius : 50
  },
  SignInB : {
    textAlign: 'center',
    justifyContent : 'center',
    marginTop : "10%", 
    backgroundColor : '#84F8CD',
    marginLeft : "30%",
    marginRight : "30%",
    padding :20,
    borderRadius : 30,
  },
  connexionText :{
    textAlign: "center",
    fontSize: 15,
  },

  forgotText : {
    marginTop: 20,
    fontSize: 20,
    color : "#8E8E8E",
    position : "relative",
    left : 160,
  }
  

  
});
