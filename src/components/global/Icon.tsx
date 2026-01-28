import { StyleSheet, Text, View } from 'react-native'
import React, {FC} from 'react'
import Ionicons from '@react-native-vector-icons/ionicons'
import FontAwesome from '@react-native-vector-icons/fontawesome'

interface IconProps {
    color?: string;
    size?: number;
    name: string;
    iconFamily: "Ionicons"| "FontAwesome" | "MaterialCommunityIcons" | "MaterialIcons"
}

const Icon = ({
    color,  
    size, 
    name, 
    iconFamily
}:IconProps) => {
  return (
    <>

    {iconFamily === "Ionicons" && ( <Ionicons name={name} size={size} color={color} />
  )}
    {
    iconFamily === "FontAwesome" && ( <FontAwesome name={name} size={size} color={color} />)}
    </>
  )
}

export default Icon



// import type { ComponentProps } from 'react'
// import Ionicons from '@react-native-vector-icons/ionicons'
// import FontAwesome from '@react-native-vector-icons/fontawesome'

// type IoniconName = ComponentProps<typeof Ionicons>['name']
// type FontAwesomeName = ComponentProps<typeof FontAwesome>['name']

// type IconProps =
//   | {
//       iconFamily: "Ionicons"
//       name: IoniconName
//       color?: string
//       size?: number
//     }
//   | {
//       iconFamily: "FontAwesome"
//       name: FontAwesomeName
//       color?: string
//       size?: number
//     }

// const Icon = (props: IconProps) => {
//   const { color, size } = props

//   if (props.iconFamily === "Ionicons") {
//     return <Ionicons name={props.name} size={size} color={color} />
//   }

//   return <FontAwesome name={props.name} size={size} color={color} />
// }
