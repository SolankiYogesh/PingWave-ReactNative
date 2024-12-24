import type {ReactNode} from 'react'
import {useCallback, useMemo, useState} from 'react'

import AuthContext from './AuthContext'
import type {Login, Register} from './AuthTypes'

type AuthProviderProps = {
  children: ReactNode
}
export default ({children}: AuthProviderProps) => {
  const [login, setLogin] = useState<Login>({email: '', password: ''})
  const [register, setRegister] = useState<Register>({username: '', email: '', password: ''})

  const setLoginData = useCallback((data: Partial<Login>) => {
    setLogin((state) => ({
      ...state,
      ...data
    }))
  }, [])

  const setRegisterData = useCallback((data: Partial<Register>) => {
    setRegister((state) => ({
      ...state,
      ...data
    }))
  }, [])

  const values = useMemo(
    () => ({
      login,
      setLoginData,
      register,
      setRegisterData
    }),
    [login, register]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
