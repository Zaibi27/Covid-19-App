import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, FlatList, TouchableOpacity , ImageBackground } from 'react-native';

import img3 from "./img3.jpg"

export default Screen2 = ({navigation , route}) =>{
    const country = route.params.country 
    const slug = route.params.slug
    const [getDay1 , setDay1] = useState() ;
    const [getDay1Cases , setDay1Cases] = useState() ;
    const [getTotalConfirmed , setTotalConfirmed] = useState() ;
    const [getDeaths , setDeaths] = useState() ;
    const[getRecovered , setRecovered] = useState() ;
    const[getActive , setActive] = useState() ;
   
      var day1URL = "https://api.covid19api.com/dayone/country/"+slug
      fetch(day1URL)
      .then((response) => response.json())
      .then((responseJson) => {
        setDay1(responseJson[0].Date.substring(0,10))
        setDay1Cases(responseJson[0].Confirmed)
        setTotalConfirmed(responseJson[responseJson.length -1 ].Confirmed)
        setDeaths(responseJson[responseJson.length-1].Deaths)
        setRecovered(responseJson[responseJson.length-1].Recovered)
        setActive(responseJson[responseJson.length-1].Active)
      })
    
  return(
    <ImageBackground source={img3} style = {{ height: 1000  , alignItems: "center"}}>
  
  
        <View style = {{justifyContent: "center" , alignItems: "center" , padding: 40 , flexDirection: "row"}}>
          
        <Text style = {{  fontSize: 50 ,color: "khaki" , fontWeight: "bold" , textAlign: "center" }}>
     {country}
     </Text>  
    
   </View>
    
    
    <Text style = {{fontSize: 25 , color: "indianred" , fontWeight: "bold" , paddingBottom: 10}}> FIRST DAY</Text>
        
        <View style = {styles.display2Area}>
            <View style = {{flexDirection: "row"}}>
            <Text style = {{fontSize: 16 , color: "white"}}>
              First case reported on :
           </Text>
           <Text style = {{fontSize: 17 , color : "white" , fontWeight: "bold"}}>   {getDay1}</Text>
           </View>
           </View>
  
           <View style = {styles.display2Area}>
            <View style = {{flexDirection: "row"}}>
            <Text style = {{fontSize: 16 , color : "white"}}>
              Number of Confirmed Cases :
           </Text>
           <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>   {getDay1Cases}</Text>
           </View>
           </View>
        
           <Text style = {{fontSize: 25 , color: "indianred" , paddingTop: 20 , fontWeight: "bold" ,
           paddingBottom: 10}}> TODAY </Text>
  
           <View style = {styles.display2Area}>
            <View style = {{flexDirection: "row"}}>
            <Text style = {{fontSize: 16 , color : "white" ,  }}>
              Total Confirmed :
           </Text>
           <Text style = {{fontSize: 18 , color : "white" , fontWeight:"bold"}}>   {getTotalConfirmed}</Text>
           </View>
           </View>
  
           <View style = {styles.display2Area}>
            <View style = {{flexDirection: "row"}}>
            <Text style = {{fontSize: 16 , color : "white"}}>
              Total Deaths :
           </Text>
           <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>   {getDeaths}</Text>
           </View>
           </View>
  
           <View style = {styles.display2Area}>
            <View style = {{flexDirection: "row"}}>
            <Text style = {{fontSize: 16 , color : "white"}}>
              Recovered :
           </Text>
           <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold"}}>   {getRecovered}</Text>
           </View>
           </View>
  
           <View style = {styles.display2Area}>
            <View style = {{flexDirection: "row"}}>
            <Text style = {{fontSize: 16 , color : "white" , }}>
              Active Cases :
           </Text>
           <Text style = {{fontSize: 18 , color : "white" , fontWeight: "bold" }}>   {getActive}</Text>
           </View>
  
          
           </View>
           <TouchableOpacity style = {{paddingTop: 18}} onPress= {() => navigation.goBack()}>
             <View style = {{justifyContent: "center" , alignItems: "center" , padding: 10 ,
            backgroundColor: "gray" , borderRadius: 33}}>
               <Text style = {{color: "white" , fontSize: 20 }}>    Back    </Text>
  
             </View>
           </TouchableOpacity>
      </ImageBackground>
    )}

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
          
          backgroundColor: "gray" ,
          opacity: 0.7 ,
          
        },
        display3Area: {
        
          padding: 10 ,
         
        }
        ,
        display3Content : {
          backgroundColor: "black" ,
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