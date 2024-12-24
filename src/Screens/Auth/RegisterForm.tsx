import CenterView from '@/Components/CenterView'
import {CommonStyles} from '@/Helpers/CommonStyles'
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated'

export default () => {
  return (
    <Animated.View entering={SlideInRight} exiting={SlideOutRight} style={[CommonStyles.flex]}>
      <CenterView title="Register" />
    </Animated.View>
  )
}
