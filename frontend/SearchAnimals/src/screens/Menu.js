import React from 'react-native';
import {Text, View} from 'react-native';

import Usuario from '../components/menu/usuario'
import Animais from '../components/menu/animais';

export default props => {
    return(
        <>
        <Usuario/>
        <Animais/>
        </>
    )
}