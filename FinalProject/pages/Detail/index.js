import React from 'react'
import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window');
export default function Detail({ route, navigation }) {
    
    return (
        <>
        {console.log(route.params.data)}
        <View>
            <Image source={{uri: route.params.data.urlToImage}} style={styles.image}/>
            <Text style={styles.detailAT}>{route.params.data.title}</Text>
            <Text style={styles.detailAA}>{route.params.data.author}</Text>
            <Text style={styles.detailAC}>{route.params.data.content}</Text>
            <Text style={styles.detailAA}>Source : {route.params.data.source.name}</Text>
            
        </View>
        </>
        
    )

    
}

const styles = StyleSheet.create({
    
    image:{
        width:width,
        height:width
    },
    detailAT:{
        fontSize:20,
        fontWeight:'bold',
        margin:5
    },
    detailAA:{
        fontSize:14,
        
        margin:5
    },
    detailAC:{
        fontSize:16,
        marginHorizontal:5,
        marginVertical:15,
        margin:5
    },
    
    

})
