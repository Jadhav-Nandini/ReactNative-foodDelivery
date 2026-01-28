





import { View } from 'react-native'
import React from 'react'
import { loginStyles } from '@unistyles/authStyles'
import CustomText from '@components/global/CustomText'

interface BreakerTextProps {
  text: string
}

function BreakerText({ text }: BreakerTextProps) {
  return (
    <View style={loginStyles.breakerContainer}>
      <View style={loginStyles.horizontalLine} />

      <CustomText
        fontSize={12}
        fontFamily="Okra-Medium"
        style={loginStyles.title}
      >
        {text}
      </CustomText>

      <View 
      style={loginStyles.horizontalLine} />
    </View>
  )
}

export default BreakerText



