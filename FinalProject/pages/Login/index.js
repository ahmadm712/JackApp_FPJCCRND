import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

// UI elements
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

// Custom styles
import { basic, form, colors } from "../../styles/index";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyD0DyZ862guUgRt9Wsj3UkvATVi9UCnVgc",
    authDomain: "jackapp-6f35b.firebaseapp.com",
    databaseURL: "https://jackapp-6f35b-default-rtdb.firebaseio.com",
    projectId: "jackapp-6f35b",
    storageBucket: "jackapp-6f35b.appspot.com",
    messagingSenderId: "555529942438",
    appId: "1:555529942438:web:d7f09d2a6bd8ae54be4b67",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const submit = () => {
    const data = {
      email,
      password,
    };
    console.log(data);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("berhasil login");
        navigation.navigate("Home");
      })
      .catch(() => {
        console.log("Login gagal");
      });
  };

  // const validateEmail = (email) => {
  //   var re =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // };

  // const validatePassword = (password) => {
  //   let re = /[0-9]+/;
  //   return re.test(password);
  // };



  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[basic.container]}>
        <Text style={[form.heading, form.field]}>Log In</Text>
        <Text style={form.message}>{message}</Text>
        <View style={form.field}>
          <Text style={form.label}>Email</Text>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            name="email"
            style={form.input}
            value={email}
            autoCapitalize="none"
          />
        </View>

        <View style={form.field}>
          <Text style={form.label}>Password</Text>
          <TextInput
            onChangeText={(value) => setPassword(value)}
            name="password"
            style={form.input}
            secureTextEntry={!showPassword}
            value={password}
            autoCapitalize="none"
          />
          <Ionicons
            onPress={() => setShowPassword(!showPassword)}
            style={form.eye}
            name={showPassword ? "md-eye-off" : "md-eye"}
          />
        </View>

        <View style={form.field}>
          <TouchableOpacity onPress={submit} style={form.button}>
            <Text style={form.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={[form.field, form.field1]}>
          <Text style={form.text}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={form.button1}
          >
            <Text style={form.buttonText1}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={form.field}>
          <TouchableOpacity style={[form.button, form.fb]}>
            <FontAwesome
              style={form.icon}
              size={35}
              color={colors.primary}
              name="facebook"
            />
            <Text style={form.buttonText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
