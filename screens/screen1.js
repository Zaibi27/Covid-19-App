import React, { useState} from 'react';
import { View, TextInput, Text, Button, StyleSheet, FlatList, TouchableOpacity , ImageBackground } from 'react-native';

import {Ionicons } from "@expo/vector-icons" ;
import img4 from "./img4.jpg"

export default Screen1 = ({navigation}) => {

    const [getData , setData] = useState() ;
    const [getList , setList] = useState() ;
    const [getText , setText] = useState() ;
    const [getLoad , setLoad] = useState(true) ;
   
    const getCountries = () => {
    return fetch('https://api.covid19api.com/countries')
    .then((response) =>  response.json())
    .then((responseJson) => {
      setLoad(false)
      setData(responseJson) ;
      setList(responseJson) ;
      
      })
    }  
  if(getLoad) {
  getCountries() ;
  }
  const SearchFilter = (text) => {
    
    const newData = getData.filter(function (item) {
      var itemData;
     
      itemData = item.Country ? item.Country.substring(0 , text.length).toUpperCase() :  "".toUpperCase() ;
      
      const textData = text.toUpperCase() ;
      return itemData.indexOf(textData) > -1 ;
      
    }) ;
    setText(text) ;
    setList(newData) ;
    setLoad(false) ;
    
    
  }
  
  return(
  <ImageBackground source={img4} style = {{ height: 1000  , alignItems: "center" , paddingBottom: 125}}>
  
      <View style = {styles.title}> 
      <Ionicons name = "md-menu" size = {40} onPress = {() => navigation.openDrawer()} color = "lightgray" 
      style = {{paddingBottom: 12}} />
      <Text style= {{fontSize: 45 , color: "khaki" , paddingBottom: 10 , paddingLeft : 30 ,
           paddingRight: 42, fontWeight: "bold"    }}> Select country</Text>
      </View>
  
  <View style = {styles.inputContainer} >
        
      <TextInput style = {styles.inputText} placeholder = "Search country" 
  
       onChangeText = {(text) => {
        
        SearchFilter(text)
        if(text === ""){
          getCountries() ;
        }
        
  
      }
       }
        
      />
      
      </View>
      <FlatList
     
      data = {getList}
      renderItem = {({item , index }) => (
        <View style = {styles.container} >
        <TouchableOpacity activeOpacity= {0.2} onPress={() => {navigation.navigate('Country Stats' , {slug: (item.Slug) , country : item.Country})
        }}>
          <View style={{ flexDirection: "row", padding: 20 , backgroundColor: 'sienna' ,opacity: 0.7 , marginBottom: 5
        ,width: 370, borderRadius: 10}}>
                 <Text style = {{fontSize: 20 , color : "white"}}>{index +1}.  {item.Country}</Text>
          </View>
                 
        </TouchableOpacity>
        </View>
      )}
      />
    </ImageBackground>
  );
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