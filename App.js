// Imports
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './components/SignInScreen';
import SignUpChoose from './components/SignUpChoose';
import SignUpScreen_one from './components/SignUpScreen_one';
import DropScreen from './components/DropScreen';
import SignUpScreen_Med_one from './components/SignUpScreen_Med_one';
import SignUpScreen_two from './components/SignUpScreen_two';
import SignUpScreen_Med_two from './components/SignUpScreen_Med_two';
import SignUpScreen_three from './components/SignUpScreen_three';
import SignUpScreen_Med_three from './components/SignUpScreen_Med_three';
import SignUpScreen_four from './components/SignUpScreen_four';
import SignUpScreen_five from './components/SignUpScreen_five';
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import AvatarScreen from './components/AvatarScreen';



const Stack = createStackNavigator();

//Bon, pour le moment tout est dans le même fichier donc c'est un peu chiant de s'y retrouver, j evais mettre le plus de docstrings possible

//Je vais essayer de faire les fonctions dans le sens de la route de l'appli prévue.

//Fonction App, affiche tout nos components
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName = "" screenOptions={{headerShown:false }}>
      <Stack.Screen name="DropScreen" component={DropScreen} />
      <Stack.Screen name="Connexion" component={SignInScreen} />
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Choix Inscription" component={SignUpChoose} />
      <Stack.Screen name="Inscription" component={SignUpScreen_one} />
      <Stack.Screen name="Inscription 2" component={SignUpScreen_two} />
      <Stack.Screen name="Inscription 3" component={SignUpScreen_three} />
      <Stack.Screen name="Inscription 4" component={SignUpScreen_four} />
      <Stack.Screen name="Inscription 5" component={SignUpScreen_five} />
      <Stack.Screen name="Inscription Med" component={SignUpScreen_Med_one} />
      <Stack.Screen name="Inscription Med 2" component={SignUpScreen_Med_two} />
      <Stack.Screen name="Inscription Med 3" component={SignUpScreen_Med_three} />
      <Stack.Screen name="Parametre" component={SettingScreen} />
      <Stack.Screen name="Profil" component={AvatarScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

//Écran d'inscription utilisateur.
//Les écrans SignUp_X sont dan sl'ordre de la maquette, on différenciera avec les écrans médecin.

//Franchement je ne vois pas l'utilité de cet écran mais soit

//Inscription des médecins, même fonctionnement
//pour le moment on a ni les boutons, ni les images donc il y a rien


