import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
export default function Home({ navigation }) {
    return(
        <View style={styles.container}>
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
            <View style={styles.containerActions}>
                  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Validation')}><Avatar
                  rounded
                  size={85}
                  source={require('../../assets/3.png')}
                /><Text style={styles.cardText}>Cadastrar próximo itinerário</Text></TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Validation')}><Avatar
                  rounded
                  size={85}
                  source={require('../../assets/3.png')}
                />
                <Text style={styles.cardText}>Lista de entregas do dia</Text></TouchableOpacity>
            </View>
        </View>
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
        flex:5,
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        borderBottomEndRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: '#6D0AD7'
      },
    containerActions: {
      flex:2,
      alignItems: 'center',
      justifyContent:'center',
      flexDirection: 'row',
      alignItems:'center',
    },
    card: { 
      width: '40%',
      marginLeft: 10,
      alignItems: "center",
      borderRadius: 10,
      justifyContent: "center",
      borderWidth: 1,
      padding: 10
    },
    cardText: { 
      textAlign: 'center'
    }
  })