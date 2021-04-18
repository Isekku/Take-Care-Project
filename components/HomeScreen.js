import * as React from 'react';
import {  Button , ButtonGroup } from 'react-native-elements';
import { Text, View, TouchableOpacity, StyleSheet, Image, } from 'react-native';

const buttons = ['Hello', 'World', 'Buttons']

function HomeScreen({ navigation }) {
    return (
      <View style={styles.headview}>
          <ButtonGroup
          style={styles.test}
          buttons={buttons}
          />

          <TouchableOpacity style={styles.parametreButton}>
              <View style={styles.teste}>
              <Image
              style={styles.parametreImage}
              source={require('../assets/icone_parametre.png')}
              />
              </View>
          </TouchableOpacity>


          <TouchableOpacity style={styles.profilButton}>
          <Image
              style={styles.profilImage}
              source={require('../assets/icone_profil.png')}
              />
          </TouchableOpacity>


          <TouchableOpacity style={styles.statisticButton}>
          <Image
              style={styles.statisticImage}
              source={require('../assets/icone_parametre.png')}
              />
          </TouchableOpacity>

          <Image/>

          <View style={styles.bottomHeader}>
              <TouchableOpacity style={styles.womenButton}>
              <Image
              style={styles.womenImage}
              source={require('../assets/icone_jenny.png')}
              />
              </TouchableOpacity>


              <TouchableOpacity style={styles.boxButton}>
              <Image
              style={styles.boxImage}
              source={require('../assets/icone_box.png')}
              />
              </TouchableOpacity>

              <TouchableOpacity style={styles.tchatButton}>
              <Image
              style={styles.tchatImage}
              source={require('../assets/icone_chat.png')}
              />
              </TouchableOpacity>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create ({
    parametreImage : {
        marginTop : "10%",
        height : 100,
        width : 100,
    },

    profilImage : {
        height : 100,
        width : 100,
    },

    statisticImage : {
        height : 100,
        width : 100,
    },


    headview : {
        marginTop : '20%'
        }


  })

  export default HomeScreen;