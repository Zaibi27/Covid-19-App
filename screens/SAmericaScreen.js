
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, FlatList, TouchableOpacity , ImageBackground } from 'react-native';

import {Ionicons , MaterialIcons , Feather, FontAwesome , AntDesign} from "@expo/vector-icons" ;

import img5 from "./SAmerica.jpg"




export default SAmericaScreen = ({navigation}) => {
    const [getData , setData] = useState() ;
    const  [getLoading , setLoading] = useState(true) ;
  
    const fetchCountries = () => {
  
    fetch("https://covid19-update-api.herokuapp.com/api/v1/world/continent/south")
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
    <ImageBackground source={img5} style = {{ height: 900  , alignItems: "center" , paddingBottom: 78}}>
      <View style = {styles.title}> 
        <Ionicons name = "md-menu" size = {40} onPress = {() => navigation.openDrawer()} color = "lightgray" 
        style = {{paddingBottom: 12 , }} />
        <Text style= {{fontSize: 42 , color: "khaki" , paddingBottom: 10   ,
              fontWeight: "bold" , textAlign: "center"    }}> South America Stats</Text>
        </View>
  
        <FlatList
       
        data = {getData}
        renderItem = {({item , index }) => (
          <View style = {styles.area} >
            <View style={{ padding: 15, backgroundColor: 'steelblue' , opacity: 0.8 , marginBottom: 5
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