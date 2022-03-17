import { TextInput,Text } from 'react-native'
import React from 'react'


export const InputText = (props) => {

  const { value, placeholder,  style, onChangeText,label } = props

  return (
  <>
    <Text>
      {label}
    </Text>
    <TextInput
        placeholder={placeholder}
        placeholderTextColor='grey'
        style={style}
        onChange={onChangeText}
        value={value}
        />
    </>
  )
};
