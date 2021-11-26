import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RequestScreen from '../screens/RequestScreen'
import DeliveryForm from '../screens/DeliveryForm';

const Home = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Home.Navigator>
            <Home.Screen 
                name = "HomeScreen"
                component = {HomeScreen}
                options = {{headerShown: false}}
            />
            <Home.Screen 
                name = "RequestScreen"
                component = {RequestScreen}
                options = {{headerShown: false}}
            />
            <Home.Screen 
                name = "DeliveryForm"
                component = {DeliveryForm}
                options = {{headerShown: false}}
            />
        </Home.Navigator>
    )

}