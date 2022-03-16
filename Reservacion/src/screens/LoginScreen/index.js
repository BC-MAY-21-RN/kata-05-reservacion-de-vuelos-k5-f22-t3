import React from 'react';
import { View, TextInput } from 'react-native';
import { useState } from 'react';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { styles } from './styles'
import { TextTitle } from '../../components/TextTitle';
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

  return ( 
    <View style={styles.container}> 
        <TextTitle 
          text={'Login'} 
          color={'#5b6ef7'} 
          fontSize={22} 
          fontWeight={'bold'}
        />
        <InputText
            value={username}
            placeholder="username"
            placeholderTextColor={'grey'}
            style={!!username?styles.inputSelected:styles.input}
            onChangeText={onChangeUsername}
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
            onChangeText={onChangePassword}
        />
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
