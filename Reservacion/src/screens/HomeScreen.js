import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { InputText } from '../components/InputText/index';
import { ButtonNext } from '../components/Button';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Icon name="plane" size={70} color="red"/>
        <InputText />
        <Button
            title="Booking"
            onPress={() => navigation.navigate('Booking')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      height: '100%',
      backgroundColor: 'white',
    }
})