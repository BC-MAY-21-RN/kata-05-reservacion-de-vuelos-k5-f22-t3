import React from 'react';
import { View, TextInput } from 'react-native';
import { useState } from 'react';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { TextPrimary } from '../../components/TextPrimary/index';
import { TextSecond } from '../../components/TextSecond/index';
import { styles } from './styles'

export const LoginScreen = ({navigation}) => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('')
  
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
        <TextPrimary 
          text={'Login'} 
          color={'#5b6ef7'} 
          fontSize={22} 
        />
        <TextInput
            value={username}
            placeholder="username"
            placeholderTextColor={'grey'}
            style={!!username?styles.inputSelected:styles.input}
            onChangeText={onChangeUsername}
        />
        <TextSecond 
            text={'Password'} 
            color={'grey'} 
            fontSize={14} 
        />
        <TextInput
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
