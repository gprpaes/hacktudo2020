import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login'
import Home from './src/screens/Home'
import CreateInit from './src/screens/create/CreateInit'
import Vehicle from './src/screens/create/Vehicle'
import CreateForm from './src/screens/create/CreateForm';
import CreateRG from './src/screens/create/CreateRG';
import Validation from './src/screens/create/Validation';
import Final from './src/screens/create/Final';

const Stack = createStackNavigator();
const semHeader = () => ({
  headerShown:false
})

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} options={semHeader}/>
        <Stack.Screen name="Login" component={Login} options={semHeader} />
        <Stack.Screen name="Cadastro" component={CreateInit} options={semHeader} />
        <Stack.Screen name="CreateForm" component={CreateForm} options={semHeader}/>
        <Stack.Screen name="Vehicle" component={Vehicle} options={semHeader}/>
        <Stack.Screen name="CreateRG" component={CreateRG} options={semHeader}/>
        <Stack.Screen name="Validation" component={Validation} options={semHeader}/>
        <Stack.Screen name="Final" component={Final} options={semHeader}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
