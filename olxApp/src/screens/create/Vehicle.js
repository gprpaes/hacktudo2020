import React from 'react';
import { TouchableHighlight, StyleSheet, KeyboardAvoidingView, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Vehicle({ navigation }) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <Text  style={styles.text}>Escolha o Veículo</Text>
            <View style={styles.containerForm}>
            <TouchableHighlight onPress={() => navigation.navigate('CreateRG')}>
              <View style={styles.button}>
                <Text style={styles.textAuto}>Bicicleta</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('CreateRG')}>
              <View style={styles.button}>
                <Text style={styles.textAuto}>Motocicleta</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('CreateRG')}>
              <View style={styles.button}>
                <Text style={styles.textAuto}>Carro</Text>
              </View>
            </TouchableHighlight>

                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('CreateRG')}>
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
    textAuto: {
      fontSize: 26,
      color: '#FFF',
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
      button: {
        alignItems: "center",
        backgroundColor: "#6D0AD7",
        width: 200,
        height: 60,
        marginBottom: 20,
        padding: 10,
        borderRadius: 7
      },
      containerOption: {
        alignItems: 'center',
        justifyContent:"center",
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#6D0AD7', 
        width: 200,
        height: 70,
      }
  })