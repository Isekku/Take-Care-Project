// Imports
import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';


function SignUpScreen_Med_one({ navigation }) {
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
      <TextInput placeholder = "Nom" style={styles.styleText}/>
      <TextInput placeholder = "Prénom" style={styles.styleText}/>
      <TextInput placeholder = "Sexe" style={styles.styleText}/>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Inscription Med 2")} style={styles.goInscriptionButton}> 
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
      backgroundColor : "#84F8CD",
      marginTop: '5%',
      padding : 20,
      borderRadius: 100,
      fontSize: 20,
      width: 350,
      position: "relative",
      left: '8%',
      color: "#707070",
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

  export default SignUpScreen_Med_one;