import React, {useState} from 'react';
import { Alert, Modal,Pressable, Text, View, TouchableOpacity, TextInput, StyleSheet, ScrollView, SafeAreaView, Image, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'

function SignUpScrollview({ navigation }) {
  const [username_u, setUsername] =useState("")
  const [lastname_u, setLastname] =useState("")
  const [firstname_u, setFirstname] =useState("")
  const [sex_u, setSex] =useState("")
  const [email_u, setEmail] =useState("")
  const [password_u, setPassword] =useState("")
  const [birth_u, setBirth] =useState("")
  const [doctorcode_u, setDoctorcode] =useState("")
  const [phone_u, setPhone] =useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const set = 'profils'
 

  const [pack, setPack] = useState({
  username: {username_u},
  firstname: {firstname_u},
  lastname: {lastname_u},
  email: {email_u},
  birth: {birth_u},
  password: {password_u},
  phone:{phone_u},
  sex:  {sex_u},
  iddoctor: {doctorcode_u}
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
          <TextInput placeholder = "Taille" style={styles.styleText}/>
          <TextInput placeholder = "Poids" style={styles.styleText}/>
          <TextInput placeholder = "Date de naissance" style={styles.styleText} onChangeText={(text)=> setBirth(text)}/>
          <TextInput placeholder = "Doctorcode" style={styles.styleText} onChangeText={(text)=> setDoctorcode(text)}/>
          <TextInput placeholder = "Numéro de téléphone" style={styles.styleText} onChangeText={(text)=> setPhone(text)}/>
          

    <TouchableOpacity onPress={() => navigation.navigate("Accueil")} style={styles.goInscriptionButton}> 
      <View style={styles.centerbutton}>
        <Image
        style={styles.goInscriptionArrow}
        source={require("../assets/fleche_avant.png")}
        />
      </View>
    </TouchableOpacity>
      </View>

      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>

  nom d'utilisateur: {username_u} {"\n"}
  prénom: {firstname_u} {"\n"}
  nom: {lastname_u} {"\n"}
  email: {email_u} {"\n"}
  date de naissance: {birth_u} {"\n"}
  mot de passe: {password_u} {"\n"}
  numéro de téléphone:{phone_u} {"\n"}
  sexe: {sex_u} {"\n"}
  iddoctor: {doctorcode_u} {"\n"}

            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>

              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Vérifier les informations</Text>
      </Pressable>

      

      <Button title ="S'inscrire" onPress={()=> 
    axios.post('http://takecare.southcentralus.cloudapp.azure.com/api/users/profils', {
  username: username_u,
  firstname: firstname_u,
  lastname: lastname_u,
  email: email_u,
  birth: birth_u,
  password: password_u,
  phone: phone_u,
  sex: sex_u,
  iddoctor: doctorcode_u,
  })

  }/>


   <Button title ="S'inscrire meth 2" onPress={()=> 
    axios.post('http://takecare.southcentralus.cloudapp.azure.com/api/users/$set', {
  username: username_u,
  firstname: firstname_u,
  lastname: lastname_u,
  email: email_u,
  birth: birth_u,
  password: password_u,
  phone: phone_u,
  sex: sex_u,
  iddoctor: doctorcode_u,
  })
  }
/>

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
    modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

  
});


  export default SignUpScrollview;