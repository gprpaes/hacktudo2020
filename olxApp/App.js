import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login'
import Home from './src/screens/Home'
import CreateInit from './src/screens/create/CreateInit'
import Vehicle from './src/screens/create/Vehicle'
import CreateForm from './src/screens/create/CreateForm';

const Stack = createStackNavigator();
const semHeader = () => ({
  headerShown:false
})

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} options={semHeader} />
        <Stack.Screen name="Cadastro" component={CreateInit} options={semHeader} />
        <Stack.Screen name="CreateForm" component={CreateForm} options={semHeader}/>
        <Stack.Screen name="Vehicle" component={Vehicle} options={semHeader}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
