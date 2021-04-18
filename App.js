import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'


import SignInScreen from './components/SignInScreen';
import SignUpChoose from './components/SignUpChoose';
import DropScreen from './components/DropScreen';
import SignUpScreen_Med_one from './components/SignUpScreen_Med_one';
import SignUpScreen_Med_two from './components/SignUpScreen_Med_two';
import SignUpScreen_Med_three from './components/SignUpScreen_Med_three';
import HomeScreen from './components/HomeScreen';
import SignUpSrcollview from './components/SignUpScrollview';
import SignUpMedScrollview from './components/SignUpScrollMedview'


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
      <Stack.Screen name="Choix Inscription" component={SignUpChoose} />
      <Stack.Screen name="Inscription scroll" component={SignUpSrcollview} />
      <Stack.Screen name="Inscription Med scroll" component={SignUpMedScrollview} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

