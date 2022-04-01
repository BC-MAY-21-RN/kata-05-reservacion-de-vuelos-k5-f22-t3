import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyFlightsScreen } from '../screens/MyFlightsScreen/index';
import { BookingScreen } from '../screens/BookingScreen/index';
import { SignupScreen } from '../screens/SignupScreen/index';
import { infoUser } from '../library/utils/auth';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const currentUser = infoUser() 
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!currentUser?<Stack.Screen name="Signup" component={SignupScreen} />:
      <>
      <Stack.Screen name="Myflights" component={MyFlightsScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      </>}
    </Stack.Navigator>
  );
}
