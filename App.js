import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { View } from 'react-native';
import { useEffect } from 'react';


import SignInScreen from './components/SignInScreen';
import SignUpChoose from './components/SignUpChoose';
import DropScreen from './components/DropScreen';
import HomeScreen from './components/HomeScreen';
import SignUpSrcollview from './components/SignUpScrollview';
import SignUpMedScrollview from './components/SignUpScrollMedview';
import SettingScreen from './components/SettingScreen';
import AvatarScreen from './components/AvatarScreen';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext } from './components/context'; 
import RootStackScreen from './components/RootStackScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

//Bon, pour le moment tout est dans le même fichier donc c'est un peu chiant de s'y retrouver, j evais mettre le plus de docstrings possible

//Je vais essayer de faire les fonctions dans le sens de la route de l'appli prévue.

//Fonction App, affiche tout nos components

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

const initialLoginState = {
    isLoading : true,
    userName: null,
    userToken: null,
  };

  loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return{
          ... prevState,
          userToke: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return{
          ... prevState,
          userName: action.id,
          userToke: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return{
          ... prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return{
          ... prevState,
          userName: action.id,
          userToke: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (

    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { loginState.userToken != null ? (
    <Stack.Navigator screenOptions={{headerShown:false }}>
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Parametre" component={SettingScreen} />
      <Stack.Screen name="Profil" component={AvatarScreen} />
    </Stack.Navigator>
      )
      :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
