import React from 'react';
import { View } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { TextTitle } from '../../components/TextTitle';
import { styles } from '../../utils/stylesGlobal';

export const HomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}> 
        <View style={styles.content}>
          <TextTitle         
            text={'Welcome'} 
            fontSize={60} 
            align={'center'}
            color={'#5b6ef7'}
            fontWeight={'bold'}
            /> 
          <ButtonPrimary  
            onPress={() => navigation.navigate('Login')}
            text={"Login"}
            status={true}/>
          <TextTitle 
            text={'or'} 
            color={'grey'} 
            fontSize={14} 
            align={'center'}
          />
          <ButtonPrimary 
            onPress={() => navigation.navigate('Signup')} 
            text={"Sing Up"}
            status={true}/>
        </View>
    </View>
  );
};

