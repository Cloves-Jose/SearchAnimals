import React from 'react';
import {View, Text, StyleSheet, FlatList, Pressable, Dimensions} from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Em busca dos donos</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
                data = {[
                    {key: 1, title: 'Juquinha', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Pedro'},
                    {key: 2, title: 'Bola', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Thiago'},
                    {key: 3, title: 'Marley', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'José'},
                    {key: 4, title: 'Baleia', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Maria'},
                    {key: 5, title: 'Joãozinho', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Márcio'},
                    {key: 6, title: 'Trator', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Marcus'},
                    {key: 7, title: 'Zequinha', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Bion'},
                    {key: 8, title: 'Simba', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Chico'},
                    {key: 9, title: 'Mufaza', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Beth'},
                    {key: 10, title: 'Nala', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Victor'},
                    {key: 11, title: 'Moglyn', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Lucas'},
                    {key: 12, title: 'Caramelo', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Gilson'},
                    {key: 13, title: 'Zezinho', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Rafael'},
                    {key: 14, title: 'Negão', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Jackson'},
                    {key: 15, title: 'Jaspion', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Everton'},
                    {key: 16, title: 'Jiraia', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Raul'},
                    {key: 17, title: 'Queijão', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Danillo'},
                    {key: 18, title: 'Espeto', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Cláudia'},
                    {key: 19, title: 'Milho', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Célia'},
                    {key: 20, title: 'Feioso', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Cloves'},
                    {key: 21, title: 'Amarelo', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Luan'},
                    {key: 22, title: 'China', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Caio'},
                    {key: 23, title: 'Astolfo', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Beatriz'},
                    {key: 24, title: 'Reginaldo', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Izamara'},
                    {key: 25, title: 'Brigador', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'João'},
                    {key: 26, title: 'Gato', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Eberson'},
                    {key: 27, title: 'Fred', sex: 'Male', age: '2 Years Old', characteristics: 'Friendly, Active, Playful', owner: 'Thiago'},
                ]}
                renderItem={({item}) => <Pressable key={item.key}>
                    <View style={styles.subContainer} key={item.key}>
                        <View style={styles.image}></View>
                        <View>
                            <View style={styles.owner}>
                                <Text style={styles.subTitle}>{item.title}</Text>
                                <Text style={styles.subOwner}>{item.owner}</Text>
                            </View>
                            <View style={styles.information}>
                                <Text style={styles.age}>{item.age}</Text>
                                <Text style={styles.characteristics}>{item.characteristics}</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    title: {
        fontSize: 15,
        color: '#808080',
        marginBottom: 10,
        marginLeft: 15,
        fontWeight: '300'
    },
    subContainer: {
        backgroundColor: '#00CED1',
        margin: 5,
        marginRight: 5,
        height: Dimensions.get('window').width * 0.30,
        borderRadius: 15,
        flexDirection: 'row'
    },
    image: {
        backgroundColor: 'black',
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.30,
        borderRadius: 15
    },
    owner: {
        marginLeft: 5,
        marginTop: 5
    },
    subTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    subOwner: {
        fontWeight: 'bold',
        color: 'white'
    },
    information: {
        paddingTop: 15,
        paddingLeft: 5
    },
    age: {
        color: 'white',
        fontSize: 15,
        fontWeight: '300'
    },
    characteristics: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
    }
})