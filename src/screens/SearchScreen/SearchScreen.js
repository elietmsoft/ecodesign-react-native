import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';

export default class SearchScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.greatTitle}>Page de recherche</Text>
            </View>
        )
    }
}