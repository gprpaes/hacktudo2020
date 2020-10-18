import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Final({ navigation }) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View>
                <Image resizeMode="contain" style={styles.image}
                source={require('../../assets/2.png')}
                />  
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.text}>Cadastro Finalizado</Text>
                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.continueText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6D0AD7',
      alignItems: 'center',
      justifyContent: 'center',
    },
    continueText: {
        color: '#FFF',
        fontSize: 27
      },
    image:{
      width: 300,
      height: 300,
      marginTop:100
    },
    text: {
      fontSize: 34,
      marginBottom: 40,
      marginTop: 200,
      color: '#FFF',
      alignItems: 'center',
    },
    continueButton: {
      backgroundColor: '#F28000',
      width: '90%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 8
    },
    containerForm: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        width: '90%', 
        marginTop: -200
      },
  })