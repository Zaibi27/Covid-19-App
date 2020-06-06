import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, FlatList, TouchableOpacity , ImageBackground } from 'react-native';
import {Ionicons , MaterialIcons , MaterialCommunityIcons , SimpleLineIcons , AntDesign} from "@expo/vector-icons"  ;
import img from "./img.jpg" ;


export default Screen3 = ({navigation}) => {

    const [getNewConfirmed , setNewConfirmed] = useState() ;
    const [getTotalConfirmed , setTotalConfirmed] = useState() ;
    const [getNewDeaths , setNewDeaths] = useState() ;
    const [getTotalDeaths , setTotalDeaths] = useState() ;
    const [getNewRecovered , setNewRecovered] = useState() ;
    const [getTotalRecovered , setTotalReccovered] = useState() ;
    

    var day1URL = "https://api.covid19api.com/summary"
    fetch(day1URL)
    .then((response) => response.json())
    .then((responseJson) => {
    setNewConfirmed(responseJson.Global.NewConfirmed)
    setTotalConfirmed(responseJson.Global.TotalConfirmed)
    setNewDeaths(responseJson.Global.NewDeaths)
    setTotalDeaths(responseJson.Global.TotalDeaths)
    setNewRecovered(responseJson.Global.NewRecovered)
    setTotalReccovered(responseJson.Global.TotalRecovered)
    })

    return (
    
        <ImageBackground source={img} style = {{ height: 1000  , alignItems: "center"}}>
        <View style= {{flexDirection: "row" , width: 365 , paddingTop: 80 }}>
        <Ionicons name = "md-menu"
        
         size = {38} onPress = {() => navigation.openDrawer()} color = "silver" />

        <Text style = {{fontSize : 38  , paddingBottom: 60  , paddingLeft: 32 ,
        fontWeight: "bold" , color: "khaki"
        }}>Global Summary</Text>
        </View>

        <View style = {styles.display3Area}>

         <View style = {styles.display3Content}>
          <View style = {{flexDirection: "row"}}>
          <Text style = {{fontSize: 16 , color : "white"}}>
            New Confirmed :
         </Text>
         <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>   {getNewConfirmed}</Text>
         </View>
         </View>

         <View style = {styles.display3Content}>
          <View style = {{flexDirection: "row"}}>
          <Text style = {{fontSize: 16 , color : "white"}}>
            Total Confirmed :
         </Text>
         <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>   {getTotalConfirmed}</Text>
         </View>
         </View>

         <View style = {styles.display3Content}>
          <View style = {{flexDirection: "row"}}>
          <Text style = {{fontSize: 16 , color : "white"}}>
            New Deaths :
         </Text>
         <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>           {getNewDeaths}</Text>
         </View>
         </View>

         <View style = {styles.display3Content}>
          <View style = {{flexDirection: "row"}}>
          <Text style = {{fontSize: 16 , color : "white"}}>
            Total Deaths :
         </Text>
         <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>           {getTotalDeaths}</Text>
         </View>
         </View>

         <View style = {styles.display3Content}>
          <View style = {{flexDirection: "row"}}>
          <Text style = {{fontSize: 16 , color : "white"}}>
            New Recovered :
         </Text>
         <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>      {getNewRecovered}</Text>
         </View>
         </View>

         <View style = {styles.display3Content}>
          <View style = {{flexDirection: "row"}}>
          <Text style = {{fontSize: 16 , color : "white"}}>
            Total Recovered :
         </Text>
         <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>   {getTotalRecovered}</Text>
         </View>
         </View>
       
         </View>
         </ImageBackground>
      

    )
  }
  const styles = StyleSheet.create({
  
  
    screen : {
  alignItems: "center" ,
  justifyContent: "center" ,
  
  
    } ,
    container: {  alignItems: 'center', justifyContent: 'center'  } ,
  
  title : {
    flexDirection: "row" ,
    justifyContent: "center",
    alignItems: "center" ,
    paddingTop: 80 ,
    
  }  ,
  screen3: {
   
   backgroundColor : "white" ,
    paddingBottom : 150 ,
    justifyContent: "center" ,
    alignItems: "center"
  },
    inputContainer : {
      padding: 30 ,
     flexDirection: "row" ,
      justifyContent: "center",
      width: '75%' ,
      alignItems: "center" ,
      paddingBottom: 30 ,
      
    } ,
    screen2 : {
      justifyContent : "center" ,
      alignItems: "center" ,
      paddingTop: 30 ,
      
  
    },
    display2Area: {
          
      padding: 30 ,
      width : 350 ,
      
      backgroundColor: "black" ,
      opacity: 0.7 ,
      
    },
    display3Area: {
    
      padding: 10 ,
     
    }
    ,
    display3Content : {
      backgroundColor: "gray" ,
      opacity : 0.7 ,
      
      padding: 30 ,
      width : 350 ,
      ///borderRadius: 5
    } ,
    
    
    inputText : {
      borderColor: "burlywood",
       borderWidth: 2 ,
      borderBottomWidth : 2 ,
      width: '140%' , 
      borderRadius : 50 ,
      fontSize : 20 ,
      padding : 10 ,
      color: "white"
    }
  });