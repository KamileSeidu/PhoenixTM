import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, Button, Alert} from 'react-native';


const showAlert = () =>
        Alert.alert(
            "Alert",
            "Message Sent",
            [
            {
                text: "ok",
                style: "cancel",
            },
            ],
            {
            cancelable: true,
            // onDismiss: () =>
            //     Alert.alert(
            //     "opps"
            //     ),
            }
        );

const ContactUs = () => {
    return (
        <SafeAreaView>
             <View style={styles.view}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 25,
                    marginLeft:12}}>
                    Contact US
                </Text>
             </View>
             <View>
                <View style={styles.inputContainer}>
                     <TextInput placeholder="First Name" style={{paddingLeft: 10}}/>
                </View>
                <View style={styles.inputContainer}>
                     <TextInput placeholder="Last Name" style={{paddingLeft: 10}}/>
                </View>
                <View style={styles.inputContainer}>
                     <TextInput placeholder="E-mail" style={{paddingLeft: 10}}/>
                </View>
                <View style={styles.inputContainers}>
                     <TextInput placeholder="Message" style={{paddingLeft: 10}}/>
                </View>
                <View style={styles.container}>
                 <Button title="Send Message" color='orange' onPress={showAlert} />
             </View>
             </View>
        </SafeAreaView>
     );
}

export default ContactUs

const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    inputContainer: {
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 13,
        marginRight: 13,
        marginTop: 10,
    },
    inputContainers: {
        height: 200,
        borderWidth: 0.5,
        borderRadius: 10,
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


})
