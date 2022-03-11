import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreeen/index';
import { BookingScreen } from '../screens/BookingScreen/index';
import { SignupScreen } from '../screens/SignupScreen/index'
import { MyFlightsScreen } from '../screens/MyFlightsScreen/index';


const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Myflight" component={MyFlightsScreen} />
    </Stack.Navigator>
  );
}
