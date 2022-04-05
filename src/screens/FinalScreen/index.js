import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { InfoReservation } from '../../components/InfoReservation';
import auth from '@react-native-firebase/auth';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { createBooking } from '../../library/utils/database';

export const FinalScreen = ({navigation, route}) => {
    const { beg, ams, selected, passengers } = route.params;
  
    const handleBookingSave = async () => {
      const currentBookingId = Math.floor(100000 + Math.random() * 9000).toString();
      await createBooking(auth()._user.email, currentBookingId, beg, ams, selected, passengers);
      navigation.navigate('Myflights');
  
      ToastAndroid.show('Booking Saved', ToastAndroid.SHORT);
    };
    return (
        <View>      
            <InfoReservation 
              textFrom={beg} 
              textTo={ams} 
              cantPassengers={passengers} 
              date={selected}
            />
            <ButtonPrimary
                onPress={handleBookingSave}
                text={"Finish"}/>
        </View>
    )
}

const styles = StyleSheet.create({})