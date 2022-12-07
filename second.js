
import React from "react";
import {Button, Pressable, Text, View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function Second({navigation}){

    const route=useRoute();
    return(
        <>
        <View style={Homestyles.container}>
        
        <Text style={{fontSize:30}}>Welcome {route.params.fname}</Text>
        <Pressable style={Homestyles.logoutbtn}onPress={()=>navigation.navigate('login')}><Text style={Homestyles.btntext}>Logout</Text></Pressable>
        </View>
        </>

    )
}

const Homestyles = StyleSheet.create({
    logoutbtn:{

        width:150,
        backgroundColor:"#FF6C37",
        paddingVertical:1,
        borderRadius:10,
        paddingVertical:5,
        paddingHorizontal:20,
        marginBottom:50,
    

    
    },
    btntext:{
        color:"white",
        textAlign:"center",
        fontSize:20
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
}) 