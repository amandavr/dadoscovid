import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Case = () => {
    const { params } = useRoute();


    return (
        <ScrollView contentContainerStyle = {styles.container} >

            <Text style={ styles.titlePage }>{params.case.state}</Text>
            
            <View style={ styles.containerText }>
                <Text style={ styles.textCases }>{params.case.refuses}</Text>
                <Text style={ styles.title }>Casos curados</Text>
            </View>

            <View style={ styles.containerText }>
                <Text style={ styles.textCases }>{params.case.suspects}</Text>
                <Text style={ styles.title }>Casos suspeitos</Text>
            </View>

            <View style={ styles.containerText }>
                <Text style={ styles.textCases }>{params.case.cases}</Text>
                <Text style={ styles.title }>Casos confirmados</Text>
            </View>

            <View style={ styles.containerText }>
                <Text style={ styles.textCases }>{params.case.deaths}</Text>
                <Text style={ styles.title }>Mortes confirmadas</Text>
            </View>
            
        </ScrollView> 
    )
 }

 export default Case;


// Case.navigationOptions = ({ navigation }) => ({
//     title: navigation.state.params.case.state
    
// })
// Case.navigationOptions = screenProps => ({
//     title: screenProps.navigation.getParam("yourParam")
//   });

// props.navigation.navigate("Case", {
//     state: params.case.state,
//   });

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 50
    },
    titlePage: {
        fontSize: 30,
        fontWeight: '600',
        color: '#666',
        marginBottom:30,

    },
    containerText: {
        alignItems: 'center',
        marginBottom:30,
    },
    title: {
        fontSize: 16,
        color: '#616161',
    },
    textCases: {
        fontSize: 40,
        fontWeight: '600',
        color: '#7159c1',
    }
})

