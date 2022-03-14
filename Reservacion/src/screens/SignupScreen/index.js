import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { TextPrimary } from '../../components/TextPrimary/index';
import { TextSecond } from '../../components/TextSecond/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles'

export const SignupScreen = ({navigation}) => {
  const [username, onChangeUsername] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('')

  const [toggleBox, onValueChange] = useState(false)
  const [toggleBox1, onValueChange1] = useState(false)
  
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
          text={'Sign Up'} 
          color={'#5b6ef7'} 
          fontSize={22} 
        /> 
        <TextSecond 
            text={'First Name'} 
            color={'grey'} 
            fontSize={14} 
        />
        <TextInput
            value={username}
            placeholder="username"
            placeholderTextColor={'grey'}
            style={!!username?styles.inputSelected:styles.input}
            onChangeText={onChangeUsername}
        />
        <TextSecond 
            text={'Email'} 
            color={'grey'} 
            fontSize={14} 
        />
        <TextInput
            value={email}
            placeholder="email"
            placeholderTextColor={'grey'}
            style={!!email?styles.inputSelected:styles.input}
            onChangeText={onChangeEmail}
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
        <Text>Use 8 or more characters with a mix of letters, numbers and symbols</Text>        
        <Check value={toggleBox}  onValueChange={ onValueChange} text={"I agree to the Terms and Privacy Policy"}/>
        <Check value={toggleBox1}  onValueChange={ onValueChange1}  text={"Suscribe for select product updates."}/>
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={handleSingUp}
            disabled = {isAllData}
            text={"Sign Up"}/>
          <TextSecond 
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

