import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

export const ButtonSecond = (props) => {
    const { onPress, text, } =props;
    return (
        <TouchableOpacity onPress = { onPress }
            style={styles.containerTouch}>
            {/* <Image style={{height: 10}} source={{uri: 'https://commons.wikimedia.org/wiki/File:Google_%22G%22_Logo.svg#/media/File:Google_%22G%22_Logo.svg'}}/> */}
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