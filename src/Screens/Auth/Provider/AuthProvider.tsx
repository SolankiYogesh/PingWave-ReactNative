import type {ReactNode} from 'react'
import {useMemo, useState} from 'react'

import AuthContext from './AuthContext'
import type {Login, Register} from './AuthTypes'

type AuthProviderProps = {
  children: ReactNode
}
export default ({children}: AuthProviderProps) => {
  const [login, setLogin] = useState<Login>({email: '', password: ''})
  const [register, setRegister] = useState<Register>({username: '', email: '', password: ''})

  const values = useMemo(
    () => ({
      login,
      setLogin,
      register,
      setRegister
    }),
    [login, register]
  )

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
