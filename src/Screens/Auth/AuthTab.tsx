import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {Colors} from '@/Helpers'
import {moderateScale, scale} from '@/Helpers/Responsive'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import {useEffect, useLayoutEffect, useRef} from 'react'

interface AuthTabProps {
  index: number
  setIndex: (index: number) => void
}

export default ({index, setIndex}: AuthTabProps) => {
  const viewRef = useRef<View>(null)
  const current = useSharedValue(0)
  const animatedX = useSharedValue(0)

  useEffect(() => {
    animatedX.value = withTiming(index == 1 ? 0 : current.value / 2, {
      duration: 500
    })
  }, [index])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: animatedX.value
        }
      ]
    }
  }, [animatedX.value])

  useLayoutEffect(() => {
    if (viewRef.current) {
      viewRef.current.measure((_: number, __: number, width: number) => {
        current.value = width - scale(20)
      })
    }
  }, [])

  return (
    <View style={styles.container} ref={viewRef}>
      <Animated.View style={[styles.buttonCoverStyle, animatedStyle]} />
      <TouchableOpacity
        disabled={index === 1}
        style={styles.buttonStyle}
        onPress={() => setIndex(1)}
      >
        <Animated.Text
          style={[styles.buttonTextStyle, index === 1 && styles.buttonActiveTextStyle]}
        >
          Login
        </Animated.Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={index === 2}
        style={styles.buttonStyle}
        onPress={() => setIndex(2)}
      >
        <Animated.Text
          style={[styles.buttonTextStyle, index === 2 && styles.buttonActiveTextStyle]}
        >
          Register
        </Animated.Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonCoverStyle: {
    backgroundColor: Colors.white,
    padding: scale(20),
    position: 'absolute',
    width: '50%',
    margin: scale(10),
    borderRadius: moderateScale(20)
  },
  buttonStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: scale(10)
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.greyShadeE2,
    columnGap: scale(15),
    flexDirection: 'row',
    padding: scale(10),
    borderRadius: moderateScale(50)
  },
  buttonTextStyle: {
    fontSize: moderateScale(14),
    color: Colors.black
  },
  buttonActiveTextStyle: {
    color: Colors.greyShade6474
  }
})
