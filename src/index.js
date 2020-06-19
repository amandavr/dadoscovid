import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Routes/>
        </NavigationContainer>
    );
}
