import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'

import AppNavigation from '@/Router/AppNavigation'
import {navigationRef} from '@/Router/Rootnavigation'

const App = () => (
  <NavigationContainer onReady={SplashScreen.hide} ref={navigationRef}>
    <AppNavigation />
  </NavigationContainer>
)

export default App
