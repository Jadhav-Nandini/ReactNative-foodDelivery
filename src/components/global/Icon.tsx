import { StyleSheet, Text, View } from 'react-native'
import React, {FC} from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'

interface IconProps {
    color?: string;
    size?: number;
    name: string;
    iconFamily: "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons"
}

const Icon = ({
    color,  
    size, 
    name, 
    iconFamily
}:IconProps) => {
  return (
    <>
    {iconFamily === "Ionicons" &&
    ( <Ionicons name={name} size={size} color={color} />)}
    </>
  )
}

export default Icon

