import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { InputText } from '../../components/InputText';

export const BookingScreen = ({navegation}) => {
  return (
    <View style={styles.container}>
        <Icon 
          name="angle-left" 
          size={25} 
          color="#5b6ef7"
          onPress={() => navegation.navigate('Myflights')}  
          />

        <View style={styles.containerText}> 
        <Text fontSize={40}  align={'center'}> Where are you now? </Text>
        </View>
        <InputText text={'Select location'}/>
        <View style={styles.containerButton}>
          <ButtonPrimary
            onPress={() => navigation.navigate('Booking')}
            text={"Next"}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      height: '100%',
      backgroundColor: 'white',
      height: '100%',
      paddingHorizontal: 22,
    },
    containerButton:{
      pasition: 'absolute',
      top:'80%',
      left:'4%',
      top:'40%',
    }
}) 
