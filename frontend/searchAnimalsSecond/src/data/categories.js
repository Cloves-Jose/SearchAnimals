import React from 'react'

import Dogs from '../components/animalsList/Dogs'
import Cats from '../components/animalsList/Cats'
import Birds from '../components/animalsList/Birds'
import Hamster from '../components/animalsList/Hamster'
import Rabit from '../components/animalsList/Rabit'
import Turtle from '../components/animalsList/Turtle'
import Pig from '../components/animalsList/Pig'

export default [
    {
        id: 1,
        name: 'Cachorro',
        urlAvatar: 'https://cdn-icons-png.flaticon.com/512/2527/2527324.png',
        component: <Dogs/>
    },
    {
        id: 2,
        name: 'Gato',
        urlAvatar: 'https://cdn-icons-png.flaticon.com/512/2325/2325436.png',
        component: <Cats/>
    },
    {
        id: 3,
        name: 'Pássaro',
        urlAvatar: 'https://cdn-icons-png.flaticon.com/512/3418/3418567.png',
        component: <Birds/>
    },
    {
        id: 4,
        name: 'Hamster',
        urlAvatar: 'https://cdn-icons.flaticon.com/png/512/1871/premium/1871753.png?token=exp=1655402672~hmac=ab0b35e83122adcef5b9a934cc087f6b',
        component: <Hamster/>
    },
    {
        id: 5,
        name: 'Coelho',
        urlAvatar: 'https://cdn-icons-png.flaticon.com/512/112/112303.png',
        component: <Rabit/>
    },
    {
        id: 6,
        name: 'Tartaruga',
        urlAvatar: 'https://cdn-icons-png.flaticon.com/512/3077/3077331.png',
        component: <Turtle/>
    },
    {
        id: 7,
        name: 'Porco',
        urlAvatar: 'https://cdn-icons.flaticon.com/png/512/2792/premium/2792516.png?token=exp=1655405790~hmac=57a959c18d64cc1d539da3b64715f3cd',
        component: <Pig/>
    }
]