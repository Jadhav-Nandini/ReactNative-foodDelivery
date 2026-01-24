import { Animated, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { loginStyles } from '@unistyles/authStyles'
import CustomText from '@components/global/CustomText'


const LoginScreen = () => {
  const [phone, setPhone] = useState('')
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
         contentContainerStyle={loginStyles.bottomContainer}>
            <CustomText fontFamily='Okra-Bold' variant='h2' style={loginStyles.title}>
                India's #1 Food Delivery and Dining App
            </CustomText>

 
       
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
            paddingHorizontal: 30,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1.6,
              backgroundColor: '#000',
              opacity: 0.4,
            }}
          />
 
          <Text
            style={{
              marginHorizontal: 10,
              color: '#0000008c',
              fontSize:15,
              fontWeight: '600',
            }}
          >
            Login in or Sign Up
          </Text>
 
          <View
            style={{
              flex: 1,
              height: 1.6,
              backgroundColor: '#000',
              opacity: 0.4,
            }}
          />
        </View>


<View
          style={{
            width: '88%',
            marginBottom: 16,
            borderWidth:0.6,
            paddingVertical:8,
            borderRadius:6,
          }}
        >
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter mobile number"
          />
        </View>
 
       
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '88%',
            height: 52,
            backgroundColor: '#FC8019',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <CustomText color="#fff" fontFamily="Okra-Medium" variant="h5">
            Continue
          </CustomText>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000',
              opacity: 0.3,
            }}
          />
 
          <Text
            style={{
              marginHorizontal: 10,
              color: '#000',
              fontWeight: '600',
            }}
          >
              or  
          </Text>
 
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000',
              opacity: 0.3,
            }}
          />
        </View>
        
 
            

            
         </Animated.ScrollView>
         
        

    </View>
  )
}

export default LoginScreen

