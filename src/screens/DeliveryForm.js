import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, Button, Alert} from 'react-native';


const DeliveryForm = () => {
    return (
        <SafeAreaView>
        <View style={styles.view}>
           <Text style={{
               fontWeight: 'bold',
               color: 'black',
               fontSize: 25,
               marginLeft:12}}>
               Delivery Form
           </Text>
        </View>
        <View>
            <View style={{marginTop: 10,}}>
                <Text style={styles.textContainer}> Package Name</Text>
                <View style={styles.inputContainer}>
                        <TextInput placeholder="Lg V50 Thinq Q" style={{paddingLeft: 10}}/>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <Text style={styles.textContainer}> Package Description</Text>
                <View style={styles.inputContainers}>
                        <TextInput placeholder="Lg state of the Art Mobile Phone" style={{paddingLeft: 10}}/>
                </View>
           </View>
            <View style={{marginTop: 10,}}>
                <Text style={styles.textContainer}> Pick Up Location</Text>
                <View style={styles.inputContainer}>
                        <TextInput placeholder="University of Ghana, Akuafu Hall" style={{paddingLeft: 10}}/>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <Text style={styles.textContainer}> Drop Off Location</Text>
                <View style={styles.inputContainer}>
                        <TextInput placeholder="Circle, VIP Station" style={{paddingLeft: 10}}/>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <Text style={styles.textContainer}> Receiver's Name</Text>
                <View style={styles.inputContainer}>
                        <TextInput placeholder="Kamile Seidu" style={{paddingLeft: 10}}/>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <Text style={styles.textContainer}> Reciever's Phone Number</Text>
                <View style={styles.inputContainer}>
                        <TextInput placeholder="0557148772"keyboardType='numeric'
                                maxLength={10} style={{paddingLeft: 10}}/>
                </View>
            </View>
           
           <View style={styles.container}>
            <Button title="Send Request" color='dodgerblue' />
        </View>
        </View>
   </SafeAreaView>
    )
}

export default DeliveryForm

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },

    inputContainer: {
        height: 40,
        borderWidth: 0.5,
        borderRadius: 20,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 13,
        marginRight: 13,
        marginTop: 10,
    },
    inputContainers: {
        height: 50,
        borderWidth: 0.5,
        borderRadius: 20,
        alignSelf: 'stretch',
        marginLeft: 13,
        marginRight: 13,
        marginTop: 10,
    },
    container: {
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center"
      },

    textContainer:{
        marginLeft: 15
    }
})
