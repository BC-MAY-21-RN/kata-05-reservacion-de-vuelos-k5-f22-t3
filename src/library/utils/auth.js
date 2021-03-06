import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native'; 
import { useEffect, useState } from 'react';

export const signIn = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('Logged in', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log(err);
      });
};
  
export const signUp = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        ToastAndroid.show('Signed up', ToastAndroid.SHORT);
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
}

export const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('Signed Out', ToastAndroid.SHORT);
      });
};

export const infoUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const onAuthStateChanged = async user => {
    await setCurrentUser(user);
    setIsLoading(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return null;
  }
  
  return currentUser
}
