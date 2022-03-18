import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles'
import { InputText } from '../../components/InputText';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useAuthForm from '../../library/hooks/useAuthForm';

export const LoginScreen = ({navigation}) => {

const {   
  email,
  password,
  canSubmitLogin
} = useAuthForm()


  const loginInputs = [
  {
    ...email,
    label:'Email',
    placeholder:"email",
    style:!!email?styles.inputSelected:styles.input,
    isRequiered:true
  },
  {
    ...password,
    label:'Password',
    placeholder:"password",
    style:!!password?styles.inputSelected:styles.input,
    secureTextEntry:true,
    isRequiered:true
  }]


   const handleLogin =()=>{
    console.log("login");
  }
  return ( 
    <View style={styles.container}> 
          {loginInputs.map((item)=><InputText key={item.label} {...item}/> )}
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={handleLogin}
            disabled={canSubmitLogin}
            text={"Sign Up"}/>
          <ButtonSecond 
            onPress={() => navigation.navigate('Login')} 
            text={"Sing Up whith Google"}
          />
            <View style={styles.containerFooter}>
                <Text style={styles.textSize}>Don't you have an account?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Signup')}>
                    <Text style={{...styles.textSize,color: '#5b6ef7'}}> Signup</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
  );
}; 

