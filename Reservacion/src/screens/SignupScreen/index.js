import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles'
import { TextTitle } from '../../components/TextTitle';
import { InputText } from '../../components/InputText';

export const SignupScreen = ({navigation}) => {

  const [loginData,setLoginData]=useState({
    username:'',
    email:'',
    password:'',
    toggleBox:'',
    toggleBox1:'',
  })

  const {
    username,
    email,
    password,
    toggleBox,
    toggleBox1,} = loginData

  const handleChange =(value, key)=>{
    setLoginData({
      ...loginData,
      [key]:value
    })
  }

  const isAllData = !!username&&!!email&&!!password&&!!toggleBox
  const handleSingUp=()=>{
    if(isAllData){

      console.log(username,email,password, toggleBox,toggleBox1)
    }   
    else{
      console.log("some value missing not singing up")
    }
    return
  }

  return ( 
    <View style={styles.container}> 
        <TextTitle 
          text={'Sign Up'} 
          color={'#5b6ef7'} 
          fontSize={22} 
          fontWeight={'bold'}
        /> 
        <TextTitle 
            text={'First Name'} 
            color={'grey'} 
            fontSize={14} 
        />
        <InputText
            value={username}
            placeholder="username"
            placeholderTextColor={'grey'}
            style={!!username?styles.inputSelected:styles.input}
            onChangeText={(value)=>handleChange(value,'username')}
        />
        <TextTitle 
            text={'Email'} 
            color={'grey'} 
            fontSize={14} 
        />
        <InputText
            value={email}
            placeholder="email"
            placeholderTextColor={'grey'}
            style={!!email?styles.inputSelected:styles.input}
            onChangeText={(value)=>handleChange(value,'email')}
        />
        <TextTitle 
            text={'Password'} 
            color={'grey'} 
            fontSize={14} 
        />
        <InputText
            value={password}
            placeholder="password"
            placeholderTextColor={'grey'}
            style={!!password?styles.inputSelected:styles.input}
            onChangeText={(value)=>handleChange(value,'password')}
        />
        <Text>Use 8 or more characters with a mix of letters, numbers and symbols</Text>        
        <Check value={toggleBox}  onValueChange={ (value)=>handleChange(value,'toggleBox')} text={"I agree to the Terms and Privacy Policy"}/>
        <Check value={toggleBox1}  onValueChange={ (value)=>handleChange(value,'toggleBox1')}  text={"Suscribe for select product updates."}/>
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={handleSingUp}
            disabled = {isAllData}
            text={"Sign Up"}/>
          <TextTitle 
            text={'or'} 
            color={'grey'} 
            fontSize={14} 
            align={'center'}
          />
          <ButtonSecond 
            onPress={() => navigation.navigate('Login')} 
            text={"Sing Up whith Google"}
          />
            <View style={styles.containerFooter}>
                <Text style={styles.textSize}>Already have an account?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                    <Text style={{...styles.textSize,color: '#5b6ef7'}}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
  );
}; 

