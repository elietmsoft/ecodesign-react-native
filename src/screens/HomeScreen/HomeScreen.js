import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../../screens/SearchScreen';
import FavoriteScreen from '../../screens/FavoriScreen';
import ParamScreen from '../../screens/ParamScreen';
import Drawer from '../../navigation/DrawerNavigation';

const Tab = createMaterialBottomTabNavigator();

export default function botton() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor='#999'
        inactiveColor='#dadada'
            barStyle={{
                backgroundColor:'#fafafa',
                borderRadius:20,
            }}
            tabBarOptions={{
                activeTintColor:'#999',
                inactiveTintColor:'#dadada',
                labelStyle:{
                    fontSize:14,
                    fontStyle:'normal'
                },
            }}
      >
        <Tab.Screen  name="Home" component={Drawer}
           options={{
            tabBarIcon:({color})=>(
                <MaterialCommunityIcons name='home' color={color} size={30} />
            )
        }}/>
        <Tab.Screen name="Search" component={SearchScreen}
        options={{
          tabBarIcon:({color})=>(
              <MaterialCommunityIcons name='home' color={color} size={30} />
          )
      }}
         />
        <Tab.Screen name="Favori" component={FavoriteScreen} 
        options={{
          tabBarIcon:({color})=>(
              <MaterialCommunityIcons name='home' color={color} size={30} />
          )
        }} />
        <Tab.Screen name="Param" component={ParamScreen}
        options={{
          tabBarIcon:({color})=>(
              <MaterialCommunityIcons name='home' color={color} size={30} />
          )
      }} />
      </Tab.Navigator>
  );
}