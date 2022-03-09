import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonNext } from '../components/Button/index';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BookingScreen = ({navegation}) => {
  return (
    <View style={styles.container}>
        <Icon name="plane" size={50} color="#5b6ef7"/>
        <View style={styles.containerButton}> 
            <ButtonNext />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      height: '100%',
      backgroundColor: 'white',
    },
    containerButton:{
      pasition: 'absolute',
      top:'80%',
      left:'11%',
    }
})