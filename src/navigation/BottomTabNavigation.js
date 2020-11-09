import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../components/HomeList';
import SearchScreen from '../components/SearchList';
import FavoriteScreen from '../components/FavoriList';
import SettingsScreen from '../components/SettingsList';
import Drawer from '../drawer/Drawer';
import Header from '../../shared/Header';

const Tab = createMaterialBottomTabNavigator();

export default function botton() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#007ACC' }}
      >
        <Tab.Screen 
           name="Home"
           component={Drawer}
          
           />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}