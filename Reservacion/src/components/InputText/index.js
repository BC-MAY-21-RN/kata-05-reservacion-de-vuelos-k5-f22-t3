import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

export const InputText = (props) => {

  const { text } = props
  return (
      <TextInput
        placeholder={text}
        placeholderTextColor={'grey'}
        style={styles.input}
      />
  )
};
