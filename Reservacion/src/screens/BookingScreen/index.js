import React from 'react';
import { View,  } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextPrimary } from '../../components/TextPrimary';
import { InputText } from '../../components/InputText';
import { styles } from './styles';

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

