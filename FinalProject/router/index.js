import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { Home, Login, Register, SplashScreen, About, Detail } from "../pages";
import { News, Me } from "../assets";

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen component={SplashScreen} name="SplashScreen" />
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen component={Register} name="Register" />
        <Stack.Screen component={BottomTab} name="Home" />
        <Stack.Screen component={About} name="About" />
        <Stack.Screen component={Detail} name="Detail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomTab = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        position: "absolute",
        bottom: 15,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        height: 70,
        ...styles.shadow,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Image
              source={News}
              resizeMode="center"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#8759F2" : "#cccc",
              }}
            />
            <Image />
            <Text
              style={{ tintColor: focused ? "#8759F2" : "#cccc", fontSize: 12 }}
            >
              HOME
            </Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Image
              source={Me}
              resizeMode="center"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#8759F2" : "#cccc",
              }}
            />
            <Image />
            <Text
              style={{ tintColor: focused ? "#8759F2" : "#cccc", fontSize: 12 }}
            >
              ABOUT
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#8759F2",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
