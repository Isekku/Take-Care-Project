import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';


import SignInScreen from './components/SignInScreen';
import SignUpChoose from './components/SignUpChoose';
import DropScreen from './components/DropScreen';
import HomeScreen from './components/HomeScreen';
import SignUpSrcollview from './components/SignUpScrollview';
import SignUpMedScrollview from './components/SignUpScrollMedview';
import SettingScreen from './components/SettingScreen';
import AvatarScreen from './components/AvatarScreen';


const Stack = createStackNavigator();

//Bon, pour le moment tout est dans le même fichier donc c'est un peu chiant de s'y retrouver, j evais mettre le plus de docstrings possible

//Je vais essayer de faire les fonctions dans le sens de la route de l'appli prévue.

//Fonction App, affiche tout nos components
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName = "DropScreen" screenOptions={{headerShown:false }}>

      <Stack.Screen name="DropScreen" component={DropScreen} />

      <Stack.Screen name="Connexion" component={SignInScreen} />
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Parametre" component={SettingScreen} />
      <Stack.Screen name="Profil" component={AvatarScreen} />
      <Stack.Screen name="Choix Inscription" component={SignUpChoose} />
      <Stack.Screen name="Inscription scroll" component={SignUpSrcollview} />
      <Stack.Screen name="Inscription Med scroll" component={SignUpMedScrollview} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

