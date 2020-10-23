import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login'
import Home from '../screens/deliveryman/Home'
import CreateInit from '../screens/create/CreateInit'
import Vehicle from '../screens/create/Vehicle'
import CreateForm from '../screens/create/CreateForm';
import CreateRG from '../screens/create/CreateRG';
import Validation from '../screens/create/Validation';
import Final from '../screens/create/Final';

const Stack = createStackNavigator();

function AuthRoutes() {
  return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={CreateInit} />
        <Stack.Screen name="CreateForm" component={CreateForm}/>
        <Stack.Screen name="Vehicle" component={Vehicle}/>
        <Stack.Screen name="CreateRG" component={CreateRG}/>
        <Stack.Screen name="Validation" component={Validation}/>
        <Stack.Screen name="Final" component={Final}/>
      </Stack.Navigator>
  );
};


export default AuthRoutes;
