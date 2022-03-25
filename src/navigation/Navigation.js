import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupScreen } from '../../src/screens/SignupScreen/index';
import { MyFlightsScreen } from '../screens/MyFlightsScreen/index'

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Myflights" component={MyFlightsScreen} />
    </Stack.Navigator>
  );
}
