import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

export const Check = (props) => {
    const { value, onValueChange, text } =props;
  
    return (
        <View style={styles.containerCheck}>
            <CheckBox
            
            value={value}
            tintColors={{ true: '#5b6ef7', false: '#b6b7ba' }}
            onValueChange={onValueChange}
            />
            <Text>{text}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    containerCheck:{
        flexDirection: 'row',
        alignItems: 'center',
        color: '#b6b7ba',
    },
})