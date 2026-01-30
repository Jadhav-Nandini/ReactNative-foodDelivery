import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserBottomTab from './UserBottomTab'
import { SharedStateProvider } from '@features/tabs/SharedContext'
const AnimatedTabs = () => {
  return (
    <SharedStateProvider>
        <UserBottomTab />
    </SharedStateProvider>
  )
}


export default AnimatedTabs

