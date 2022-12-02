import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from "../screens/Home";
import Login from '../screens/Login'
import CustomDrawer from '../components/CustomDrawer'
import { color } from "react-native-reanimated";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{headerShown: false,
            drawerActiveBackgroundColor:'#aa18ea',
            drawerActiveTintColor:'#FFF',
            //drawerInactiveBackgroundColor:'#333', 
        drawerLabelStyle: {marginLeft:-25,fontSize:15}}}>
            <Drawer.Screen name="Home" component={TabNavigator} options={{drawerIcon: ({color}) => (
                <Ionicons name='home-outline' size={22} color={color} />
            )}}/>
            <Drawer.Screen name="Login" component={Login}/>
        </Drawer.Navigator>
    )
}

export default AppStack