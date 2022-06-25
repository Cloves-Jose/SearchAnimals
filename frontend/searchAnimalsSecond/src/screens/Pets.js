import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

export default class Pets extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.petImage}>
                        <Text>Imagem</Text>
                    </View>
                </View>
                <View style={styles.formPet}>
                    <TextInput placeholder='Digite o nome do seu pet' style={styles.inputText}/>
                    <TextInput placeholder='Digite a idade do seu pet' style={styles.inputText}/>
                    <TextInput placeholder='Digite o sexo do seu pet' style={styles.inputText}/>
                    <Text style={{justifyContent: 'flex-start', fontSize: 20}}>Selecione a categoria do pet</Text>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        placeholder='null'
                        items={[
                            {label: 'Cachorro', value: 'cachorro'},
                            {label: 'Gato', value: 'gato'},
                            {label: 'Pássaro', value: 'passaro'},
                            {label: 'Hamster', value: 'hamster'},
                            {label: 'Coelho', value: 'coelho'},
                            {label: 'Tartaruga', value: 'tartaruga'},
                            {label: 'Porco', value: 'porco'}
                        ]}
                    />
                </View>
                <Button
                    title='Gerar QR Code'
                    style={{with: '50%'}}
                />
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        alignItems: 'center',
    },
    petImage: {
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15
    },
    formPet: {
        alignItems: 'center',
    },
    inputText: {
        borderColor: '#333',
        borderWidth: 1,
        width: '97%',
        borderRadius: 15,
        marginBottom: 10
    }
})