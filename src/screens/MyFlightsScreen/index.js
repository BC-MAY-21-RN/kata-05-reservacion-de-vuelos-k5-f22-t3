import { Text, View, FlatList } from 'react-native';
import React from 'react';
import { InfoReservation } from '../../components/InfoReservation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

export const MyFlightsScreen = ({navigation}) => {
  return (
    <View>
      <Text>Myflights</Text>
      <FlatList
        renderItem={({item}) => <InfoReservation infoReservation={item} />}
      />
      <Icon name="plus-circle" color="#6170f7" size={30}/>
    </View>
  )
}