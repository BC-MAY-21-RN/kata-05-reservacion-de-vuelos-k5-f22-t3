import { Calendar } from "react-native-calendars";
import React, {  useState, useCallback, useMemo,Fragment} from "react";
import {StyleSheet, Text } from 'react-native';


export const FlightsCalendar = () => {

    const INITIAL_DATE = '2020-02-02';
    const [selected, setSelected] = useState(INITIAL_DATE);

    const onDayPress = useCallback(day => {
        setSelected(day.dateString);
    }, []);
    const marked = useMemo(() => {
        return {
            [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#5b6ef7',
                selectedTextColor: 'white'
            }
        };
    }, [selected]);
    return (
        <Fragment>
            <Text style={styles}>Select date</Text>
            <Calendar
                enableSwipeMonths
                current={INITIAL_DATE}
                style={styles.calendar}
                onDayPress={onDayPress}
                markedDates={marked}
            />
        </Fragment>)
}





const styles = StyleSheet.create({
    
    calendar: {
        marginBottom: 10
        

    },

    text:{
        fontWeight: 'bold',
        

    }
})