import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {styles} from "./styles"

export const ButtonPrimary = (props) => {
    const { onPress, text, disabled } =props;
 

    return (
            <TouchableOpacity onPress={onPress}
            disabled={disabled}
                style={disabled ? styles.containerTouch : styles.containerTouchD}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
    
    )
}