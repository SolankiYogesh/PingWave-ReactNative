import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Screens} from '@/Helpers'
import {AuthScreen, ChatScreen} from '@/Screens'

const Stack = createNativeStackNavigator()
export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Screens.Auth} component={AuthScreen} />
      <Stack.Screen name={Screens.Main} component={ChatScreen} />
    </Stack.Navigator>
  )
}
