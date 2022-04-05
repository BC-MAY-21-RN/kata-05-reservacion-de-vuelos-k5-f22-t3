import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';

export const PassengersScreen = ({navegation}) => {
    const DATA = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [numberPassengers, setNumberPassengers] = useState(1);

    const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => {setNumberPassengers(item)}}
            >
                
                {numberPassengers===item?
                 <View style={styles.container}>
                     <Icon name="caret-right" size={30} color={"#5b6ef7"}
                     style={{paddingLeft:100}}/>
                     <Text style={styles.numberSelect}>{item}</Text>
                     <Icon name="caret-left" size={30} color={"#5b6ef7"}
                     style={{paddingRight:100}}/>
                 </View>
                 :
                 <Text style={styles.numberDisable}>{item}</Text>
                 }
             </TouchableOpacity>
                 
        );
  
    return (
        <View style={styles.containerPiker}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            initialNumToRender={3}
            />
        </View>
  )
}