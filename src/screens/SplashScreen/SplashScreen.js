import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles';

export default class SplashScreen extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        setTimeout(()=>{
            this.props.navigation.navigate("Home")
        },5000)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.greatTitle}>Zoomeco</Text>
                <Text style={styles.subTitle}>Référence de l'actualité</Text>
                <Text style={styles.subTitle}>Economique de la RDCongo</Text>
            </View>
        )
    }
}