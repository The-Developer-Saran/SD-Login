import React, { useState,useContext, createContext, useEffect} from "react";
import { View, Text, TextInput,StyleSheet, Button,Pressable,ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import Lottie from 'lottie-react-native';
import axios from "axios";



export default function Login({navigation}){

   

 
    const [Id,setEmail] = useState();
    const [pass,setPass] = useState();

    
    const validatee = () => {


    const BASE_URL = "";

    axios.get(`https://sparkredeem.com/SparkAttendance/SparkDialAPI/employeeLogin.php?login_id=${Id}&login_pin=${pass}`)
    .then(response =>{
        const data= response?.data;

        if (data?.Response.Success === "1"){
            // alert(`welcome ${data?.Response.Result[0].employee_name}`);
            navigation.navigate('Sec',{
               fname:data?.Response.Result[0].employee_name
            })
        }
        else{
            alert("Invalid");
        }
    })
    .catch(error =>
        {
          alert(error);
        });
    
 

    
       
    }
    



    

    return(
        
        <>
       
       
            
            <View style={styles.container}>
           
                <Text style={{fontSize:25}}><Text style={{color:'#FF6C37',fontSize:25}}>SPARK</Text>DIAL</Text>
                <Lottie style={{height:250}}source={require('./animation.json')} autoPlay loop />
            </View>

            <View style={styles.container}>

                <TextInput 
                onChangeText={(value)=>setEmail(value)}
                style={styles.input} 
                value={Id}
                placeholder="Id"/>
                

                <TextInput 
                onChangeText={(value)=>setPass(value)}
                style={styles.input} 
                value={pass}
                secureTextEntry
                placeholder="Password"/>
                
                
                <Pressable  
                onPress={validatee}
                style={styles.btn}>
                <Text style={{color:'#fff'}}>Login</Text>
                </Pressable>

                <TouchableOpacity><Text style={{marginTop:10}}>Register</Text></TouchableOpacity>
            
            </View>
           
            
        </>
    );
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderWidth:1,
        borderRadius:50,
        padding:10,
        width:300,
        marginTop:10
    },
    btn:{
        marginTop:10,
        backgroundColor:'#A47EF6',
        paddingHorizontal:130,
        paddingVertical:10,
        borderRadius:50
    }
})
