import { View, Text, TouchableOpacity, Pressable, Image, ImageStyle } from 'react-native'
import React from 'react'
import { useSharedState } from '@features/tabs/SharedContext'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { homeStyles } from '@unistyles/homeStyles'
import Icon from '@components/global/Icon'
import { Colors } from '@unistyles/Constants'
import CustomText from '@components/global/CustomText'
import RollingContent from 'react-native-rolling-bar'
import { useAppDispatch, useAppSelector } from '@states/reduxHook'
import { setVegMode } from '@states/reducers/userSlice'
const searchItems: string[] = [
  'Search  "Chai Samosa" ',
  'Search  "Cake" ',
  'Search  "Ice Cream" ',
  'Search  "Pizza" ',
  'Search  "Biryani" ',
  'Search  "Burger" ',
  'Search  "Caramel" ',
]


const SearchBar = () => {
  // const isVegMode = true
  const dispatch = useAppDispatch()
  const isVegMode = useAppSelector(state => state.user.isVegMode)

  const { scrollYGlobal } = useSharedState();
  const textColorAnimation = useAnimatedStyle(() => {
    const textColor = interpolate(scrollYGlobal.value, [0, 80], [255, 10])
    return {
      color: `rgb(${textColor}, ${textColor}, ${textColor})`,
    }
  })

  return (
    <>
      {/* <SafeAreaView /> */}
      <View style={[homeStyles.flexRowBetween, homeStyles.padding]}>
      // Search Bar with placeholder
        <TouchableOpacity
          style={homeStyles.searchInputContainer}
          activeOpacity={0.8}>
          <Icon
            iconFamily='Ionicons'
            name='search'
            color={isVegMode ? Colors.active : Colors.primary}
            size={24}
          />

          <RollingContent
            interval={3000}
            defaultStyle={false}
            customStyle={homeStyles.textContainer}>
            {searchItems?.map((item, index) => {
              return (
                <CustomText style={homeStyles.rollingText}
                  fontSize={12}
                  fontFamily='Okra-Medium'
                  key={index}>
                  {item}
                </CustomText>
              );
            })}

          </RollingContent>

          <Icon
            iconFamily='Ionicons'
            name='mic-outline'
            color={isVegMode ? Colors.active : Colors.primary}
            size={22}
          />

        </TouchableOpacity>

{/*  veg mode Toggle */}
        <Pressable
          style={homeStyles.vegMode}
          onPress={()=> dispatch(setVegMode(!isVegMode))}>
          

          <Animated.Text style={[textColorAnimation, homeStyles.animatedText]}>VEG</Animated.Text>
          <Animated.Text style={[textColorAnimation, homeStyles.animatedSubText]}>MODE</Animated.Text>

          <Image
            source={
              isVegMode
                ? require('@assets/icons/switch_on.png')
                : require('@assets/icons/switch_off.png')
            }
            style={homeStyles.switch as ImageStyle}
          />


        </Pressable>

      </View>

    </>
  )
}

export default SearchBar