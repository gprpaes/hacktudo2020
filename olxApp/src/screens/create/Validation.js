import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Button } from 'react-native';

export default function Validation({ navigation }) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text  style={styles.text}>Validação</Text>
            <View style={styles.containerForm}>
            <View>
                <Image resizeMode="contain" style={styles.image}
                source={require('../../assets/identificacao.png')}
                />  
            </View>
                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Final')}>
                    <Text style={styles.continueText}>Continuar</Text>
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
    image:{
        width: 400,
        height: 400
      },
      text: {
        fontSize: 36,
        color: '#FFF',
        alignItems: 'center',
        marginTop: 20
      },
    continueText: {
        color: '#FFF',
        fontSize: 27
      },
    continueButton: {
      backgroundColor: '#F28000',
      width: '70%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginBottom: 8,
      marginTop: 20
    },
    containerForm: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        marginTop: 30,
        borderTopEndRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: '#FFF'
      },
  })