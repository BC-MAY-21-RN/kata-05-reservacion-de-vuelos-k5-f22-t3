import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerButton:{ 
        backgroundColor: "#6170f7",
        padding: 15,
        paddingHorizontal: 17,
        borderRadius: 45,
        position: 'absolute', 
        bottom:'5%',
        right:'50%',
    },
    text:{
        alignSelf:'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 3,
    },
    whereLine:{
        padding: 10,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
        borderRadius: 5,
        marginTop: 10,
    }
})