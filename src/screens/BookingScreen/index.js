import React, {useState, useEffect} from 'react';
import { View, TextInput, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { createBooking } from '../../library/utils/database';
import auth from '@react-native-firebase/auth';

import { ContainerView } from '../../library/utils/styledGlobal';
import { TitleText } from './styled'
import { styles } from './styles';
import { FlightsCalendar } from '../../components/FlightsCalendar/index';

export const BookingScreen = ({navigation}) => {
  const [beg, setBeg] = useState("")
  const [ams, setAms] = useState("")
  const [passengers, setPassengers] = useState(0)
  
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
    dateComplete: '',
  });

  const {dateComplete} = date;

  // codigo repetido en App
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  const onAuthStateChanged = async user => {
    await setCurrentUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return null;
  }
  
  const userEmail=currentUser.email
  
  const handleBookingSave = async () => {
    console.log(userEmail, beg, ams, date, passengers)

    const currentBookingId = Math.floor(100000 + Math.random() * 9000).toString();
    await createBooking(userEmail, currentBookingId, beg, ams, date, passengers);
    navigation.navigate('Myflights');

    setBeg('')
    setAms('')
    setDate('')
    setPassengers('')
    ToastAndroid.show('Booking Saved', ToastAndroid.SHORT);
  };

  return (
    <ContainerView>
        <Icon 
          name="angle-left" 
          size={25} 
          color="#5b6ef7"
          onPress={() => navigation.goBack()}  
          />

        <View style={styles.containerText}> 
        <TitleText>Where are you now? </TitleText>
        </View>

        <TextInput
          style={{
            padding: 10,
            borderColor: 'gray',
            borderBottomWidth: 1,
            width: '100%',
            borderRadius: 5,
            marginTop: 10,
          }}
          placeholder="Selct location"
          onChangeText={setBeg}
          value={beg}
        />
         <TextInput
          style={{
            padding: 10,
            borderColor: 'gray',
            borderBottomWidth: 1,
            width: '100%',
            borderRadius: 5,
            marginTop: 10,
          }}
          placeholder="Selct location"
          onChangeText={setAms}
          value={ams}
        />
        
        <FlightsCalendar date={date} setDate={setDate} />


         <TextInput
          style={{
            padding: 10,
            borderColor: 'gray',
            borderBottomWidth: 1,
            width: '100%',
            borderRadius: 5,
            marginTop: 10,
          }}
          placeholder="Selct date"
          onChangeText={setDate}
          value={date}
        />
         <TextInput
          style={{
            padding: 10,
            borderColor: 'gray',
            borderBottomWidth: 1,
            width: '100%',
            borderRadius: 5,
            marginTop: 10,
          }}
          placeholder="Passengers"
          onChangeText={setPassengers}
          value={passengers}
        />
  
        <View style={styles.containerButton}>
          <ButtonPrimary
            onPress={handleBookingSave}
            text={"Next"}/>
        </View>
        <TextInput />
    </ContainerView>
  );
};

