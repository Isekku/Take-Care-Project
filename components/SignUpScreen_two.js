// Imports
import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';


function SignUpScreen_two({ navigation }) {
    return (
      <View style={styles.baseview}>
        
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}> 
      <View>
        <Image
        style={styles.goBackArrow}
        source={require("../assets/fleche_retour.png")}
        />
      </View>
      </TouchableOpacity>


      <Text style={styles.inscriptionText}>Inscription</Text>
  
      <View style={styles.textinputView}>
      <TextInput placeholder = "Adresse email" style={styles.styleText}/>
      <TextInput placeholder = "Mot de passe" style={styles.styleText}/>
      <TextInput placeholder = "Corfirmer le mot de passe" style={styles.styleText}/>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Inscription 3")} style={styles.goInscriptionButton}> 
      <View>
        <Image
        style={styles.goInscriptionArrow}
        source={require("../assets/fleche_avant.png")}
        />
      </View>
      </TouchableOpacity>
      
      </View>
    );
  }

  const styles = StyleSheet.create ({
    inscriptionText : {
      marginTop: '20%',
      fontSize: 50,
      color: "#707070",
      textAlign: 'center',
    },

    styleText : {
      textAlign: 'center',
        marginTop : "5%", 
        backgroundColor : '#84F8CD',
        marginLeft : "10%",
        marginRight : "10%",
        padding :20,
        borderRadius : 100,
        color: "#707",
        fontSize: 20,
    },

    textinputView : {
      marginTop: '20%',
    },
    
    goBackButton : {
      marginTop : '10%',
    },

    goBackArrow : {
      height: 100,
      width : 100,
    },

    goInscriptionArrow : {
      position: "relative",
      left: 320,
      marginTop: "15%",
      height : 100,
      width: 100,
    },

    baseview : {
      flex: 1,
    } 
  })

  export default SignUpScreen_two;