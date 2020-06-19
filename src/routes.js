import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"

// import Main from './pages/main';

import Home from './pages/Home';
import Case from './pages/Case';



const Stack = createStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator screenOptions={ { headerStyle: { backgroundColor: '#7159c1' }, headerTintColor: '#fff' } } >
            <Stack.Screen name="Covid-19 no Brasil" component={ Home } />
            <Stack.Screen name="Case" component={ Case } />
        </Stack.Navigator>
    );
  }
