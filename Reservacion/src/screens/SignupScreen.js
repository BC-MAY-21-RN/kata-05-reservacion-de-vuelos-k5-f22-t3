import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Icon } from 'react-native-vector-icons/FontAwesome5';
import { ButtonPrimary } from '../components/ButtonPrimary/index';
import { TextPrimary } from '../components/TextPrimary/index';
import { TextSecond } from '../components/TextSecond';
import CheckBox from '@react-native-community/checkbox';

export const SignupScreen = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleBox, setToggleBox] = useState(false)
  
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
        {/* --------------------------------- */}
        <Text>Use 8 or more characters with a mix of letters, numbers and symbols</Text>
        {/* --------------------------------- */}

        <View style={styles.containerCheck}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                tintColors={{ true: '#5b6ef7', false: '#b6b7ba' }}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.textCheck}>I agree to the Terms and Privacy Policy</Text>
        </View>
        <View style={styles.containerCheck}>
            <CheckBox
                disabled={false}
                value={toggleBox}
                tintColors={{ true: '#5b6ef7', false: '#b6b7ba' }}
                onValueChange={(newValue) => setToggleBox(newValue)}
            />
            <Text>Suscribe for select product updates.</Text>
            {/*<Image 
              style={{height: 10}} 
              source={require('./assets/Google__G__Logo.svg')}
            />*/}
        </View>



            
        
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
            <View style={styles.containerFooter}>
                <Text style={styles.textSize}>Already have an account?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
                    <Text style={{...styles.textSize,color: '#5b6ef7'}}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Image style={{height: 10}} source={{uri: 'https://commons.wikimedia.org/wiki/File:Google_%22G%22_Logo.svg#/media/File:Google_%22G%22_Logo.svg'}}/>


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
      top:'5%',
    },
    input:{
        borderWidth: 1,
        padding: 10,
    },
    containerCheck:{
        flexDirection: 'row',
        alignItems: 'center',
        color: '#b6b7ba',
    },
    containerFooter:{
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textSize:{
        fontSize: 16,
    }
})
