import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { emptyStyles } from '@unistyles/emptyStyles'
import { defaultTheme } from '@unistyles/unistyles'

const DiningScreen = () => {
  const {colors} = defaultTheme;
  const  isLive = false
  return (
    <View style={[
      emptyStyles.container, 
      { 
        backgroundColor: isLive ? '#000' : colors.background 
      }]}>

        <Image source={require('@assets/images/coming_soon3.png')}
        style={emptyStyles.emptyImage}
         />

    </View>
  )
}

export default DiningScreen


