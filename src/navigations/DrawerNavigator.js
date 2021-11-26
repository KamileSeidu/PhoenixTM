import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeStack} from './StackNavigators'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Payment from '../screens/Payment'
import ContactUs from '../screens/ContactUs'
import Promotion from '../screens/Promotion'
import Help from '../screens/Help'
import AboutUs from '../screens/AboutUs'
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
            <Drawer.Screen 
                name = 'Payment'
                component = {Payment}
                options = {{
                    title: 'Payment',
                    drawerIcon: ({focussed,size}) => 
                    <MaterialIcons 
                        name="payment" 
                        size={24} 
                        color= {focussed ? '#7cc' : colors.grey2} 
                        size = {size}
                        />,
                        
              headerShown : false
              
                }}

            />
            <Drawer.Screen 
                name = 'Promotion'
                component = {Promotion}
                options = {{
                    title: 'Promotions',
                    drawerIcon: ({focussed,size}) => 
                    <AntDesign 
                        name="gift" 
                        size={24} 
                        color= {focussed ? '#7cc' : colors.grey2} 
                        size = {size}
                        />,
                        
              headerShown : false
              
                }}

            />
            <Drawer.Screen 
                name = 'ContactUs'
                component = {ContactUs}
                options = {{
                    title: 'Contact Us',
                    drawerIcon: ({focussed,size}) => 
                    <MaterialIcons  
                        name="contact-mail" 
                        size={24} 
                        color= {focussed ? '#7cc' : colors.grey2} 
                        size = {size}
                        />,
                        
              headerShown : false
              
                }}

            />
            <Drawer.Screen 
                name = 'AboutUs'
                component = {AboutUs}
                options = {{
                    title: 'About',
                    drawerIcon: ({focussed,size}) => 
                    <Ionicons  
                        name="md-people-outline" 
                        size={24} 
                        color= {focussed ? '#7cc' : colors.grey2} 
                        size = {size}
                        />,
                        
              headerShown : false
              
                }}

            />
            <Drawer.Screen 
                name = 'Help'
                component = {Help}
                options = {{
                    title: 'Help',
                    drawerIcon: ({focussed,size}) => 
                    <MaterialIcons  
                        name="live-help" 
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