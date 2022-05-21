import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';


export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.imageUser}></View>
            <View style={styles.identification}>
                <Text style={styles.nameUser}>João</Text>
                <Text style={styles.citieName}>Garanhuns, PE</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageUser: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        marginTop: 30,
        borderRadius: 15,
    },
    identification: {
        paddingLeft: 5,
        flexDirection: 'column',
    },
    nameUser: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#696969'
    },
    citieName: {
        color: '#A9A9A9'
    }
})