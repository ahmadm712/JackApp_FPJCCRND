import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import {  } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "id",

          apiKey: "4450ea7fac134dddae40bb3c64d62e14",
        },
      });

      setData(res.data.articles);

      //console.log(res);
    } catch (error) {
      alert(error.messege);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* {console.log(data)} */}
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.heading1}>Trending News</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data &&
              data.slice(10, 14).map((item, i) => {
                return (
                  <>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Detail", { data: item })
                      }
                    >
                      <View style={styles.articleListH}>
                        <Image
                          source={{ uri: item.urlToImage }}
                          style={styles.imageH}
                        />

                        <View style={styles.articleTA}>
                          <Text style={styles.articleT}>{item.title}</Text>
                          <Text>{item.author}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                );
              })}
          </ScrollView>
          <Text style={styles.heading}>Berita Pilihan</Text>
          {data &&
            data.slice(0, 5).map((item, i) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Detail", { data: item })
                    }
                  >
                    <View style={styles.articleList}>
                      <Image
                        source={{ uri: item.urlToImage }}
                        style={styles.image}
                      />

                      <View style={styles.articleTA}>
                        <Text style={styles.articleT}>{item.title}</Text>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={styles.detailAA}>
                            {item.publishedAt.slice(0, 10)}
                          </Text>
                          <Text style={styles.detailAA}>{item.author}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}

          <Text style={styles.heading}>Berita Terkini</Text>
          {data &&
            data.slice(6, 10).map((item, i) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Detail", { data: item })
                    }
                  >
                    <View style={styles.articleList}>
                      <Image
                        source={{ uri: item.urlToImage }}
                        style={styles.image}
                      />

                      <View style={styles.articleTA}>
                        <Text style={styles.articleT}>{item.title}</Text>
                        <Text>{item.author}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  heading1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  detailAA: {
    fontSize: 14,

    margin: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 8,
    borderRadius: 10,
  },
  imageH: {
    width: width * 0.7,
    height: 100,

    borderRadius: 10,
  },
  articleList: {
    width: width,
    backgroundColor: "white",
    margin: width * 0.025,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection: "row",
  },
  articleListH: {
    // width: width,
    backgroundColor: "white",
    margin: width * 0.025,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    flexDirection: "column",
  },
  articleTA: {
    justifyContent: "space-between",
    color: "#39559f",
  },
  articleT: {
    fontWeight: "bold",
    fontSize: 14,
    width: width * 0.7,
    // marginLeft
    // marginHorizontal: width * 0.05,
    // marginVertical: width * 0.03,
  },
});
