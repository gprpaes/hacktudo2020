import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Button } from 'react-native';

export default function CreateForm({ navigation }) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text  style={styles.text}>Cadastro</Text>
            <View style={styles.containerForm}>
            <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            onChangeText={() => {}}
            />
            <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => {}}
            />
            <TextInput
            style={styles.input}
            placeholder="Cidade de atuação"
            autoCorrect={false}
            onChangeText={() => {}}
            />
            <TextInput
            style={styles.input}
            placeholder="Telefone"
            autoCorrect={false}
            onChangeText={() => {}}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => {}}
            />
                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Vehicle')}>
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
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 12,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 4,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,
        elevation: 10,
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