import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonPrimary } from '../components/ButtonPrimary/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextPrimary } from '../components/TextPrimary/index';
import { InputText } from '../components/InputText';

export const BookingScreen = ({navegation}) => {




  return (
    <View style={styles.container}>
         <Icon name="angle-left" size={25} color="#5b6ef7"/>
        
        
        <View style={styles.containerText}> 
        <TextPrimary 
            text={'Where are you now'} 
            color={'black'} 
            fontSize={40} 
            align={'center'}
            /> 
        </View>
        <InputText text={'Select location'}/>
        <View style={styles.containerButton}>
          <ButtonPrimary
            onPress={() => navigation.navigate('Booking')}
            text={"Login"}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      height: '100%',
      paddingHorizontal: 22,
    },
    containerButton:{
      pasition: 'absolute',
      top:'40%',
    }
})