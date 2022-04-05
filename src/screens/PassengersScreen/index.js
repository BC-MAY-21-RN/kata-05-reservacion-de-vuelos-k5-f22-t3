import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ContainerView } from '../../library/utils/styledGlobal';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { styles } from './styles';

export const PassengersScreen = ({navigation, route}) => {
    const { beg, ams, selected } = route.params;
    const DATA = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [passengers, setPassengers] = useState(1);

    const renderItem = ({ item }) => (
            <TouchableOpacity
                onPress={() => {setPassengers(item)}}
            >
                
                {passengers===item?
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
        <ContainerView>
            <Text style={styles}>How many passengers</Text>
            <View style={styles.containerPiker}>
                <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                initialNumToRender={3}
                />
            </View>
            <View style={styles.containerButton}>
                <ButtonPrimary
                    text={"Next"}
                    onPress={() => {
                    // Pass and merge params back to home screen
                    navigation.navigate({
                        name: 'Final',
                        params: { 
                            beg : beg,
                            ams : ams,
                            selected : selected,
                            passengers : passengers 
                        },
                        merge: true,
                    });
                }}/>
            </View>
        </ContainerView>
  )
}