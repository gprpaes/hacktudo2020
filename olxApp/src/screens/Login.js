import React from 'react';
import Divider from 'rn-dividers';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Button } from 'react-native';

export default function Login({ navigation }) {
    return(
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerImage}>
        <Image resizeMode="center" style={styles.image}
        source={require('../assets/olx.png')}
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.text}>Login</Text>
        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={() => {}}
        />
        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Faça login com a OLX</Text>
        </TouchableOpacity>
        <Divider borderColor="#fff" color="#fff" orientation="center">
            ou
        </Divider>
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Home')}>
          <Text>Cadastre-se</Text>
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

  containerForm: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    width: '90%', 
    marginTop: -200
  },

  containerImage: { 
    // backgroundColor: '#555'
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 10,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 12
  },
  image:{
    width: 300,
    height: 300,
    // backgroundColor: '#FFF',
    marginTop: 20
  },
  text: {
    fontSize: 36,
    marginBottom: 10,
    marginTop: 80
  },
  submitButton: {
    backgroundColor: '#8CE563',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 8
  },
  createButton: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10
  }
})