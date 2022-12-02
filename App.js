import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import Home from './src/screens/Home';

const App = () => {
  return (
 <NavigationContainer>
  <AppStack/>
</NavigationContainer>   

  )
}

export default App
