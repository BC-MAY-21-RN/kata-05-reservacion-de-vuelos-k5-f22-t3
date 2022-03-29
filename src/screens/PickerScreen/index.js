import React, { useState } from 'react'
import { FlatList, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyledView, StyledSelect, StyledContainer } from './styled'

export const PickerScreen = () => {
    const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [numberPassengers, setNumberPassengers] = useState(0);
   console.log(numberPassengers);
    const renderItem = ({ item }) => (
        <StyledSelect>
            <TouchableOpacity
                onPress={() => {setNumberPassengers(item)}}
            >
               <Text>{item}</Text> 
             </TouchableOpacity>
        </StyledSelect>
        );
  
    return (
   
      <StyledContainer>
        <Icon name="caret-right" size={30} color={"#5b6ef7"}/>
            <StyledView>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </StyledView>
       <Icon name="caret-left" size={30} color={"#5b6ef7"}/>
      </StyledContainer>
  )
}
