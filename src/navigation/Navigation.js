import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../../src/screens/HomeScreeen/index';
import { BookingScreen } from '../../src/screens/BookingScreen/index';
import { SignupScreen } from '../../src/screens/SignupScreen/index'
import { MyFlightsScreen } from '../../src/screens/MyFlightsScreen/index';
import { LoginScreen } from '../../src/screens/LoginScreen/index';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Myflight" component={MyFlightsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
