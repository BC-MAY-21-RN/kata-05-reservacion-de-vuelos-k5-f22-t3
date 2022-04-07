import { StyleSheet, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import { ContainerView } from '../../library/utils/styledGlobal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { TitleText  } from '../../library/utils/styledGlobal';
import { styles } from '../OriginScreen/styles';

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
        style={styles.whereLine}
        placeholder="Select location"
            onChangeText={setAms}
            value={ams}
          />
      <View style={styles.containerButton}>
        <ButtonPrimary
            text={"Next"}
            onPress={() => {
            navigation.navigate({
            name: 'CalendarFlights',
            params: { beg : beg, ams: ams },
            merge: true,
          });
          }}/>
        </View>
    </ContainerView>
    )
  }