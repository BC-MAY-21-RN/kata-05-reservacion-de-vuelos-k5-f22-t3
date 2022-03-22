import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    infoReservation:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    destination: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: 'black',
      fontSize: 27,
    },
    fromTo: {
      color: 'gray',
      fontSize: 17,
    },
    line: {
      flexDirection: 'column',
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      marginTop: 4,
      marginBottom: 6,
    },
    otherInfo: {
      color: 'black',
      fontSize: 17,
      fontWeight: 'bold',
    }
})
