import { Animated, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { FC } from 'react'
import SplashScreen from '@features/auth/SplashScreen'
import LoginScreen from '@features/auth/LoginScreen'
import { navigationRef } from '@utils/NavigationUtils'
// import Animated from 'react-native-reanimated'
import UserBottomTab from '@features/tabs/UserBottomTab'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName='SplashScreen'
        screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen 
            options={{
              animation: 'fade'
            }}
            name='LoginScreen'
            component={LoginScreen} />

            <Stack.Screen options={{
              animation: 'fade'
            }} 
              name= "UserBottomTab"
              component={UserBottomTab}
            />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})