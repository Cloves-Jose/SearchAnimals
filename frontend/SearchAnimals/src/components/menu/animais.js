import React from 'react';
import {Text, View, StyleSheet, FlatList, Pressable, Dimensions} from 'react-native';

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textAnimal}>Vamos encontrar o seu animalzinho?</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
                data = {[
                    {key: 1, title: 'Cachorro'},
                    {key: 2, title: 'Gato'},
                    {key: 3, title: 'Coelho'},
                    {key: 4, title: 'Hamster'},
                    {key: 5, title: 'Chinchila'},
                    {key: 6, title: 'Passaro'}
                ]}
                renderItem={({item}) => <Pressable key={item.key}>
                    <View style={styles.subContainer} key={item.key}>
                        <View style={styles.image}></View>
                        <Text style={styles.subTitle}>{item.title}</Text>
                    </View>
                </Pressable>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
    },
    textAnimal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#808080',
        marginBottom: 15,
        marginLeft: 15
    },
    subContainer: {
        margin: 10,
    },
    image: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width * 0.18,
        height: Dimensions.get('window').width * 0.18,
        borderRadius: 25
    },
    subTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#808080'
    }
})