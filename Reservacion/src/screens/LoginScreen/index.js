import React from 'react';
import { View, TextInput } from 'react-native';
import { useState } from 'react';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { styles } from './styles'

import { InputText } from '../../components/InputText/index'

export const LoginScreen = ({navigation}) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('')
  
    const isAllData = username&&!!password
    // const handleLoginScreen=()=>{
    // if(isAllData){
    //   console.log(username,password)
    // }   
    // else{
    //   console.log("some value missing not singing up")
    // }
    // return
    // }

  const inputs = [ {
    value:username,
    placeholder:"username",
    style:!!username?styles.inputSelected:styles.input,
    onChangeText: onChangeUsername,
    label:"Username"
  },
  {
    value:password,
    placeholder:"password",
    style:!!password?styles.inputSelected:styles.input,
    onChangeText:onChangePassword,
    label:"Password",
    secureTextEntry:true
  }

]
  return ( 
    <View style={styles.container}> 
     {inputs.map((item)=><InputText key={item.label} {...item}/> )}
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={() => navigation.navigate('MyFlightsScreen')}
            disabled = {isAllData}
            text={"Login"}
          />
        </View>
    </View>
  );
}; 
