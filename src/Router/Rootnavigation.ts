import {CommonActions, createNavigationContainerRef} from '@react-navigation/native'

import {Screens} from '@/Helpers'

export const navigationRef = createNavigationContainerRef()

export function navigate(...arg: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(arg as never)
  }
}

export const NavigateToAuth = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: Screens.Auth,
            params: {
              isLogOut: true
            }
          }
        ]
      })
    )
  }
}
export const NavigateToMain = () => {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        {
          name: Screens.Main,
          params: {
            isLogOut: true
          }
        }
      ]
    })
  )
}
