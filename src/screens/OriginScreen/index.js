import { View, TextInput } from 'react-native';
import React, {useState} from 'react';
import { ContainerView } from '../../library/utils/styledGlobal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { TitleText } from '../../library/utils/styledGlobal';
import { styles } from './styles';

export const OriginScreen = ({navigation}) => {
    const [beg, setBeg] = useState("")
    
  return (
    <ContainerView>
        <Icon name="angle-left" size={25} color="#5b6ef7" onPress={() => navigation.goBack()} />
        <View style={styles.containerText}> 
          <TitleText>Where are you now?</TitleText>
        </View>
        <TextInput
          style={styles.whereLine}
          placeholder="Select location"
          onChangeText={setBeg}
          value={beg}
        />  
        
        <View>
            <ButtonPrimary
                text={"Next"}
                onPress={() => {
                navigation.navigate({
                    name: 'Destiny',
                    params: { beg: beg },
                    merge: true,
                });
            }}/>
        </View>
    </ContainerView>
  )
}
