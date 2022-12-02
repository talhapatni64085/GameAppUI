import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Home from '../screens/Home';
import LogIn from '../screens/Login';
import OnboardingScreen from '../screens/OnboardingScreen';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
<Tab.Navigator screenOptions={{
    tabBarShowLabel: false,
    headerShown:false,
    tabBarStyle: {backgroundColor:'#AD40AF'},
    //tabBarInactiveBackgroundColor:'#fff',
    //tabBarActiveBackgroundColor:'yellow'
}}>
    <Tab.Screen name='Home2' component={Home} options={({route}) => ({
        tabBarStyle: {display: getTabBarVisibility(route), backgroundColor:'#AD40AF'},
        tabBarBadge:3,
        tabBarIcon: ({color,size}) => (
            <Ionicons name='home-outline' color={color} size={size}/>
    ),
    })}/>
    <Tab.Screen name='login' component={LogIn}/>
    <Tab.Screen name='OnboardingScreen' component={OnboardingScreen}/>
</Tab.Navigator>
)
}

const getTabBarVisibility = (route) => {
console.log(route);
const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
console.log(routeName);
}


export default TabNavigator