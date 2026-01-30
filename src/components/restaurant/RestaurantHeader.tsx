import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { restaurantHeaderStyles } from '@unistyles/restuarantStyles'
import { goBack } from '@utils/NavigationUtils'
import Icon from '@components/global/Icon'
import CustomText from '@components/global/CustomText'
 
const RestaurantHeader:FC<{title: string}> = ({title}) => {
 
  return (
    <View style={restaurantHeaderStyles.headerContainer}>
        <View style={restaurantHeaderStyles.flexRowGap}>
            <TouchableOpacity onPress={() => goBack()}>
                <Icon
                 name='arrow-left'
                 iconFamily='MaterialCommunityIcons'
                 size={24} />
            </TouchableOpacity>
 
            <View>
                <CustomText
                    fontFamily='Okra-Medium'
                    fontSize={9.5}
                     style={restaurantHeaderStyles.title} />
 
            </View>
        </View>
     
    </View>
  )
}
 
export default RestaurantHeader
 