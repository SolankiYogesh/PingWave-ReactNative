import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native'
import React from 'react'
import {SvgFromXml} from 'react-native-svg'
import {moderateScale, scale, verticalScale} from '@/Helpers/Responsive'
import {Colors, SVGByteCode} from '@/Helpers'
import {CommonStyles} from '@/Helpers/CommonStyles'

interface AppInputProps extends TextInputProps {
  leftImage?: keyof typeof SVGByteCode
}
const ICON_SIZE = verticalScale(20)
const HEIGHT = verticalScale(50)

const AppInput = ({leftImage, style = {}, ...rest}: AppInputProps) => {
  return (
    <View style={styles.container}>
      {leftImage && (
        <SvgFromXml xml={SVGByteCode[leftImage]} width={ICON_SIZE} height={ICON_SIZE} />
      )}
      <TextInput
        {...rest}
        style={[CommonStyles.flex, style]}
        placeholderTextColor={Colors.greyShade6474}
      />
    </View>
  )
}

export default AppInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    columnGap: scale(10),
    borderRadius: moderateScale(HEIGHT),
    borderWidth: 1,
    borderColor: Colors.greyShadeE2,
    height: HEIGHT,
    paddingHorizontal: scale(20)
  }
})
