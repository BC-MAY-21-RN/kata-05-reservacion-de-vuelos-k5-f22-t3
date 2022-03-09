import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const TextSecond = (props) => {
    const {text, color, fontSize, align } = props;
    return (
            <Text style={{
                ...styles.text,
                color: color,
                fontSize: fontSize,
                alignSelf: align,
                }}
            >
                {text}
            </Text>
    )
}

const styles = StyleSheet.create({
    text:{
        marginVertical: 4,
        marginHorizontal: 0
    }
})