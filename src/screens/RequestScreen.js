import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapComponent from '../components/MapComponent';
import {colorts, parameters} from '../global/styles';

export default function RequestScreen() {
    return (
        <View style={styles.container}>
            <MapComponent/>
            
            <View>
            <View style={{backgroundColor:'dodgerblue', height:'100%', flexDirection:'row',}}>
                <TouchableOpacity style={styles.viewContainer}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        Pricing
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewContainer}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        Delivery Form
                    </Text>
                </TouchableOpacity>

                <View style={{position: 'absolute', marginTop: 70,}}>
                    <Image 
                        style={{height: 150, width: 150, marginLeft: 110}}
                        source = {require('../../assets/img1.png')} />
                </View>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        marginTop: parameters.statusBarHeight,
    },

    viewContainer:{
        marginTop: 10,
        marginLeft: 10,
        height: 40,
        borderRadius: 100, 
        width: '45%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
