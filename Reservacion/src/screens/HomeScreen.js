import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { ButtonPrimary } from '../components/ButtonPrimary/index';
import { TextPrimary } from '../components/TextPrimary/index';
import { TextSecond } from '../components/TextSecond';

export const HomeScreen = ({navigation}) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <View style={styles.container}> 

        <View style={styles.content}>
          <TextPrimary 
            text={'Welcome'} 
            color={'black'} 
            fontSize={60} 
            align={'center'}
            /> 
          <ButtonPrimary 
            onPress={() => navigation.navigate('Booking')}
            text={"Login"}
            status={true}/>
          <TextSecond 
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

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      height: '100%',
      padding: 15,
    },
    content:{
      pasition: 'absolute',
      top:'28%',
    }
})