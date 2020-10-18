import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Vehicle({ navigation }) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text  style={styles.text}>Escolha o Veículo</Text>
            <View style={styles.containerForm}>
                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('CreateForm')}>
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
    continueText: {
        color: '#FFF',
        fontSize: 27
      },
    text: {
      fontSize: 36,
      color: '#FFF',
      alignItems: 'center',
      marginTop: 20
    },
    continueButton: {
      backgroundColor: '#F28000',
      width: '70%',
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
        width: '100%',
        marginTop: 30,
        borderTopEndRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: '#FFF'
      },
  })