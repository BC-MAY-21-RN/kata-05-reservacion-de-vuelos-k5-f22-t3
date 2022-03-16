import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export const TextTitle = (props) => {
    const {text, color, fontSize, align, fontWeight } = props;
    return (
            <Text style={{
                ...styles.text,
                color: color,
                fontSize: fontSize,
                alignSelf: align,
                fontWeight: fontWeight,
                }}
            >
                {text}
            </Text>
    )
}
