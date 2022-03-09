import React from 'react';
import { Button, View, Alert, StyleSheet } from 'react-native';

export const ButtonNext = () => {
    return (
        <View style={styles.container}>
            <Button
                title="Next"
                //onPress={() => Alert.alert('Simple Button pressed')}
                color="#5b6ef7"
                // disabled 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '70%',

    }
})