import React, {useState} from 'react'
import { StyleSheet, Text, SafeAreaView, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleSignUp = () => {
    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then(userCredentials => {
    //             const user = userCredentials.user;
    //             console.log(user.email);
    //         })
    //         .catch(error => alert(error.message));
    // }

    return (
        <SafeAreaView style={{backgroundColor: 'dodgerblue', flex: 1}}>
            <KeyboardAvoidingView behavior='padding'>
                <View style={{marginTop: 100, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize:30}}>Log in</Text>
                </View>

                <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, width: 300, marginLeft: 30, marginTop: 20, padding: 10}}>
                    <MaterialIcons name="email" size={24} color="grey" style={{paddingLeft: 10}} />
                    <TextInput 
                        placeholder="E-mail" 
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={{paddingLeft: 10}}/>
                </View>
                <View style={{flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, width: 300, marginLeft: 30, marginTop: 20, padding: 10}}>
                    <MaterialIcons name="security" size={24} color="grey" style={{paddingLeft: 10}} />
                    <TextInput 
                        placeholder="Password"
                        value={password}
                        onChangeText = {text => setPassword(text)} 
                        secureTextEntry={true} 
                        style={{paddingLeft: 10}}/>
                </View>

                <TouchableOpacity 
                    onPress = {()=>{navigation.navigate('HomeScreen')}}
                    style={{marginTop: 40, height: 50, width: 300, backgroundColor: 'orange', 
                    marginLeft: 30, borderRadius:100, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: 20}}>
                        Log in
                    </Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', marginTop: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 17}}>
                        Don't have an Account ?
                    </Text>
                    <TouchableOpacity  onPress = {()=>{navigation.navigate('SignUp')}}>
                        <Text style={{paddingLeft: 10, color: 'white', fontSize: 20}} >
                            Sign Up !
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 70, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                        BossIt
                    </Text>
                </View>
            </KeyboardAvoidingView>
               
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({

})
