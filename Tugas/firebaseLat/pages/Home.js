import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import * as firebase from 'firebase';


export default function Home({navigation}) {
    const [user, setUser] = useState({})

    useEffect(() => {
       const userInfo =firebase.auth().currentUser
       setUser(userInfo)
    }, [])
    const onLogout=()=>{
        firebase.auth()
        .signOut()
            .then(()=>{
                console.log('user Sign out');
                navigation.navigate('GetStarted')
            }
            )
        
    }
    return (
        <View style={styles.container}>
            <Text>Halaman Home</Text>
                <Text>Hello, {user.email}</Text>
            <Button onPress={onLogout} title="Logout"/>
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
