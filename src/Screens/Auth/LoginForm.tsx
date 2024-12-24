import CenterView from '@/Components/CenterView'
import {CommonStyles} from '@/Helpers/CommonStyles'
import Animated, {SlideInLeft, SlideOutLeft} from 'react-native-reanimated'

import {useContext} from 'react'
import AuthContext from './Provider/AuthContext'
import {AppInput} from '@/Components'

export default () => {
  const {login, setLoginData} = useContext(AuthContext)
  return (
    <Animated.View entering={SlideInLeft} exiting={SlideOutLeft} style={[CommonStyles.flex]}>
      <AppInput
        value={login.email}
        leftImage={'email'}
        placeholder="E-mail ID"
        onChangeText={(email) => setLoginData({email})}
      />
      <AppInput
        value={login.password}
        leftImage={'lock'}
        placeholder="Password"
        keyboardType="decimal-pad"
        onChangeText={(password) => setLoginData({password})}
      />

      <CenterView title="Login" />
    </Animated.View>
  )
}
