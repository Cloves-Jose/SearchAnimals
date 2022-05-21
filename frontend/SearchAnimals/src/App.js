import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Menu from './screens/Menu'

export default props => {
    return(
        <SafeAreaView style={styles.container}>
            <Menu/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})