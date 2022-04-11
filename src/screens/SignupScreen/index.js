import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles';
import { InputText } from '../../components/InputText';
import useAuthForm from '../../library/hooks/useAuthForm';
import { signIn, signUp } from '../../library/utils/auth'
import {TitleText} from '../../library/utils/styledGlobal';
import { AuthContext } from '../../navigation/AuthProvider';

export const SignupScreen = ({navigation}) => {
  const {   
    email,
    password,
    name,
    subscribe,
    terms,
    canSubmitSingUp,
    canSubmitLogin,
  } = useAuthForm()

  const [isLoginScreen, setIsLoginScreen] = useState(false)

  // const {login, googleLogin} = useContext(AuthContext);

  const signInputs = [{
    ...name,
    label:'First Name',
    placeholder:"username",
    style:!!name?styles.inputSelected:styles.input,
    hide:isLoginScreen
  },

  {
    ...email,
    label:'Email',
    placeholder:"email",
    style:!!email?styles.inputSelected:styles.input,
    isRequiered:true,
    
  },
  {
    ...password,
    label:'Password',
    placeholder:"password",
    style:!!password?styles.inputSelected:styles.input,
    secureTextEntry:true,
    isRequiered:true,
   
  }]

  const handleSingUp = () =>{
    signUp(email.value, password.value);
  }

  const handleLogin = () => {
    if (email != '' && password != '') {
      signIn(email.value, password.value);
    }
  }


  return ( 
    <View style={styles.container}>        
        <TitleText > {isLoginScreen? 'Login' : 'Sign Up'} </TitleText>  
        {signInputs.map((item)=>!item.hide&&<InputText key={item.label} {...item}/> )}
       {
        !isLoginScreen&&
       <>
        <Text>Use 8 or more characters with a mix of letters, numbers and symbols</Text>        
        <Check value={terms.value}  onValueChange={terms.onChangeText} text={"I agree to the Terms and Privacy Policy"}/>
        <Check value={subscribe.value}  onValueChange={subscribe.onChangeText}  text={"Suscribe for select product updates."}/>
       </>
       } 
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={isLoginScreen?handleLogin:handleSingUp} 
            disabled={isLoginScreen?!canSubmitLogin:!canSubmitSingUp}
            text={isLoginScreen?"Login":"Sign Up"}/>
          <ButtonSecond 
            onPress={() => googleLogin()}
            text={`${isLoginScreen?'Login ':"Sing Up "}with Google`}
            //  buttonTitle="Sign In with Google"
            //  btnType="google"
            //  color="#de4d41"
            // backgroundColor="#f5e7ea"
          />
            <View style={styles.containerFooter}>
                <Text style={styles.textSize}>{isLoginScreen?`Don't you have an account?`:'Already have an account?'}</Text>
                <TouchableOpacity  onPress={() => setIsLoginScreen(!isLoginScreen)}>
                    <Text style={{...styles.textSize,color: '#5b6ef7'}}> {isLoginScreen?'Sign Up': 'Login'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}; 