import React, { useState, useEffect }from 'react';
import { TouchableOpacity, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { infoUser, signOut } from '../../library/utils/auth';
import { InfoReservation } from '../../components/InfoReservation';
import { getBookings } from '../../library/utils/database';
import auth from '@react-native-firebase/auth';
import { styles } from './styles';
import { ContainerView } from '../../library/utils/styledGlobal';
import { HeaderView, TitleText } from './styled'

export const MyFlightsScreen = ({navigation}) => {
  const [allBookings, setAllBookings] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  //auth()._user.uid
  console.log(auth()._user.email)
  
  const getAllBookings = async () => {
    setRefreshing(true);
    
    const bookings = await getBookings('andres@gmail.com');
    // Transform data
    let tempBookings = [];
    await bookings.docs.forEach(async booking => {
      await tempBookings.push({id: booking.id, ...booking.data()});
    });
    await setAllBookings([...tempBookings]);

    setRefreshing(false);
  };

  useEffect(() => {
    getAllBookings();
  }, []);
  return (
    <ContainerView>
      <HeaderView>
        <TitleText>My flights</TitleText>
        <Icon name="power-off" 
            size={25}
            color="#6170f7" 
            onPress={signOut}/>
      </HeaderView>

      <FlatList
        data={allBookings}
        onRefresh={getAllBookings}
        refreshing={refreshing}
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical: 20,
        }}
        renderItem={({item: booking}) => (
          <View
            style={{
              borderColor: 'black',
              borderBottomWidth: 1,
              paddingVertical: 15,
            }}>
            <InfoReservation 
              textFrom={booking.beg} 
              textTo={booking.ams} 
              cantPassengers={booking.passengers} 
              date={booking.date}
            />
          </View>
          )}
        />
         <TouchableOpacity style={styles.containerButton}>
        <Icon 
          name="plus" 
          size={30}
          color="white" 
          onPress={() => navigation.navigate('Booking')} 
        /> 
      </TouchableOpacity>
    </ContainerView>
  )
}