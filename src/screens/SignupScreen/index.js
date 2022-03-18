import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles'
import { InputText } from '../../components/InputText';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useAuthForm from '../../library/hooks/useAuthForm';

export const SignupScreen = ({navigation}) => {

const {   
  email,
  password,
  name,
  subscribe,
  terms,
  canSubmitSingUp
} = useAuthForm()


  const signInputs = [{
    ...name,
    label:'First Name',
    placeholder:"username",
    style:!!name?styles.inputSelected:styles.input,
  },
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


   const handleSingUp =()=>{
    console.log("singup");
  }
  return ( 
    <View style={styles.container}> 
        {signInputs.map((item)=><InputText key={item.label} {...item}/> )}
        <Text>Use 8 or more characters with a mix of letters, numbers and symbols</Text>        
        <Check value={terms.value}  onValueChange={terms.onChangeText} text={"I agree to the Terms and Privacy Policy"}/>
        <Check value={subscribe.value}  onValueChange={subscribe.onChangeText}  text={"Suscribe for select product updates."}/>
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={handleSingUp}
            disabled={canSubmitSingUp}
            text={"Sign Up"}/>
          <ButtonSecond 
            onPress={() => navigation.navigate('Login')} 
            text={"Sing Up whith Google"}
          />
            <View style={styles.containerFooter}>
                <Text style={styles.textSize}>Already have an account?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
                    <Text style={{...styles.textSize,color: '#5b6ef7'}}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
  );
}; 

