import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { emptyStyles } from '@unistyles/emptyStyles'
import { defaultTheme } from '@unistyles/unistyles'

const LiveScreen = () => {
  const {colors} = defaultTheme;
  const  isLive = true
  return (
    <View style={[
      emptyStyles.container, 
      { 
        backgroundColor: isLive ? '#000' : colors.background 
      }]}>

        <Image source={require('@assets/images/coming_soon2.jpg')}
        style={emptyStyles.emptyImage}
         />

    </View>
  )
}

export default LiveScreen
