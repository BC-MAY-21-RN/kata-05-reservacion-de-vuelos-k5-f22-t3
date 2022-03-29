import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ButtonSecond } from '../../components/ButtonSecond/index';
import { Check } from '../../components/Check/index';
import { styles } from './styles'
import { InputText } from '../../components/InputText';
import useAuthForm from '../../library/hooks/useAuthForm';
import auth, { signInWithEmailAndPassword } from '@react-native-firebase/auth';

export const SignupScreen = ({navigation}) => {

const {   
  email,
  password,
  name,
  subscribe,
  terms,
  canSubmitSingUp
} = useAuthForm()

const [isLoginScreen, setIsLoginScreen] = useState(false)

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

  const handleSingUp =()=>{
   
   console.log(name.value);
   auth()
  .createUserWithEmailAndPassword( email.value, password.value)
  .then((resp) => {
    console.log('User account created & signed in!',resp);
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  /*signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Signed in!')
        const user = userCredential.user;
        console.log(user)
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error)
      })*/
  }

  return ( 
    <View style={styles.container}> 
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
    </View>
  );
}; 

