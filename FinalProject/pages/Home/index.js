import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView ,ScrollView,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import {  } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const  [data,setData]=useState()  
  const getData = async () => {
    try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "id",
          category: "business",
          apiKey: "4450ea7fac134dddae40bb3c64d62e14",
        },
      });
      setData(res.data.articles)

      //console.log(res);
    } catch (error) {
      alert(error.messege);
    }
  };
  useEffect(() => {
      getData()
  }, [])
  return (
      <>
      {/* {console.log(data)} */}
      <SafeAreaView>
      <ScrollView>
          {data && data.map((item,i)=>{
              return <>
              <TouchableOpacity onPress={()=>navigation.navigate('Detail',
              {data:item}
              )}>
              <View style={styles.articleList}>
              <Image source={{uri:item.urlToImage}} style={styles.image}/>
                
                <View style={styles.articleTA}>
                    <Text style={styles.articleT}>{item.title}</Text>
                    <Text>{item.author}</Text>
                    
                </View>
              </View>
              </TouchableOpacity>
              
              

              </>;
          })}
      </ScrollView>
    </SafeAreaView>
      </>
    
  );
}

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100
    },
    articleList:{
        flexDirection:'row',
        marginVertical:10,
        marginHorizontal:5
    },
    articleTA:{
        justifyContent:'space-between'
    },
    articleT:{
        fontWeight:'bold'
    }
});
