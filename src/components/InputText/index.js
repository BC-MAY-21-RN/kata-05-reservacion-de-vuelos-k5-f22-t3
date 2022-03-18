import { TextInput,Text } from 'react-native'
import React from 'react'


export const InputText = (props) => {

  const { value, placeholder,  style, onChangeText, label, secureTextEntry, isRequiered } = props

  return (
  <>
    <Text>
      {label}{ isRequiered&&"*"}
    </Text>
    <TextInput
        placeholder={placeholder}
        placeholderTextColor='grey'
        style={style}
        onChange={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        />
    </>
  )
};
