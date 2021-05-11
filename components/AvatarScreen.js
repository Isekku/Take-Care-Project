import * as React from 'react';
import { Avatar, Divider, Button, IconButton, Colors  } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userprofile from "../models/userprofile";

function AvatarScreen({ navigation }) {
    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Désoler, nous devons avoir accès à votre galerie pour pouvoir continuer.');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

    return(
        <View style={styles.masterView}>
        <View style={styles.avatarView}>

            <View style={styles.avatarIcon}>
              <Avatar.Image size={250} style={{position: 'absolute', backgroundColor: "#BCFCE4",}}/>
            {image && <Avatar.Image source={{ uri: image }} size={250} style={{backgroundColor: "#BCFCE4",}}/>}
            </View>

        </View>

          <Divider style={{height : 2, backgroundColor : '#BBB', marginLeft : 40, marginRight : 40 }}/>
        <View style={styles.descriptionView}>


          <View style={styles.formView}>

          <Text style={styles.textForm}>Nom : <Text style={styles.profilStyle}>{userprofile.firstname}</Text></Text>
          <Text style={styles.textForm}>Prénom : <Text style={styles.profilStyle}>{userprofile.name}</Text></Text>
          <Text style={styles.textForm}>Adresse email : <Text style={styles.profilStyle}>{userprofile.email}</Text></Text>
          </View>

            <View style={styles.buttonView}>
              <Button mode='contained' style={styles.imageButton} onPress={pickImage}><Text style={styles.textButton}>Modifier l'image</Text></Button>
              <IconButton
            icon="chevron-left"
            color="#84F8CD"
            size={70}
            style={{position: 'absolute', left: 0}}
            onPress={() => navigation.goBack()}
            />
            </View>
        </View>


        </View>
    )
}

const styles = StyleSheet.create ({
    masterView : {
        flex : 1
    },
    avatarView : {
        flex : 1,
        margin: "10%",
    },
    descriptionView : {
        flex : 1,
    },
    avatarIcon : {
        alignItems : 'center',
        marginTop : 10,
    },
    avatarCircle : {
        alignItems : 'center'

    },
    textForm : {
      fontSize : 20,
      color : "#8B8B8B",
      paddingTop: 30,
    },
    formView : {
      flex: 3,
      paddingLeft : '10%'
    },
    buttonView : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageButton : {
      backgroundColor: '#BCFCE4',
      width: 200,
      borderRadius: 100,
    },
    textButton : {
      color: "#8B8B8B",
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    profilStyle : {
      color : "#5FB696"
    }
})
export default AvatarScreen;