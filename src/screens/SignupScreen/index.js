import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles';
import { InputText } from '../../components/InputText';
import useAuthForm from '../../library/hooks/useAuthForm';
import { signIn, signUp } from '../../library/utils/auth'
import { TitleText } from '../../library/utils/styledGlobal';
import AnimatedLoader from "react-native-animated-loader";

export const SignupScreen = ({navigation}) => {
  const {   
    email,
    password,
    name,
    subscribe,
    terms,
    canSubmitSingUp,
    canSubmitLogin
  } = useAuthForm()

  const [isLoginScreen, setIsLoginScreen] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [visible, setVisible] = useState(false)

  const signInputs = [{
    ...name,
    label:'First Name',
    placeholder:"username",
    style:!!name?styles.inputSelected:styles.input,
    hide:isLoginScreen,
  },
  {
    ...email,
    label:'Email',
    placeholder:"email",
    style:!!email?styles.inputSelected:styles.input,
    isRequiered:true,
    validEmail:isValidEmail,
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
    signUp(email.value, password.value, setIsValidEmail);
    if (isValidEmail) {
      setVisible(false)
    } else {
      setVisible(true)
    }
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
        <Check value={subscribe.value} onValueChange={subscribe.onChangeText} text={"Suscribe for select product updates."} />
        {!isValidEmail&& 
        <>
          <Text style={styles.differentEmail}>
            Email in use. Use a different email
          </Text>
        </>
        }
        {!canSubmitLogin&& 
        <>
          <Text style={styles.incorrectText}>
            Incorrect email and/or password
          </Text>
        </>
        }
       </>
       } 
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={isLoginScreen?handleLogin:handleSingUp} 
            disabled={isLoginScreen?!canSubmitLogin:!canSubmitSingUp}
            text={isLoginScreen?"Login":"Sign Up"}/>
          <ButtonSecond 
            onPress={() => navigation.navigate('Login')} 
            text={`${isLoginScreen?'Login ':"Sing Up "}with Google`}
          />
            <View style={styles.containerFooter}>
                <Text style={styles.textSize}>{isLoginScreen?`Don't you have an account?`:'Already have an account?'}</Text>
                <TouchableOpacity  onPress={() => setIsLoginScreen(!isLoginScreen)}>
                    <Text style={{...styles.textSize,color: '#5b6ef7'}}> {isLoginScreen?'Sign Up': 'Login'}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <AnimatedLoader
            visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../../assets/lf30_editor_8jfivmsk.json")}
            animationStyle={styles.lottie}
            speed={1}
          >
            <Text>Signing up...</Text>
          </AnimatedLoader>
    </View>
  );
}; 
