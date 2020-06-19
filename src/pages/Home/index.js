import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import api from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Home extends Component {

    state = {
        data: []
    };

    componentDidMount() {
        this.loadCases();
    }

    loadCases = async () => {
        const response = await api.get("/v1");

        const { data } = response.data;

        this.setState({ data });

        console.log(data);
    };

    renderItem = ({ item }) => (
        <View style={ styles.itemContainer } >
            <View style={ styles.itemCol1 } >
                <Text style={ styles.itemState } >{item.state}</Text>
                <Text style={ styles.itemCases }>{item.cases}</Text>
            </View>
            <View style={ styles.itemCol2 } >
                <TouchableOpacity 
                    style={ styles.itemButton } 

                    onPress={() => { 
                        this.props.navigation.navigate("Case", { case: item }); 
                    }}
                    >
                    <Text styel={styles.itemButtonText}>Ver Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


    render () {
        return (
            <View>
                {/* <Text> Covid-19 no Brasil </Text> */}
                <FlatList
                data={this.state.data}
                keyExtractor={item => item.uf}
                renderItem={this.renderItem}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        borderColor: '#DDD',
        backgroundColor: '#FFF',
        borderRadius: 5,
        margin: 10,
        padding:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemState: {
        fontSize: 16,
        color: '#616161',
    },
    itemCases: {
        fontSize: 30,
        fontWeight: '600',
        color: '#7159c1',
    },
    itemButton:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'#7159c1',
        padding:10,
        alignItems: 'center',
    },
    itemButtonText: {
        
    },
    itemCol1: {
        flex: 1
    }
});
