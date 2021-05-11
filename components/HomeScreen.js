import * as React from 'react';
import {  Header } from 'react-native-elements';
import { Text, View, TouchableOpacity, StyleSheet, Image, } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {

    return (
        <View style={{flex: 1}}>
            <Header
            backgroundColor = "rgba(255, 255, 255, 0.0)"
            leftComponent={ 
            <TouchableOpacity onPress={() => navigation.navigate("Parametre")}>
            <FontAwesome5 name={"cog"} color='#00FC9F' size={60}/>
            </TouchableOpacity> }


            centerComponent={ 
            <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
            <FontAwesome5 name={"user-circle"} color='#00FC9F' size={60} />
            </TouchableOpacity>
        }


            rightComponent={ 
            
            <TouchableOpacity>
            <Icon name="stats-chart-outline" size={60} color='#00fc9f'/>
            </TouchableOpacity>
            }/>

            <View style={styles.principalStyle}>
                
                <View style={styles.imageStyle}>
            <Image
                style={styles.jennyStyle}
                source={require("../assets/jenny.png")}
            />
            </View>

            <View style={styles.bottomStyle}>

            </View>

            </View>

            

        </View>
    )}

    const styles = StyleSheet.create ({
        principalStyle : {
            flex : 1,
        },
        imageStyle : {
            flex : 4,
        },
        bottomStyle : {
            flex : 1,
            backgroundColor: '#84F8CD'
        },
        jennyStyle : {
            height: 600,
            width : 400
        },
    })

  export default HomeScreen;