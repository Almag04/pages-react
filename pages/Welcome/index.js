import React from 'react';
import {
     View,
     Text,
     StyleSheet,
     Image,
     TouchableOpacity   
     } from 'react-native';

     import * as Animatable from 'react-native-animatable'

     import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
  const navigation = useNavigation();

  return (
    <view style={styles.container}>

        <View style={styles.containerLogo}>
          <Animatable.Image
          animation="flipeInY"
             source={require('../../assets/logo.png')}
             style={{ width: '100%' }}
             resizeMode="contain"
          />
        </View>

        <Animatable.View delay={600} animation="fadeInUp"style={styles.containerForm}>
          <Text style={styles.title}>Leia, organize e confira seus livros preferidos!</Text>
          <Text style={styles.text}>Faça o seu login para começar!</Text>

          <TouchableOpacity
           style={styles.button}
           onPress={ () => navigation.navigate('SignIn')}
           >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>

    </view>
  );
}

const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: '#38a69d'
 },
 containerLogo:{
  flex: 2,
  backgroundColor: '#38a69d',
  justifyContent: 'center',
  alignItems: 'center'
 },
 containerForm: {
  flex: 1,
  backgroundColor: '#FFF',
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
  paddingStart: '5%',
  paddingEnd: '5%'
 },
 title:{
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 28,
  marginBottom: 12,
 },
 text:{
  color: 'a1a1a1', 
 },
 button:{
  position: 'absolute',
  backgroundColor: '#38a69d',
  borderRadius: 50,
  paddingVertical: 8,
  width: '60%',
  alignSelf: 'center',
  bottom: '15%',
  alignItems: 'center',
  justifyContent: 'center',
 },
 buttonText:{
  fontSize: 17,
  color: "#FFF",
  fontWeight: 'bold',

 }
})