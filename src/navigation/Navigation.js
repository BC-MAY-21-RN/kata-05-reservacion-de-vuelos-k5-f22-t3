import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupScreen } from '../../src/screens/SignupScreen/index'
import { LoginScreen } from '../../src/screens/LoginScreen/index';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
