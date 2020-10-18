import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import Routes from './src/routes/index'
import AppProvider from './src/hooks/Auth';

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#ff9000" translucent />
    <AppProvider>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
  );
}