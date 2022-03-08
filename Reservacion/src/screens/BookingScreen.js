import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonNext } from '../components/Button/index';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BookingScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerButton}> 
        <Icon 
        name="plane" 
        size={50}/>

            <ButtonNext />
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
    },
    containerButton:{

    }
})