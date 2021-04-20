import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DropScreen from './DropScreen';
import SignInScreen from './SignInScreen';
import SignUpChoose from './SignUpChoose';
import SignUpScrollview from './SignUpScrollview';
import SignUpMedScrollview from './SignUpScrollMedview';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="DropScreen" component={DropScreen}/>
        <RootStack.Screen name="Choix Inscription" component={SignUpChoose} />
        <RootStack.Screen name="Connexion" component={SignInScreen}/>
        <RootStack.Screen name="Inscription scroll" component={SignUpScrollview}/>
        <RootStack.Screen name="Inscription Med scroll" component={SignUpMedScrollview}/>
    </RootStack.Navigator>
);

export default RootStackScreen;