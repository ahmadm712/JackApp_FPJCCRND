import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import {Home,Login,Register,SplashScreen } from '../pages'



export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" headerMode='none'>
            <Stack.Screen component={SplashScreen} name="SplashScreen" />
            <Stack.Screen component={Login} name="Login"/>
            <Stack.Screen component={Register} name="Register"/>
            <Stack.Screen component={Home} name="Home"/>
        </Stack.Navigator>
        </NavigationContainer>
        
    )
}
