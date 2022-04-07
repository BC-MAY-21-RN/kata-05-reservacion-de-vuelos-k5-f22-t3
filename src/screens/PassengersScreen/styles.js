
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#dbdbdb',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.2,
  },
  numberSelect: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
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