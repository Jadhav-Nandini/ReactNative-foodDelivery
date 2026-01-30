
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '@features/auth/SplashScreen'
import LoginScreen from '@features/auth/LoginScreen'
import { navigationRef } from '@utils/NavigationUtils'
import AnimatedTabs from '@features/tabs/AnimatedTabs'
// import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    // <SafeAreaProvider>
      
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator 
        initialRouteName='SplashScreen'
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen 
            name='SplashScreen' 
            component={SplashScreen} />
            <Stack.Screen 
            name='LoginScreen'
            options={{ animation: 'fade'}}
            component={LoginScreen} />

            <Stack.Screen options={{
              animation: 'fade'
            }} 
              name= "UserBottomTab"
              component={AnimatedTabs}
            />
        </Stack.Navigator>
    </NavigationContainer>
    //  </SafeAreaProvider> 

  )
}

export default Navigation

