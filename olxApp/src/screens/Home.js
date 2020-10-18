import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Button } from 'react-native';

export default function Home({ navigation }) {
    return(
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerForm}>
                <View style={styles.topBar}>
                    <Text style={styles.BarText}>Guilherme Paes</Text>
                    <Text>Entregador</Text>
                </View>
                <Text style={styles.text}>Visualize a próxima entrega</Text>
                <TouchableOpacity style={styles.initButton} onPress={() => navigation.navigate('Validation')}>
                    <Text style={styles.initText}>Dar Inicio a entrega</Text>
                </TouchableOpacity>
                {/* <Image resizeMode="center" style={styles.image}
                source={require('../assets/5.png')}
                />   */}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    BarText: {
        color: '#FFF',
        fontSize: 18,
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
      topBar: {
        alignItems: 'center',
        justifyContent: "center",
        width: '90%',
        height: 60,
        marginTop: -350
      },
    continueText: {
        color: '#FFF',
        fontSize: 27
      },
    text: {
      fontSize: 26,
      color: '#FFF',
      alignItems: 'center',
    },
    initButton: {
      backgroundColor: '#FFF',
      width: '80%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
      marginTop: 20
    },
    initText: {
        color: '#F28000',
        fontSize: 20
    },
    containerForm: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        marginBottom: 200,
        borderBottomEndRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: '#6D0AD7'
      },
  })