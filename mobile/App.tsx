import { NativeBaseProvider, StatusBar } from 'native-base'
import { Loading } from './src/components/Loading'
import { AuthContextProvider } from './src/contexts/AuthContext'
import { SignIn } from './src/screens/SignIn'

import { THEME } from './src/styles/theme'

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Polls } from './src/screens/Polls'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Polls /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
