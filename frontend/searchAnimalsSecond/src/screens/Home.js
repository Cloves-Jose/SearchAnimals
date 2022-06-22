import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    FlatList, 
    Image 
} from 'react-native'

import ListAnimals from '../components/ListAnimals'

import categories from '../data/categories'

export default class Home extends Component {
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.userContainer}>
                    <View style={styles.user}>

                    </View>
                    <View style={styles.infoUser}>
                        <Text style={styles.nameUser}>Kristen</Text>
                        <Text style={styles.nameUser}>Florida, US</Text>
                    </View>
                </View>
                <View style={styles.subTitle}>
                    <Text style={styles.textSubtitle}>Escolha seu pet favorito</Text>
                </View>
                <View>
                    <FlatList
                        data={[...categories]}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => 
                        <View>
                            <TouchableWithoutFeedback>
                                <View style={styles.imgContainer}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{uri: item.urlAvatar}}
                                    />
                                </View> 
                            </TouchableWithoutFeedback>
                                <View style={styles.footerList}>
                                    <Text style={styles.titleFooterList}>{item.name}</Text>
                                </View>   
                        </View>}
                    />
                </View>
                <View style={styles.awaiting}>
                    <Text style={styles.awaitingHome}>Esperando uma casa</Text>
                </View>
                <View style={styles.listAnimals}>
                    <ListAnimals/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        borderRadius: 15,
        marginLeft: 15,
    },
    nameUser: {
        color: "#b5b5b5"
    },
    infoUser: {
        marginLeft: 5
    },
    subTitle: {
        marginTop: 15,
        marginLeft: 10
    },
    textSubtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#aaaaaa'
    },
    imgContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 25
    },
    tinyLogo: {
        width: 30,
        height: 30
    },
    footerList: {
        alignItems: 'center'
    },
    titleFooterList: {
        color: '#aaaaaa',
        fontSize: 15,
        fontWeight: 'bold'
    },
    awaiting: {
        marginTop: 15,
    },
    awaitingHome: {
        color: '#aaaaaa',
        fontSize: 18,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    listAnimals: {
        
    }
})

