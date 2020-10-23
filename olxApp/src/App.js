import React from 'react';
import AuthRoutes from './routes/authRoutes';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <AuthRoutes/>
    </NavigationContainer>
  );
};


export default App;
