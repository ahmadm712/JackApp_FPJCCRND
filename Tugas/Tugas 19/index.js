import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import store from "./redux/store";
import { Provider } from "react-redux";

import CounterScreen from "./redux/CounterScreen";

export default function Tugas19() {
    return (
        <View style={styles.container}>
            <Provider store={store}>
            <CounterScreen />
        </Provider>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})