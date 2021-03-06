import { View, Text, StyleSheet } from 'react-native';
import React, {  useState, useCallback, useMemo,Fragment} from "react";
import { ButtonPrimary } from '../../components/ButtonPrimary/index';
import { ContainerView } from '../../library/utils/styledGlobal';
import { Calendar } from 'react-native-calendars';

export const CalendarScreen = ({navigation, route}) => {
    const { beg, ams } = route.params;
    const INITIAL_DATE = '2020-02-02';
    const [selected, setSelected] = useState(INITIAL_DATE);
    const onDayPress = useCallback(day => {
      setSelected(day.dateString);
    }, []);
    const marked = useMemo(() => {
        return {
            [selected]: { selected: true, disableTouchEvent: true, selectedColor: '#5b6ef7', selectedTextColor: 'white'}
        };
    }, [selected]);
  return (
    <ContainerView>
        <Text>Select date</Text>
        <Calendar enableSwipeMonths current={INITIAL_DATE} style={styles.calendar} onDayPress={onDayPress} markedDates={marked} />
        <View> <ButtonPrimary text={"Next"} onPress={() => {navigation.navigate({name: 'Passengers', params: { beg : beg, ams : ams, selected: selected,}, merge: true,});}}/></View>
    </ContainerView>
  );  
};

const styles = StyleSheet.create({
    calendar: {
        marginBottom: 10,
    },
    text:{
        fontWeight: 'bold',
    }
})