import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, FlatList, TouchableOpacity , ImageBackground } from 'react-native';
import {Ionicons , MaterialIcons , Feather, FontAwesome , AntDesign} from "@expo/vector-icons" ;
import img3 from "./Australia.jpg"
export default AustraliaScreen = ({navigation}) => {
    const [getData , setData] = useState() ;
    const  [getLoading , setLoading] = useState(true) ;
  
    const fetchCountries = () => {
  
    fetch("https://covid19-update-api.herokuapp.com/api/v1/world/continent/australia")
        .then((response) => response.json())
        .then((responseJson) => {
          setData(responseJson.countries)
          setLoading(false) ;
  
          
        })
        
      }
  if(getLoading){
    fetchCountries() ;
  }
  
  return (
    <ImageBackground source={img3} style = {{ height: 900  , alignItems: "center" , paddingBottom: 78}}>
      <View style = {styles.title}> 
        <Ionicons name = "md-menu" size = {40} onPress = {() => navigation.openDrawer()} color = "lightgray" 
        style = {{paddingBottom: 12 , paddingEnd: 20}} />
        <Text style= {{fontSize: 45 , color: "khaki" , paddingBottom: 10 ,paddingEnd: 60 ,
              fontWeight: "bold"    }}> Australia Stats</Text>
        </View>
  
        <FlatList
       
        data = {getData}
        renderItem = {({item , index }) => (
          <View style = {styles.area} >
            <View style={{ padding: 15, backgroundColor: "goldenrod" , opacity: 0.7  , marginBottom: 5
          ,width: 370, borderRadius: 10}}>
                   <Text style = {{fontSize: 20 , color : "white" , fontWeight: "bold"}}>Country : {item.name}</Text>
                   <Text style = {{fontSize: 20 , color : "white" , fontWeight: "bold"}}>Cases:       {item.cases}</Text>
                   <Text style = {{fontSize: 20 , color : "white" , fontWeight: "bold"}}>Deaths:     {item.deaths}</Text>
            </View>
          </View>
        )}
        />
  
  </ImageBackground>
    )
  }

const styles = StyleSheet.create({
  
  

    container: {  alignItems: 'center', justifyContent: 'center' , paddingBottom: 68 } ,
    title : {
      flexDirection: "row" ,
      justifyContent: "center",
      alignItems: "center" ,
      paddingTop: 80 ,
      
    } ,
  area : {
    alignItems: 'center', justifyContent: 'center' , 
    
    
    
  }
  
  });