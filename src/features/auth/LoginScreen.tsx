import { ActivityIndicator, Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { loginStyles } from '@unistyles/authStyles'
import CustomText from '@components/global/CustomText'
import BreakerText from '@components/ui/BreakerText'
import PhoneInput from '@components/ui/PhoneInput'
import { phoneStyles } from '@unistyles/phoneStyles'
import { resetAndNavigate } from '@utils/NavigationUtils'
import SocialLogin from '@components/ui/SocialLogin'
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight'


const LoginScreen = () => {

  const animatedValue = useRef(new Animated.Value(0)).current
  const keyboardOffsetHeight = useKeyboardOffsetHeight()
  
  
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if (keyboardOffsetHeight==0) {

      Animated.timing(animatedValue, {
        toValue:0,
        duration:500,
        useNativeDriver:true
      }).start()
      
    } else {
      Animated.timing(animatedValue,{
        toValue: -keyboardOffsetHeight * 0.25,
        duration:500,
        useNativeDriver:true
      }).start()
      
    }
  }, [keyboardOffsetHeight])
  
  
  
  
  const handleLogin= async () => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      resetAndNavigate("UserBottomTab")
    }, 2000)
  }
  
  return (
    <View style={loginStyles.container}>
        <Image 
        source={require('@assets/images/login.png')}
        style={loginStyles.cover}
         />

         <Animated.ScrollView
         bounces={false}
         keyboardShouldPersistTaps='handled'
         keyboardDismissMode='on-drag'
         style={{transform: [{translateY: animatedValue}]}}
         contentContainerStyle={loginStyles.bottomContainer}>
            <CustomText fontFamily='Okra-Bold' variant='h2' style={loginStyles.title}>
                India's #1 Food Delivery and Dining App
            </CustomText>

            <BreakerText text='Log in or sign up '/ >

            <PhoneInput 
            onFocus={()=> {}}
            onBlur={()=>{}}
            value={phone}
            onChangeText={setPhone}
             />

             <TouchableOpacity 
             style={loginStyles.buttonContainer}
             disabled={loading}
             onPress={handleLogin}
             activeOpacity={0.8}

             >
              {loading ? (<ActivityIndicator size='small' color='fff' />): ( 
                <CustomText color='#fff' fontFamily='Okra-Medium' variant='h5'>
                  Continue
                </CustomText>
              ) }
             </TouchableOpacity>

             <BreakerText text='or'/>

             <SocialLogin />
             
             
         </Animated.ScrollView>

         <View style={loginStyles.footer}>
          <CustomText>By continuing, you agree to our</CustomText>
          <View style={loginStyles.footerTextContainer}>
            <CustomText style={loginStyles.footerText}>Terms of Service</CustomText>
            <CustomText style={loginStyles.footerText}>Privacy Policy</CustomText>
            <CustomText style={loginStyles.footerText}>Content Policies</CustomText>

          </View>
         </View>
         
        

    </View>
  )
}

export default LoginScreen

