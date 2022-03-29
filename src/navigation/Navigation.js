import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupScreen } from '../../src/screens/SignupScreen/index'
import { PickerScreen } from '../screens/PickerScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Picker" component={PickerScreen} /> 
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
