import { Text, View } from 'react-native';
import React from 'react';
import { InfoReservation } from '../../components/InfoReservation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

export const MyFlightsScreen = ({navigation}) => {

  return (
    <View>
      <Text>Myflights</Text>
      {/* <FlatList
        renderItem={({item}) => <InfoReservation infoReservation={item} />}
      /> */}
      <InfoReservation textFrom='Serbia' textTo='Netherlands' cantPassengers='2' date='September 3, 2022'/>
      <View style={styles.containerButton}>
        <Icon 
          name="plus-circle" 
          size={30}
          color="#6170f7" 
          onPress={() => navigation.navigate('Booking')} 
        /> 
      </View>
    </View>
  )
}