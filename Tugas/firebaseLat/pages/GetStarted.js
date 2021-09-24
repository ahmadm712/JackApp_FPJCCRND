import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function GetStarted({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Get Started</Text>
            <View style={{marginVertical: 70}}/>
            <Button onPress={()=>navigation.navigate("Login")}title="SignIn"/>
            <View style={{marginVertical: 30}}/>
            <Button onPress={()=>navigation.navigate("Register")}title="SignUp"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
