import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const ButtonPrimary = (props) => {
    const { onPress, text} =props;
    return (
        <TouchableOpacity onPress = { onPress }
            style={styles.containerTouch}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerTouch:{
        alignSelf:'center',
        width: '90%',
        backgroundColor: "#5b6ef7",
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 5,
        shadowOffset: {
            width: -2,
            height: 23,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 20,
    }, 
    text:{
        alignSelf:'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 3,
    }
})