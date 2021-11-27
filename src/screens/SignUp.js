import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SignUp = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: 'dodgerblue', flex: 1}}>
                <View style={{marginTop: 100, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize:30}}>Sign Up</Text>
                </View>

                <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, width: 300, marginLeft: 30, marginTop: 20, padding: 10}}>
                    <AntDesign name="user" size={24} color="grey" style={{paddingLeft: 10}} />
                    <TextInput placeholder="Name" style={{paddingLeft: 10}}/>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, width: 300, marginLeft: 30, marginTop: 20, padding: 10}}>
                    <MaterialIcons name="email" size={24} color="grey" style={{paddingLeft: 10}} />
                    <TextInput placeholder="E-mail" style={{paddingLeft: 10}}/>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, width: 300, marginLeft: 30, marginTop: 20, padding: 10}}>
                    <MaterialIcons name="security" size={24} color="grey" style={{paddingLeft: 10}} />
                    <TextInput placeholder="Password" secureTextEntry={true} style={{paddingLeft: 10}}/>
                </View>

                <TouchableOpacity 
                     onPress = {()=>{navigation.navigate('HomeScreen')}}
                    style={{marginTop: 40, height: 50, width: 300, backgroundColor: 'orange', 
                    marginLeft: 30, borderRadius:100, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: 20}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <View style={{marginTop: 70, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                        BossIt
                    </Text>
                </View>
               
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({

})
