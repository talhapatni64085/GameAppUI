import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from "../screens/OnboardingScreen";
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}
export default AuthStack