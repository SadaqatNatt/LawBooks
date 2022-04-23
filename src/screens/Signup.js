import React, { useState } from 'react';
import { Image, ImageBackground,StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import bg from '../../assets/bg.png'; 

function Signup(props) {
    const [fullname, setfullname] =useState('');
    const [email, setemail] =useState('');
    const [password, setpassword] =useState('');
    const [confpass, setconfpass] =useState('');
    return (
        <ImageBackground style={styles.bimg}
        source={bg} >
        <Image style={styles.logo} source={require('../../assets/logo.jpg')}></Image>
        <View>
        <Text style={styles.header}>Create Account</Text>

        </View>
        <View  style={styles.tiv}>
        <TextInput
        style={styles.TextInput}
        placeholder="   Enter your Full Name"
        placeholderTextColor="grey"
        onChangeText={(fullname) => setfullname(fullname)}
        />


        <TextInput
        style={styles.TextInput}
        placeholder="   Enter your Email"
        placeholderTextColor="grey"
        onChangeText={(email) => setemail(email)}
        />


        <TextInput
        style={styles.TextInput}
        placeholder="   Enter your Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(password) => setpassword(password)}
        />


        <TextInput
        style={styles.TextInput}
        placeholder="   Confirm Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(confpass) => setconfpass(confpass)}
        />
            
        </View>

        <TouchableOpacity style={styles.SignupBtn}>
        <Text style={{ color:'white',fontWeight:'bold',fontSize:16,}}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
        <Text style={{color:'white',}}>Already have an Account?  
                                                              

        <TouchableOpacity>
        <Text style={{color:'#066163',fontWeight:'bold'}}>SIGN IN</Text>
        </TouchableOpacity>
        </Text>
        
        </View>

        </ImageBackground>
        );
    }
        const styles = StyleSheet.create({
            bimg:{
                flex:1,
                alignItems: "center",
            },

            logo:{
                width:200,
                height:200,
                borderRadius:50,
                marginTop:40,
                resizeMode:'contain',
            },

            header:{
                fontWeight:'bold',
                fontSize:20,
            },

            tiv:{
                width:'100%',
                paddingTop:20,
                alignSelf:'flex-start',
                paddingLeft:20,
            },
            
            TextInput: {
                backgroundColor: "#F2F2F2",
                borderRadius:12,
                width:"90%",
                height:40,
                marginBottom: 22,
              },

            SignupBtn: {            
                width:"40%",
                borderRadius:10,
                height:35,
                alignItems:"center",
                justifyContent:"center",
                marginTop:40,
                backgroundColor:"#066163",
        },

            footer:{
                alignSelf:"center",
                paddingTop:80,
            }
})

export default Signup;