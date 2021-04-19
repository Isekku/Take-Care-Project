import React,{useState} from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function SignUpScrollMedview({ navigation }) {
  const [username, setUsername] =useState("")
  const [lastname, setLastname] =useState("")
  const [firstname, setFirstname] =useState("")
  const [sex, setSex] =useState("")
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")
  const [birth, setBirth] =useState("")
  const [doctorcode, setDoctorcode] =useState("")
  const [phone, setPhone] =useState("")

  const [pack, setPack] = useState({
  username: {username},
  firstname: {firstname},
  lastname: {lastname},
  email: {email},
  birth: {birth},
  password: {password},
  phone:{phone},
  sex:  {sex},
  iddoctor: {doctorcode}

  })
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      <View style={styles.baseview}>
      <Text style={styles.inscriptionText}>Inscription</Text>
      
      <View style={styles.textinputView}>
      <TextInput placeholder = "Nom d'utilisateur" style={styles.styleText} onChangeText={(text)=> setUsername(text)}/>
      <TextInput placeholder = "Nom" style={styles.styleText} onChangeText={(text)=> setLastname(text)}/>
      <TextInput placeholder = "Prénom" style={styles.styleText} onChangeText={(text)=> setFirstname(text)}/>
      <TextInput placeholder = "Sexe" style={styles.styleText} onChangeText={(text)=> setSex(text)}/>
      <TextInput placeholder = "Adresse email" style={styles.styleText} onChangeText={(text)=> setEmail(text)}/>
      <TextInput placeholder = "Mot de passe" style={styles.styleText} onChangeText={(text)=> setPassword(text)}/>
      <TextInput placeholder = "Corfirmer le mot de passe" style={styles.styleText}/>
      <TextInput placeholder = "N° Ordre des médecins" style={styles.styleText}/>
      <TextInput placeholder = "N° de téléphone" style={styles.styleText}/>
      <TextInput placeholder = "Discipline" style={styles.styleText}/>
      <TextInput placeholder = "Adresse du cabinet" style={styles.styleText}/>
    <TouchableOpacity onPress={() => navigation.goBack()}> 
      <View style={styles.centerbutton}>
        <Image
        style={styles.goInscriptionArrow}
        source={require("../assets/fleche_avant.png")}
        />
      </View>
    </TouchableOpacity>
      </View>

      </View>

    </ScrollView>
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    baseview : {
      flex: 1,
    }, 
    inscriptionText : {
      marginTop: '20%',
      fontSize: 50,
      color: "#707070",
      textAlign: 'center',
    },
    textinputView : {
      marginTop: '20%',
    },
    styleText : {
      textAlign: 'center',
        marginTop : "5%", 
        backgroundColor : '#84F8CD',
        marginLeft : "10%",
        marginRight : "10%",
        padding :10,
        borderRadius : 100,
        color: "#707",
        fontSize: 20,
    },
    goInscriptionArrow : {
      position: "relative",
      left: 320,
      marginTop: "15%",
      height : 100,
      width: 100,
    },

  
});


  export default SignUpScrollMedview;