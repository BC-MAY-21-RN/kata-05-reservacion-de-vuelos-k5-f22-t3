import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyFlightsScreen } from '../screens/MyFlightsScreen/index';
import { BookingScreen } from '../screens/BookingScreen/index';
import { SignupScreen } from '../screens/SignupScreen/index';
import { infoUser } from '../library/utils/auth';
import { CalendarScreen } from '../screens/CalendarScreen/index';
import { OriginScreen } from '../screens/OriginScreen/index';
import { DestinyScreen } from '../screens/DestinyScreen/index';
import { PassengersScreen } from '../screens/PassengersScreen/index';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const currentUser = infoUser() 
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!currentUser?<Stack.Screen name="Signup" component={SignupScreen} />:
      <>
      <Stack.Screen name="Origin" component={OriginScreen} />
      <Stack.Screen name="Destiny" component={DestinyScreen} />
      <Stack.Screen name="CalendarFlights" component={CalendarScreen} />
      <Stack.Screen name="Passengers" component={PassengersScreen} />
      <Stack.Screen name="Myflights" component={MyFlightsScreen} />
      {/*<Stack.Screen name="Booking" component={BookingScreen} />*/}
      </>}
    </Stack.Navigator>
  );
}
