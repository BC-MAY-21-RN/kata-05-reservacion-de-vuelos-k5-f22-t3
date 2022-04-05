import { StyleSheet, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import { ContainerView } from '../../library/utils/styledGlobal';
import { TitleText } from '../BookingScreen/styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';

export const OriginScreen = ({navigation}) => {
    const [beg, setBeg] = useState("")
    
  return (
    <ContainerView>
        <Icon 
          name="angle-left" 
          size={25} 
          color="#5b6ef7"
          onPress={() => navigation.goBack()}  
          />

        <View style={styles.containerText}> 
        <TitleText>Where are you now? </TitleText>
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
          onChangeText={setBeg}
          value={beg}
        />
  
        <View style={styles.containerButton}>
          <ButtonPrimary
            text={"Next"}
            onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
                name: 'Destiny',
                params: { beg: beg },
                merge: true,
            });
            }}/>
        </View>
        <TextInput />
    </ContainerView>
  )
}


const styles = StyleSheet.create({})