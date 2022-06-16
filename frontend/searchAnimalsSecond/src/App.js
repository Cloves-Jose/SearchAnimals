import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'

import Home from './screens/Home'
import Pets from './screens/Pets'
import User from './screens/User'
import FormAnimal from './screens/FormAnimal'


const Tab = createBottomTabNavigator()

export default props => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size}) => {
                        let iconName

                        if(route.name === 'Home') {
                            iconName = focused ? 'home' : 'home'
                        } else if(route.name === 'Pets') {
                            iconName = focused ? 'pets' : 'pets'
                        } else if(route.name === 'Perfil') {
                            iconName = focused ? 'person' : 'person'
                        } else if(route.name === 'Registrar') {
                            iconName = focused ? 'dashboard' : 'dashboard'
                        }
                        return <Icon name={iconName} size={size} color={color}/>
                    },
                    tabBarActiveTintColor: '#4dd6d6',
                    tabBarInactiveTintColor: '#bababa'
                })}
            >
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='Pets' component={Pets}/>
                <Tab.Screen name='Perfil' component={User}/>
                <Tab.Screen name='Registrar' component={FormAnimal}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

