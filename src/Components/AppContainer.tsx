import React from 'react'
import {StyleSheet, View} from 'react-native'

import {Colors} from '@/Helpers'

type AppContainerProps = {
  children: React.ReactNode
}

export default ({children}: AppContainerProps) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ThemeBackGround,
    flex: 1
  }
})
