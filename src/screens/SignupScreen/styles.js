import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      height: '100%',
      padding: 15,
    },
    content:{
      pasition: 'absolute',
      top:'5%',
    },
    input:{
        borderWidth: 1,
        padding: 10,
    },
    inputSelected:{
      borderColor:'#5b6ef7',
      borderWidth: 1,
      padding: 10,
  },
    containerCheck:{
        flexDirection: 'row',
        alignItems: 'center',
        color: '#b6b7ba',
    },
    containerFooter:{
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textSize:{
        fontSize: 16,
    }
})
