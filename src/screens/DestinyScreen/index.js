import { StyleSheet, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import { ContainerView } from '../../library/utils/styledGlobal';
import { TitleText } from '../BookingScreen/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';

export const DestinyScreen = ({navigation, route}) => {
    const { beg } = route.params;
    const [ams, setAms] = useState("")
    
    return (
      <ContainerView>
          <Icon 
            name="angle-left" 
            size={25} 
            color="#5b6ef7"
            onPress={() => navigation.goBack()}  
            />
  
          <View style={styles.containerText}> 
          <TitleText>Where will you be flying to?</TitleText>
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
          placeholder="Select location"
          onChangeText={setAms}
          value={ams}
        />
    
          <View style={styles.containerButton}>
            <ButtonPrimary
              text={"Next"}
              onPress={() => {
              // Pass and merge params back to home screen
              navigation.navigate({
                name: 'CalendarFlights',
                params: { ams: ams },
                merge: true,
              });
              }}/>
          </View>
          <TextInput />
      </ContainerView>
    )
  }

const styles = StyleSheet.create({})