import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {HomeScreen} from '../screens/HomeScreen';
import { BookingScreen } from '../screens/BookingScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Booking" component={BookingScreen} />
    </Stack.Navigator>
  );
};