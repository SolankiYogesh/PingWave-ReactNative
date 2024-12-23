import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {Colors} from '@/Helpers'
import {moderateScale, scale} from '@/Helpers/Responsive'

export default () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: moderateScale(20),
    flex: 1,
    justifyContent: 'center',
    padding: scale(10)
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.ThemeBackGround,
    columnGap: scale(15),
    flexDirection: 'row',
    padding: scale(10)
  }
})
