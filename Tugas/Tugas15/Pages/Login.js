import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'
import App from '../../../App'

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                onPress={()=>navigation.navigate("MyDrawer",{
                    screen: 'App',params:{
                        screen:'AboutScreen'
                    }
                })}
                title="Menuju Halaman Homescreen" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
