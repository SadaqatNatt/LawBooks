import React, { useState } from 'react';
import { StyleSheet, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import bg from '../../assets/bg.png'; 

function Login() {

  const [enteremail, setEmail] =useState('');
  const [password, setPassword] =useState('');

  return (
    
<ImageBackground style={styles.bimg} 
source={bg}>
    <Image style={styles.logo} 
    source={require('../../assets/logo.jpg')}></Image>
    <View style={styles.logincontain}>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.ltext}>Please sign in to continue</Text>


<View>
<View  style={styles.tiv}>
<TextInput
style={styles.TextInput}
placeholder="   Enter your Email"
placeholderTextColor="grey"
onChangeText={(enteremail) => setEmail(enteremail)}
/>


<TextInput
style={styles.TextInput}
placeholder="   Enter your Password"
placeholderTextColor="grey"
secureTextEntry={true}
onChangeText={(password) => setPassword(password)}
/>
</View>

<TouchableOpacity style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>

<TouchableOpacity>
 <Text style={styles.forget_button}>Forgot Password?</Text>
</TouchableOpacity>
</View>
<View style={styles.footer}> 
<Text style={{ color: 'white',paddingBottom:10, }}>
 Dont't have an account ?          
 <TouchableOpacity>
 <Text style={{ color: '#066163',fontWeight:'bold' }}>SIGN UP</Text>
</TouchableOpacity>
</Text>
</View>

</View>
    
</ImageBackground>
  );
}

  const styles = StyleSheet.create({
    bimg:{
        flex:1,
    },
    logo:{
        width:200,
        height:200,
        borderRadius:50,
        marginTop:40,
        resizeMode:"contain",
        alignSelf:"center",    
    },
    text:{
        paddingLeft:20,
        fontSize: 30, 
        fontWeight: 'bold'  
    },
    ltext:{
        paddingLeft:20,
        fontWeight:'bold',
        color: 'white',
    },
      tiv:{
        paddingTop:20,
        alignItems: 'flex-start',
        paddingLeft:20,
        alignContent:"center",
        textAlign:"center",
      },
      TextInput: {
        backgroundColor: "#F2F2F2",
        borderRadius:12,
        width:"90%",
        height:40,
        marginBottom: 20,
      },
      loginBtn: {
      alignSelf:"center",
      width:"40%",
      borderRadius:10,
      height:35,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      backgroundColor:"#066163",
      },
      loginText: {
      color:'white',
      fontSize:16,
      fontWeight: 'bold',
      },
      forget_button: {
      alignSelf:"center",
      height: 30,
      marginBottom: 50,
      marginTop:20,
      color: '#B20600',
      },
      footer:{
      alignSelf:'center',
      paddingTop:100,
      },
    
})
export default Login;