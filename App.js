import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Button, StyleSheet, FlatList, TouchableOpacity , ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons , MaterialIcons , Feather, FontAwesome , AntDesign} from "@expo/vector-icons" ;
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen2 from "./screens/screen2"
import Screen3 from "./screens/screen3"
import Screen1 from "./screens/screen1"
import NAmericaScreen from "./screens/NAmericaScreen"
import AfricaScreen from "./screens/AfricaScreen"
import SAmericaScreen from "./screens/SAmericaScreen"
import AsiaScreen from "./screens/AsiaScreen"

import EuropeScreen from "./screens/EuropeScreen"
import AustraliaScreen from "./screens/AustraliaScreen"




const Tab = createBottomTabNavigator();

function Screen4({navigation}) {
  return (
    <Tab.Navigator 
    initialRouteName="Asia"
    
    tabBarOptions = {{activeTintColor : "lightgray" , inactiveTintColor: "slategray" ,
      activeBackgroundColor: "gray" , inactiveBackgroundColor: "darkgray" ,
    labelStyle: {fontSize: 13}   , allowFontScaling: true , 
    }}
    inactiveColor="darkslategray"
    lazy = {false}
    >
    <Tab.Screen name = "Asia" component = {AsiaScreen}   
    options = {{
      tabBarIcon: ({color}) => <FontAwesome name="chevron-up" size={24} color= {color}  
     /> }}
     />
    <Tab.Screen name = "Europe" component = {EuropeScreen} options = {{
      tabBarIcon: ({color}) => <FontAwesome name="chevron-up" size={24} color= {color}  
     /> }}
    />
    <Tab.Screen name = "Australia" component = {AustraliaScreen} 
    options = {{
      tabBarIcon: ({color}) => <FontAwesome name="chevron-up" size={24} color= {color}  
     /> }}
    />
    <Tab.Screen name = "N. America" component = {NAmericaScreen}
    options = {{
      tabBarIcon: ({color}) => <FontAwesome name="chevron-up" size={24} color= {color}  
     /> }}
    />
    <Tab.Screen name = "S. America" component = {SAmericaScreen}
    options = {{
      tabBarIcon: ({color}) => <FontAwesome name="chevron-up" size={24} color= {color}  
     /> }}
    />
    <Tab.Screen name = "Africa" component = {AfricaScreen}
    options = {{
      tabBarIcon: ({color}) => <FontAwesome name="chevron-up" size={24} color= {color}  
     /> }}
    />
   </Tab.Navigator>
)}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
    openByDeafult = {true}
    drawerType = "slide"
     
    drawerStyle = {{
      backgroundColor : "peru" ,
      
      
      width : 200 ,
      paddingTop: 40
      
            

    }}
    >
     
      <Drawer.Screen name="Main" component={StackNavigator}  
      options = {{
      drawerLabel: "Select Country" ,
      drawerIcon: () => <AntDesign name="select1" size={30} color="white" />
      }} />
      <Drawer.Screen name="Global stats" component={Screen3} 
      options = {{
      drawerLabel: "Global Summary" ,
      drawerIcon: () => <Ionicons name="md-globe" size={30} color="white" />
      }}/>

<Drawer.Screen name="Region Stats" component={Screen4} 
      options = {{
      drawerLabel: "Regional Stats" ,
      drawerIcon: () => <MaterialIcons name="landscape" size={30} color="white" />
      }}/>
      
    </Drawer.Navigator>
  );
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



const Stack = createStackNavigator();
 const StackNavigator = () => {
   return (
  <Stack.Navigator
  initialRouteName = {'mainScreen'}
  screenOptions={{
    headerShown: false ,
    headerTitleAlign: "center",
    headerTintColor: 'grey',
    headerStyle: {
      backgroundColor: 'lightblue'
    }
  }}
>
    
    <Stack.Screen name="mainScreen" component={Screen1} />
    <Stack.Screen name = "Country Stats" component = {Screen2} />
    <Stack.Screen name = "Global Stats" component = {Screen3} />
  </Stack.Navigator>
   )
}

function App () {
  return(
    <NavigationContainer>
      
    <MyDrawer /> 
    
    </NavigationContainer>
  )
}
export default App;
 