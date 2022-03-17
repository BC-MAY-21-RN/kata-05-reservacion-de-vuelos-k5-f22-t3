import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles'
import { InputText } from '../../components/InputText';
import Icon from 'react-native-vector-icons/FontAwesome5';

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

  const signInputs = [{
    value:username,
    placeholder:"username",
    placeholderTextColor:'grey',
    style:!!username?styles.inputSelected:styles.input,
    onChangeText:(value)=>handleChange(value,'username'),
  },
  {
    value:email,
    placeholder:"email",
    placeholderTextColor:'grey',
    style:!!email?styles.inputSelected:styles.input,
    onChangeText:(value)=>handleChange(value,'email'),
  },
  {
    value:password,
    placeholder:"password",
    placeholderTextColor:'grey',
    style:!!password?styles.inputSelected:styles.input,
    onChangeText:(value)=>handleChange(value,'password'),
    secureTextEntry:true,
  }]
  return ( 
    <View style={styles.container}> 
        <TouchableOpacity onPress={() => navigation.goBack() }>
            <Icon name="angle-left" color="red" size={40}/>
        </TouchableOpacity>
  
        {signInputs.map((item)=><InputText key={item.placeholder} {...item}/> )}

        <Text>Use 8 or more characters with a mix of letters, numbers and symbols</Text>        
        <Check value={toggleBox}  onValueChange={ (value)=>handleChange(value,'toggleBox')} text={"I agree to the Terms and Privacy Policy"}/>
        <Check value={toggleBox1}  onValueChange={ (value)=>handleChange(value,'toggleBox1')}  text={"Suscribe for select product updates."}/>
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={handleSingUp}
            disabled = {isAllData}
            text={"Sign Up"}/>
          
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

