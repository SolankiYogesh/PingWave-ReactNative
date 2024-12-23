import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {StatusBar} from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import {Colors} from '@/Helpers'
import AppNavigation from '@/Router/AppNavigation'
import {navigationRef} from '@/Router/Rootnavigation'

const App = () => (
  <NavigationContainer onReady={SplashScreen.hide} ref={navigationRef}>
    <StatusBar backgroundColor={Colors.ThemeBackGround} />
    <AppNavigation />
  </NavigationContainer>
)

export default App
