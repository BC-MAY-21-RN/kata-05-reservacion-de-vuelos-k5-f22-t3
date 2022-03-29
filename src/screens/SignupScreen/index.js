import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles'
import { InputText } from '../../components/InputText';
import useAuthForm from '../../library/hooks/useAuthForm';
import auth from '@react-native-firebase/auth';
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
    isRequiered: true, 
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

  const handleSingUp =()=>{
  auth()
  .createUserWithEmailAndPassword(email.value, password.value)
  .then((resp) => {
    console.log('User account created & signed in!', resp);
    setVisible(true)
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');   
      setIsValidEmail(false)
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
  });
  }

  return ( 
    <View style={styles.container}> 
      {signInputs.map((item) => !item.hide && <InputText key={item.label} {...item} />)}
       {    
        !isLoginScreen&&
       <>
        <Text>Use 8 or more characters with a mix of letters, numbers and symbols</Text>        
        <Check value={terms.value}  onValueChange={terms.onChangeText} text={"I agree to the Terms and Privacy Policy"}/>
        <Check value={subscribe.value} onValueChange={subscribe.onChangeText} text={"Suscribe for select product updates."} />
        {!isValidEmail&& 
        <>
          <Text>
            Email in use. Use a different email
          </Text>
        </>
        }
        {!canSubmitLogin&& 
        <>
          <Text>
            Incorrect email and/or password
          </Text>
        </>
        }
       </>
       } 
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={handleSingUp} 
            disabled={!canSubmitSingUp}
            text={isLoginScreen?"Login":"Sign Up"}/>
          <ButtonSecond 
            onPress={() => navigation.navigate('Login')} 
            text={`${isLoginScreen?'Login ':"Sing Up "}with Google`}
          />
            <View style={styles.containerFooter}>
                <Text style={styles.textSize}>{isLoginScreen?`Don't you have an account?`:'Already have an account?'}</Text>
                <TouchableOpacity  onPress={() => setIsLoginScreen(!isLoginScreen)}>
                    <Text style={{...styles.textSize,color: '#5b6ef7'}}> {isLoginScreen?'Signup': 'Login'}</Text>
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
