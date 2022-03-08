import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonNext } from '../components/Button/index';

export const BookingScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerButton}> 

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