import React from 'react';
import { Text } from 'react-native'
import { styles } from './styles'

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

