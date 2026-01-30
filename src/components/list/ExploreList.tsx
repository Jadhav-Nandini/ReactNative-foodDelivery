import { Pressable, View } from 'react-native'
import { useState } from 'react'
import { homeStyles } from '@unistyles/homeStyles'
import CustomText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import RecommendedList from './RecommendedList'
import BreakerText from '@components/ui/BreakerText'

const ExploreList = () => {
  const  [tabSelected, setSelectedTab] = useState(1)  
  return (
    <View style={homeStyles.topHidingContainer}>
      <View style={homeStyles.flexRowCenter}>
        <Pressable
        onPress={()=> setSelectedTab(1)}
        >
          <CustomText 
          color={tabSelected == 1 ? Colors.text : Colors.lightText}
          fontFamily='Okra-Medium'>
            Recommended
          </CustomText>
        </Pressable>
      </View>

      <RecommendedList />
      <BreakerText text="WHAT'S ON YOUR MIND" />
    </View>
  )
}

export default ExploreList

