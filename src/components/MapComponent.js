import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { mapStyle} from "../global/mapStyle"
import MapView, { PROVIDER_GOOGLE,} from 'react-native-maps';

export default class MapComponent extends Component {
    render() {
        return (
            <View>
                <MapView
                            // ref = {_map}
                            provider ={PROVIDER_GOOGLE}
                            style = {styles.map}
                            customMapStyle ={mapStyle}
                            showsUserLocation ={true}
                            followsUserLocation = {true}
                            // initialRegion = {{...carsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
                           
                        >
                            {/* {carsAround.map((item,index)=>
                            // <MapView.Marker coordinate = {item} key= {index.toString()}>
                            //     <Image 
                            //         source = {require('../../assets/carMarker.png')}
                            //         style ={styles.carsAround}
                            //         resizeMode = "cover"
                            //     />
                            // </MapView.Marker> */}
{/*                             
                            ) */}

                            {/* } */}

                       </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map:{
       
        height: '100%',
        width: '100%',
    },
})
