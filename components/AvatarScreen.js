import * as React from 'react';
import { Avatar, Divider } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

function AvatarScreen({ navigation }) {
    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
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
            {image && <Avatar.Image source={{ uri: image }} size={250} style={{backgroundColor : '#000'}}/>}
            </View>

        </View>

          <Divider style={{height : 2, backgroundColor : '#BBB', marginLeft : 40, marginRight : 40 }}/>
        <View style={styles.descriptionView}>
            <Button title="Modifier la photo" onPress={pickImage} />
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

    }
})
export default AvatarScreen;