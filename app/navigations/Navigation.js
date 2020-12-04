import React from 'react'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

import Calendar from './Calendar'
import Roster from './Roster'
import Messages from './Messages'
import Settings from './Settings'

const Tab = createBottomTabNavigator()
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(0,0,0)',
    },
}

export default function Navigation() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                initialRouteName='calendar'
                tabBarOptions={{
                    inactiveTintColor: '#646464',
                    activeTintColor: '#00a680',
                }}
                
                screenOptions={({route})=>({
                    tabBarIcon: ({color})=>screenOptions(route, color),
                })}
            >
                <Tab.Screen 
                    name='calendar'
                    component={Calendar}
                    options={{title:'Calendar'}}
                />
                <Tab.Screen 
                    name='roster'
                    component={Roster}
                    options={{title:'Roster'}}
                />
                <Tab.Screen 
                    name='messages'
                    component={Messages}
                    options={{title:'Messages'}}
                />
                <Tab.Screen 
                    name='settings'
                    component={Settings}
                    options={{title:'Settings'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName
    switch (route.name) {
        case 'calendar':
            iconName = 'mdiCalendarMonth'
            break;
        case 'roster':
            iconName = 'mdiAccountMultiple'
            break;
        case 'messages':
            iconName = 'mdiEmail'
            break;
        case 'settings':
            iconName = 'mdiCog'
            break;
        default:
            break;
    }

    return (
        <Icon 
            type='material-community'
            name={iconName}
            size={22}
            color={color}
        />
    )
}