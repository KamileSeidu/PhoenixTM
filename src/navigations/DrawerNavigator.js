import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStack} from './StackNavigators'
import { AntDesign } from '@expo/vector-icons';
import {colors} from '../global/styles';


const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name = 'HomeStack'
                component = {HomeStack}
                options = {{
                    title: 'Home',
                    drawerIcon: ({focussed,size}) => 
                    <AntDesign 
                        name="home" 
                        size={24} 
                        color= {focussed ? '#7cc' : colors.grey2} 
                        size = {size}
                        />,
                        
              headerShown : false
              
                }}

            />
        </Drawer.Navigator>
    )
}