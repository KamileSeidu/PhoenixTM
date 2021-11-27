import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RequestScreen from '../screens/RequestScreen'
import DeliveryForm from '../screens/DeliveryForm';
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const Home = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Home.Navigator>
            <Home.Screen 
                name = "Login"
                component = {Login}
                options = {{headerShown: false}}
            />
            <Home.Screen 
                name = "SignUp"
                component = {SignUp}
                options = {{headerShown: false}}
            />
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