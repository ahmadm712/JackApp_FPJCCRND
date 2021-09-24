import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../pages/GetStarted';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={GetStarted} name="GetStarted"/>
            <Stack.Screen component={Login} name="Login"/>
            <Stack.Screen component={Register} name="Register"/>
            <Stack.Screen component={Home} name="Home"/>
        </Stack.Navigator>
    )
}
