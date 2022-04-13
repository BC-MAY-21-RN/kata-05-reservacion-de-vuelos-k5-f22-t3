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
    alignItems: 'center',
    color: '#b6b7ba',
    flexDirection: 'row',
  },
  containerFooter:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  textSize:{
    fontSize: 16,
  },
  lottie: {
    height: 100,
    width: 100,
  },
  incorrectText: {
    color: 'red',
    marginLeft: 90,
    marginTop: 193,
    position: 'absolute',
  },
  differentEmail: {
    color: 'red',
    marginLeft: 65,
    marginTop: 125,
    position: 'absolute',
  }
})
