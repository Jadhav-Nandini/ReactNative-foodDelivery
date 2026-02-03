  import {   Text, TouchableOpacity, View } from 'react-native'
  import React, { FC, useState } from 'react'
  import { useAppDispatch, useAppSelector } from '@states/reduxHook'
  import { useSharedState } from '@features/tabs/SharedContext';
  import { useSafeAreaInsets } from 'react-native-safe-area-context';
  import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
  import { clearAllCarts } from '@states/reducers/cartSlice';
  import { cartStyles } from '@unistyles/cartStyles';
  // import { BlurView } from '@react-native-community/blur';
  import CustomText from '@components/global/CustomText';
  import { Colors } from '@unistyles/Constants';
  import Icon from '@components/global/Icon';

  const CartHOC:FC = () => {
    const dispatch = useAppDispatch();
    const carts = useAppSelector(state => state.cart.carts)
    const {scrollY} = useSharedState();
    const bottom = useSafeAreaInsets();
    const [isExpand, setIsExpand] = useState(false);
    const totalCartsLength = carts?.length;

    const animatedStyle = useAnimatedStyle(()=>({
      transform:[
        {
          translateY:
          scrollY.value === 1
          ? withTiming(100, {duration:300})
          : withTiming(0, {duration:300})
        },
      ],
    }));

    const clearCart = async() => {
      dispatch(clearAllCarts())
      setIsExpand(false)
    };

    if(!totalCartsLength) return null;
    
    
    return (
      <Animated.View style={[isExpand? cartStyles.expandedCartContainer : cartStyles.cartContainer,
        animatedStyle,
        {
          paddingBottom: !isExpand ? bottom.bottom + 16 : 0 
        }     
      ]}>
  
  {carts?.length > 1 && !isExpand && (
    <TouchableOpacity activeOpacity={0.9}
    onPress={() => setIsExpand(true)}
    style={cartStyles.moreButton}>
      <CustomText 
      style={{top: 1}}
      color={Colors.active}
      fontSize={9}
      fontFamily='Okra-Medium'>
        +{carts?.length - 1}more
        <Icon 
        iconFamily='Ionicons'
        name='caret-up-outline'
        color={Colors.active}
        size={10}
        />
      </CustomText>
    </TouchableOpacity>
  )}
        

          {/* <BlurView
          // style={[styles.blurBackdrop, cartStyles.absolute]} 
          blurType='light'  
          blurAmount={30} 
        /> */}

        {/* {isExpand && <View style={cartStyles.contentContainer}/> }

        {isExpand && (
          <TouchableOpacity style={cartStyles.closeIcon}
          onPress={()=> setIsExpand(false)}>
            <Icon
            iconFamily='Ionicons'
            name='close'
            size={20}
            color='#fff'
            />
          </TouchableOpacity>
        )} */}
        

      </Animated.View>
    )
  }

  export default CartHOC

  // const styles = StyleSheet.create({
  //   blurBackdrop: {
  //     ...StyleSheet.absoluteFillObject,  
  //   },
  // })

