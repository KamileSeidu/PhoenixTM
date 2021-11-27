import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import RootNavigator from './src/navigations/RootNavigator'
npm 

const App = () => {
  return (
    <RootNavigator />
  )
}

export default App

const styles = StyleSheet.create({

container:{
  flex:1
}


})
