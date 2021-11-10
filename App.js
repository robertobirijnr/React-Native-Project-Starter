import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/router'
import firebase from 'firebase/compat/app';
import { firebaseConfig } from './src/core/config'

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}


const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App;
