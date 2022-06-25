import React from "react";
import { 
    Text, 
    View, 
    FlatList, 
    StyleSheet, 
    TouchableWithoutFeedbackBase,
    Image
 } from 'react-native'

import listAnimals from '../data/listAnimals'

export default props => {
    return(
            <FlatList
                keyExtractor={animal => animal.id.toString()}
                data={listAnimals}
                renderItem={({item}) => 
                <View style={styles.imgContainer}>
                    <View style={styles.informations}>
                        <View>
                            <Image
                                style={styles.avatar}
                                source={{uri: item.urlAvatar}}
                            />
                        </View>
                        <View style={styles.textInformations}>
                            <View style={{flexDirection: 'row', alignItems: "center"}}>
                                <View style={{margin: 5}}>
                                    <Text style={styles.nameAnimal}>{item.name}</Text>
                                </View>
                                <Text style={styles.sexAnimal}>| Sex: {item.sex}</Text>
                            </View>
                            <Text style={styles.ageAnimal}>{item.age}</Text>
                        </View>
                    </View>
                </View>
            }/>
        // <View>
        // </View>
    )
}

const styles = StyleSheet.create({
    imgContainer: {
        margin: 10,
        justifyContent: 'center',
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 15,
    },
    informations: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4dd6d6',
        borderRadius: 15
    },
    textInformations: {
        margin: 5
    },
    nameAnimal: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    sexAnimal: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    ageAnimal: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 5
    }
})