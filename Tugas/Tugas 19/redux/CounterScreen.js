//file: Tugas19/screens/CounterScreen.js
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";

export default function CounterScreen() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <View>
            <View>
                <Button title="Increment" onPress={() => dispatch(increment())} />
                <Text>{count}</Text>
                <Button title="Decrement" onPress={() => dispatch(decrement())} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});