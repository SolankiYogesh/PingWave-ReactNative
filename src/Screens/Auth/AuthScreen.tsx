import {StyleSheet, View} from 'react-native'
import {SvgFromXml} from 'react-native-svg'

import {AppContainer} from '@/Components'
import {Colors, SVGByteCode} from '@/Helpers'
import {heightPx, moderateScale, scale, SCREEN_WIDTH, W_WIDTH} from '@/Helpers/Responsive'

import AuthTab from './AuthTab'
import LoginForm from './LoginForm'
import {useState} from 'react'
import RegisterForm from './RegisterForm'
import AuthProvider from './Provider/AuthProvider'

export default () => {
  const [index, setIndex] = useState(1)
  return (
    <AuthProvider>
      <AppContainer>
        <SvgFromXml xml={SVGByteCode.auth_back} width={SCREEN_WIDTH} />
        <View style={styles.sheetView}>
          <AuthTab index={index} setIndex={setIndex} />
          {index === 1 ? <LoginForm /> : <RegisterForm />}
        </View>
      </AppContainer>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  sheetView: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(20),
    bottom: 0,
    height: heightPx(65),
    position: 'absolute',
    width: W_WIDTH,
    zIndex: 1000,
    overflow: 'hidden',
    padding: scale(10)
  }
})
