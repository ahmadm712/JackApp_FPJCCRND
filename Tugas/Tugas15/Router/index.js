import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from '../Pages/Login'
import AboutScreen from '../Pages/AboutScreen'
import AddScreen from '../Pages/AddScreen'
import Home from '../Pages/Home'
import Setting from '../Pages/Setting'
import SkillProject from '../Pages/SkillProject'
import ProjectScreen from '../Pages/ProjectScreen'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();




export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component ={Login}/>
                 <Stack.Screen name="Home" component={Home}/>
                 <Stack.Screen name="MainApp" component={MainApp}/>
                 <Stack.Screen name="MyDrawer" component={MyDrawer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MainApp = ()=>(
    
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="SkillProject" component={SkillProject}/>
        <Tab.Screen name="AddScreen" component={AddScreen}/>
    </Tab.Navigator>
)

const MyDrawer =()=>(
    <Drawer.Navigator>
        <Drawer.Screen name="App" component={MainApp}/>
        <Drawer.Screen name="About" component={AboutScreen}/>
    </Drawer.Navigator>
)