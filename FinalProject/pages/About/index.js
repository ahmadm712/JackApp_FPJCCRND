import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image ,TouchableOpacity} from "react-native";
import * as firebase from "firebase";
import { basic, form, colors } from "../../styles/index";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { News, Me } from "../../assets/image/index";

export default function About({ navigation }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userInfo = firebase.auth().currentUser;
    setUser(userInfo);
  }, []);
  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("user Sign out");
        navigation.navigate("Login");
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
      
        <Text style={styles.heading}>General Infomation</Text>
        <Image
        source={Me}
        style={styles.image}
        />
      </View>
      
      <View style={{margin:16}}>
      <Text style={styles.fname}>Full Name</Text>
      <Text style={{fontSize:16}}>Hello, {user.email}</Text>
      <Text style={styles.email}>Email</Text>
      <Text>Hello, {user.email}</Text>
      </View>
      <View style={form.field}>
          <TouchableOpacity onPress={onLogout} style={form.button10}>
            <Text style={form.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    alignItems: "center",
  },
  fname:{
      fontSize:18
  },
  email:{
    fontSize:18,
    marginTop:8
},
  btnL:{
      backgroundColor:"#B7222B"
  },
  image:{
      height:120,
      width:120,
      marginTop:16
  }
});
