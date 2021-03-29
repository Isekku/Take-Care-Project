// Imports
import * as React from 'react';
import { Text, View, Button, TouchableOpacity, TextInput, Linking, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import DropScreen from './DropScreen'
import SignInScreen from './SignInScreen'

function SignUpChoose({ navigation }) {
  return (
    <View>
    <Text Inscription/>
    <Button title = "Patient" onPress={() => navigation.navigate("Inscription")}/>
    <Button  title = "Médecin" onPress={() => navigation.navigate("Inscription Med")}/>
    <Button title = "Go back" onPress={() => navigation.goBack()}/>
    <Button title = "Go forward" onPress={() => navigation.navigate("Inscription 2")}/>
    </View>
  );
}


export default SignUpChoose;