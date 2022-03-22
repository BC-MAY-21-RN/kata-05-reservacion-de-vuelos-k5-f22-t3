import { Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { styles } from './styles'

export const InfoReservation = ({ textFrom, textTo, cantPassengers, date }) => {

  return (
  <>
    <View style={styles.infoReservation}>
      <Text style={styles.destination}>beg</Text>
      <Icon name="plane" size={20} color="#7e8af8" />
      <Text style={styles.destination}>ams</Text>
    </View>
    <View style={styles.infoReservation}>
      <Text style={styles.fromTo}>{textFrom}</Text>
      <Text style={styles.fromTo}>{textTo}</Text>
    </View>
    <View style={[styles.line, textTo ? { width: '100%' } : { width: '50%' }]} />
    <View style={styles.infoReservation}>
      <Text style={styles.otherInfo}>{date}</Text>
      <Text style={styles.otherInfo}>{cantPassengers} passengers</Text>
    </View>
  </>
  )
}
