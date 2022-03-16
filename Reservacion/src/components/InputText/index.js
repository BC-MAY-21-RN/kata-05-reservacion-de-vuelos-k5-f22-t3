import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const InputText = (props) => {

  const { value, placeholder, placeholderTextColor, style, onChangeText } = props

  return (
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={style}
        onChange={onChangeText}
        value={value}
      />
  )
};
