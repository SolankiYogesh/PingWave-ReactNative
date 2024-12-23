type AuthContextType = {
  login: Login
  setLogin: (login: Login) => void
  register: Register
  setRegister: (register: Register) => void
}
import {createContext} from 'react'

import type {Login, Register} from './AuthTypes'

export default createContext<AuthContextType | undefined>(undefined)
