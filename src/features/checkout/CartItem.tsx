import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { FC, useMemo } from 'react'
import { useAppDispatch } from '@states/reduxHook'
import { clearRestaurantCart } from '@states/reducers/cartSlice'
import { cartStyles } from '@unistyles/cartStyles'
import CustomText from '@components/global/CustomText'
import { navigate } from '@utils/NavigationUtils'
import { Colors } from '@unistyles/Constants'
import Icon from '@components/global/Icon'
import { RFValue } from 'react-native-responsive-fontsize'

const CartItem: FC<{ item: any }> = ({ item }) => {
  const dispatch = useAppDispatch()
  const deleteCart = async (id: any) => {
    dispatch(clearRestaurantCart({ restaurant_id: id }))
  }

  const totalItems = useMemo(() => {
    return item.items.reduce(
      (acc: any, item: any) => {
        acc += item.quantity;
        return acc;
      },
      0
    );
  }, [item.items])

  return (
    <View style={cartStyles.cartItemContainer}>
      <View style={cartStyles.flexRow}>
        <Image
          source={{ uri: item?.restaurant?.imageUrl }}
          style={cartStyles.image}
        />
        <View>
          <CustomText fontFamily='Okra-Bold' fontSize={13}
          
          style={{paddingLeft: 4 }}
          >
            {item?.restaurant?.name}
          </CustomText>
          <TouchableOpacity style={cartStyles.flexRow}
            onPress={() => {
              navigate('RestaurantScreen', {
                item: item.restaurant,
              });
            }}>
            <CustomText
              style={{ top: -2, paddingLeft: 4 }}
              fontSize={12}
              fontFamily='Okra-Medium'
              color={Colors.active}
            >
              View Menu
            </CustomText>
            <Icon
              name='chevron-forward'
              color={Colors.active}
              iconFamily='Ionicons'
              size={18}
            />
          </TouchableOpacity>
        </View>


        {/* <Text>CartItem</Text> */}
      </View>


      <View style={cartStyles.flexRowGap}>


        <TouchableOpacity
          style={cartStyles.cartButton}
          onPress={() => navigate('CheckoutScreen', {
            item: item?.restaurant
          })}>
          <CustomText fontFamily='Okra-Bold' color='#fff' fontSize={10}
          >
            View Cart
          </CustomText>
          <CustomText fontFamily='Okra-Bold' color='#fff' fontSize={10}
          >
            {totalItems} item
          </CustomText>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteCart(item?.restaurant.id)}
          style={cartStyles.closeButton}
        >
          <Icon
            name='close'
            iconFamily='Ionicons'
            size={RFValue(13)}
          />

        </TouchableOpacity>

      </View>




    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const CartItem = () => {
//   return (
//     <View>
//       <Text>CartItem</Text>
//     </View>
//   )
// }

// export default CartItem

// const styles = StyleSheet.create({})