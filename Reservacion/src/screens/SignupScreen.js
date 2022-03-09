import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { ButtonPrimary } from '../components/ButtonPrimary/index';
import { TextPrimary } from '../components/TextPrimary/index';
import { TextSecond } from '../components/TextSecond';


export const SignupScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <View style={styles.container}> 
        
        <TextPrimary 
          text={'Sign Up'} 
          color={'#5b6ef7'} 
          fontSize={22} 
        /> 

        {/* ----------------------------- */}

        <TextSecond 
            text={'First Name'} 
            color={'grey'} 
            fontSize={14} 
        />
        <TextInput
            placeholderTextColor={'grey'}
            style={styles.input}
            onChangeText={onChangeNumber}
        />

        <TextSecond 
            text={'Email'} 
            color={'grey'} 
            fontSize={14} 
        />
        <TextInput
            placeholderTextColor={'grey'}
            style={styles.input}
            onChangeText={onChangeNumber}
        />
        <TextSecond 
            text={'Password'} 
            color={'grey'} 
            fontSize={14} 
        />
        <TextInput
            placeholder={text}
            placeholderTextColor={'grey'}
            style={styles.input}
            onChangeText={onChangeNumber}
        />
        <View style={styles.content}>
          <ButtonPrimary 
            onPress={() => navigation.navigate('Booking')}
            text={"Sign Up"}/>
          <TextSecond 
            text={'or'} 
            color={'grey'} 
            fontSize={14} 
            align={'center'}
          />
          <ButtonPrimary 
            onPress={() => navigation.navigate('Booking')} 
            text={"Sing Up whith Google"}/>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      height: '100%',
      padding: 15,
    },
    content:{
      pasition: 'absolute',
      top:'10%',
    },
    input:{
        borderWidth: 1,
        padding: 10,
    }
})
