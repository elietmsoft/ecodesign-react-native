import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/HomeList';
import EntrepriseScreen from '../components/EntrepriseList';

const Drawer = createDrawerNavigator();

const DrawerNav =()=>{
    return(
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Entreprise" component={EntrepriseScreen} />
          </Drawer.Navigator>
       
    )
}

export default DrawerNav;

