import * as React from 'react';
import {  ListItem, Button } from 'react-native-elements';
import { Image, View, TouchableOpacity, StyleSheet, Text, TouchableHighlight, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons'

import { AuthContext } from './context';

function SettingScreen({ navigation }) {

    const { signOut } = React.useContext(AuthContext);

    return (
    <View style={styles.masterView}>
        <Button
        title={<Text style={{color : "#84F8CD", marginRight: "60%", fontSize : 20}}>Paramètres</Text>}
        type="clear"
        icon={
            <FontAwesome5 name={'angle-left'} size={100} color="#84F8CD" />
        }
        onPress={() => navigation.goBack()}
        />

        <View style={styles.settingView}>

        <TouchableOpacity>
            <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Notification</ListItem.Title>
            </ListItem.Content>
        <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>


        <TouchableOpacity>
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Confidentialité</ListItem.Title>
            </ListItem.Content>
        <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
    

        <TouchableOpacity>
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Affichage</ListItem.Title>
            </ListItem.Content>
        <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>


        <TouchableOpacity>
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Langues</ListItem.Title>
            </ListItem.Content>
        <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>


        <TouchableOpacity>
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Abonnement/Livraison</ListItem.Title>
            </ListItem.Content>
        <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>


        <TouchableOpacity>
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>FAQ / Nous contacter ?</ListItem.Title>
            </ListItem.Content>
        <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>


        <TouchableOpacity>
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>À propos</ListItem.Title>
            </ListItem.Content>
        <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => {signOut()}}>
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>Déconnexion</ListItem.Title>
            </ListItem.Content>
        <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
        </View>

        </View>
    )
}

const styles = StyleSheet.create ({
    masterView : {
        flex: 1,
        backgroundColor : '#FFF',
    },
    parametreText : {
        fontSize : 30,
        color : "#84F8CD",
        marginTop : '10%'
    },
    settingView : {
        flex : 18,
        justifyContent : 'center',
    },

    goBackArrow : {
        flex : 3,
        width : 70,
      },
    goBackButton : {
        marginTop : '10%',
      },
})

export default SettingScreen;