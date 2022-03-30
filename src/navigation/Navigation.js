import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupScreen } from '../screens/SignupScreen/index';
import { MyFlightsScreen } from '../screens/MyFlightsScreen/index';
import { BookingScreen } from '../screens/BookingScreen/index';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Myflights" component={MyFlightsScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
    </Stack.Navigator>
  );
}
