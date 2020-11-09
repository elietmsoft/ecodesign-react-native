import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';

export default class NotifyScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.greatTitle}>Page de Notification</Text>
            </View>
        )
    }
}