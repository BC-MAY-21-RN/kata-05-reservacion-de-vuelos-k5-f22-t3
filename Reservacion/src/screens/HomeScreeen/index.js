import React from 'react';
import { View } from 'react-native';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { TextTitle } from '../../components/TextTitle';
import { styles } from '../../utils/stylesGlobal';


export const HomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}> 
        <View style={styles.content}>

          <ButtonPrimary  
            onPress={() => navigation.navigate('Login')}
            text={"Login"}
            status={true}/>

          <ButtonPrimary 
            onPress={() => navigation.navigate('Signup')} 
            text={"Sing Up"}
            status={true}/>
        </View>
    </View>
  );
};

