import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Linking, StatusBar, Alert} from 'react-native';
import {AuthContext} from './context';
import { useTheme } from 'react-native-paper';
import Users from '../models/users';

//TouchableOpacity = Bouton
//Faut remettre la nav
const SignInScreen = ({ navigation }) => {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
});

const { colors } = useTheme();

const { signIn } = React.useContext(AuthContext);

const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}

const loginHandle = (userName, password) => {

    const foundUser = Users.filter( item => {
        return userName == item.username && password == item.password;
    } );

    if ( data.username.length == 0 || data.password.length == 0 ) {
        Alert.alert('Alerte !', 'Le pseudonyme et le mot de passe ne peuvent pas être vide.', [
            {text: 'Ok'}
        ]);
        return;
    }

    if ( foundUser.length == 0 ) {
        Alert.alert('Incorrect!', 'Pseudonyme ou mot de passe incorrect.', [
            {text: 'Ok'}
        ]);
        return;
    }
    signIn(foundUser);
}
  return (
    <View style={styles.view}>
  
    <Text style={styles.TextLog}>Connexion</Text>

    <TextInput 
                    placeholder="Pseudonyme"
                    placeholderTextColor="#666666"
                    style={styles.EmailInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />

    <TextInput 
                    placeholder="Mot de passe"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.PasswordInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
    


    <TouchableOpacity style={styles.passwordForgot}  onPress={ ()=> Linking.openURL('https://google.com/')}>
      <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.SignInB} onPress={() => {loginHandle( data.username, data.password )}}>
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
