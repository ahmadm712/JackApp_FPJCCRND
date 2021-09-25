import React,{useEffect} from 'react'
import { StyleSheet, Text, View ,ImageBackground,Image} from 'react-native'
import {Bg, Logo,LogoRev} from '../../assets'


export default function splashscreen({navigation}) {
    
        setTimeout(()=>{
            navigation.navigate('Login');
        },3000);
    

    return (
        <View style={styles.container}>
            <Image source ={LogoRev}style={styles.logo}/> 

        </View>
        
            
        
    )
}


const styles = StyleSheet.create({
    container:{
         flex:1,
         justifyContent:"center",
         alignItems:'center',
        
    },
    logo:{
        height:130,
        width:130
    },
    
})
