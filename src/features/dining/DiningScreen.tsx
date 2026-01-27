import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { emptyStyles } from '@unistyles/emptyStyles'

const DiningScreen = () => {
  return (
    <View style={emptyStyles.container(false)}>
        <Image source={require('@assets/images/coming_soon3.png')}
        style={emptyStyles.emptyImage}
         />

    </View>
  )
}

export default DiningScreen

