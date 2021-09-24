import React, {useState, useEffect} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase from 'firebase';



export default function Register({navigation}) {
    const firebaseConfig={
        apiKey: "AIzaSyD0DyZ862guUgRt9Wsj3UkvATVi9UCnVgc",

  authDomain: "jackapp-6f35b.firebaseapp.com",

  databaseURL: "https://jackapp-6f35b-default-rtdb.firebaseio.com",

  projectId: "jackapp-6f35b",

  storageBucket: "jackapp-6f35b.appspot.com",

  messagingSenderId: "555529942438",

  appId: "1:555529942438:web:d7f09d2a6bd8ae54be4b67"

     };
     if(!firebase.apps.length){
         firebase.initializeApp(firebaseConfig)
     }
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const submit=()=>{
          const data = {
              email,
              password
          }
          console.log(data)
          firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            //console.log('Register Berhasil');
              navigation.navigate("Home");
          }).catch(()=>{
            console.log("register gagal")
          })
      }
    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <TextInput 
                style={styles.input}
                placeholder="Masukin Email"
                value={email}
                onChangeText={(value)=>setEmail(value)}

            />
             <TextInput 
                style={styles.input}
                placeholder="Masukin Password"
                value={password}
                onChangeText={(value)=>setPassword(value)}
            />
            <Button onPress={submit} title="REGISTER"/>
            <TouchableOpacity style={{marginTop: 30}}
            // onPress={()=>navigation.navigate("Register")}
            onPress={()=>alert("hello world")}
            >
                <Text>Buat Akun</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderWidth:1,
        borderColor:'grey',
        paddingHorizontal:10,
        paddingVertical: 10,
        width: 300,
        marginBottom: 10,
        borderRadius: 6,
        marginTop: 10
    }
})
