import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 3,
    padding: 10,
  },
})