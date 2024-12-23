import {StyleSheet, View} from 'react-native'
import {SvgFromXml} from 'react-native-svg'

import {AppContainer} from '@/Components'
import {Colors, SVGByteCode} from '@/Helpers'
import {heightPx, moderateScale, SCREEN_WIDTH, W_WIDTH} from '@/Helpers/Responsive'

import AuthTab from './AuthTab'
import LoginForm from './LoginForm'

export default () => {
  return (
    <AppContainer>
      <SvgFromXml xml={SVGByteCode.auth_back} width={SCREEN_WIDTH} />
      <View style={styles.sheetView}>
        <AuthTab />
        <LoginForm />
      </View>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  sheetView: {
    backgroundColor: Colors.ThemeColor,
    borderRadius: moderateScale(20),
    bottom: 0,
    height: heightPx(65),
    position: 'absolute',
    width: W_WIDTH,
    zIndex: 1000
  }
})
