import { createContext, ReactNode } from 'react'

interface UserProps {
  name: string
  avatarUrl?: string
}

export interface AuthContextDataProps {
  user: UserProps
  signIn: () => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  async function signIn() {
    console.log('logando')
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: 'kevin',
          avatarUrl: 'https://github.com/kevinguedes.png',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
