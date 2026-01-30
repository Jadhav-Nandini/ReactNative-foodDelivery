import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'
import CustomText from '@components/global/CustomText'
import { cardStyles } from '@unistyles/cardStyles'
import { recommendedListData } from '@utils/dummyData'
 
const RestaurantList = () => {
  const renderItem = ({item} : any) => {
    return (
      <RestaurantCard item={item} />
    )
  }
  return (
    <View>
       <CustomText
       style={cardStyles.centerText}
       fontFamily='Okra-Bold'
       fontSize={13}>
        1654 restaurants delivering to you
       </CustomText>
       <CustomText
       style={cardStyles.centerText}
       fontFamily='Okra-Medium'
       fontSize={12}>
        FEATURED</CustomText>
       <FlatList
          data={recommendedListData}
          scrollEventThrottle={16}
          bounces={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item?.id.toString()}
          contentContainerStyle={cardStyles.listContainer}
          />  
 
    </View>
  )
}
 
export default RestaurantList