import React from 'react';
import { View,  } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { InputText } from '../../components/InputText';
import { TextTitle } from '../../components/TextTitle';
import { styles } from '../../utils/stylesGlobal'

export const BookingScreen = ({navegation}) => {

  return (
    <View style={styles.container}>
         <Icon name="angle-left" size={25} color="#5b6ef7"/>
                
        <View> 
        <TextTitle 
            text={'Where are you now'} 
            color={'black'} 
            fontSize={40} 
            align={'center'}
            fontWeight={'bold'}
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

