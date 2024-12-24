type AuthContextType = {
  login: Login
  setLoginData: (login: Partial<Login>) => void
  register: Register
  setRegisterData: (register: Partial<Register>) => void
}
import {createContext} from 'react'

import type {Login, Register} from './AuthTypes'

export default createContext<AuthContextType>({
  login: {
    email: '',
    password: ''
  },
  register: {
    email: '',
    password: '',
    username: ''
  },
  setLoginData: () => {},
  setRegisterData: () => {}
})
