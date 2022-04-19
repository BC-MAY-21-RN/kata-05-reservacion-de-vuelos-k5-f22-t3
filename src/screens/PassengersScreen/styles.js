
import styled from 'styled-components/native';

export const StyledView = styled.View`
  flex-direction: row;
  height: 120;
  width: 100%;
  justify-content: center;
`
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerPiker:{
    flexDirection: 'row',
    height: 120,
    width: '100%',
  },
  container:{
    borderBottomWidth: 0.2,
    borderColor: '#dbdbdb',
    borderTopWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  numberSelect: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  numberDisable: {
    color: 'black',
    fontSize: 25,
    opacity: 0.5,
    textAlign: 'center',
  },
  text:{
    fontWeight: 'bold',
  }
});