import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';

export const ButtonSecond = (props) => {
    const { onPress, text, } =props;
    return (
        <TouchableOpacity onPress = { onPress }
            style={styles.containerTouch}>
            <Image 
                style={styles.logo} 
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png',
                }}/>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerTouch:{
        justifyContent:'center',
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
        shadowColor: "#0061FF",
        shadowRadius: 8,
        elevation: 20,
        flexDirection: 'row',
    }, 
    text:{
        alignSelf:'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 3,
    },
    logo: {
      height: 20,
      width: 20,
      position: 'relative',
      top: '1.5%',
      right: '105%',  
    }
})