import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '@states/reduxHook';
import { addCustomizableItem, cartSlice, updateCustomizableItem } from '@states/reducers/cartSlice';
import { modelStyles } from '@unistyles/modelStyles';
import CustomText from '@components/global/CustomText';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import DottedLine from '@components/list/DottedLine';
import ScalePress from '@components/ui/ScalePress';
import { RFValue } from 'react-native-responsive-fontsize';
import AnimatedNumber from 'react-native-animated-numbers';

function transformSelectedOptions(
  selectedOption: any,
  customizationOptions: any,
) {
  return Object.entries(selectedOption).map(([type, index]) => {
    const customization = customizationOptions?.find(
      (option: any) => option.type === type,
    );
    if (!customization || !customization?.options[index as number]) {
      throw new Error(`Invalid Customization type or index for  ${type}`);
    }
    return {
      type,
      selectedOption: customization?.options[index as number],
    };
  })
}



const EditItemModal: FC<{ item: any; restaurant: any; onClose: () => void; cus: any }> = ({
  item,
  restaurant,
  onClose,
  cus,
}) => {

  const dispatch = useAppDispatch()
  type DataType = {
    quantity: number;
    price: number;
    selectedOption: Record<string, number>;
  }


  const [data, setData] = useState({
    quantity: cus?.quantity,
    price: cus?.cartPrice,
    selectedOption: {} as Record<string, number>,
  })

  useEffect(() => {
    const defaultSelectedOption: Record<string, number> = {}

    let initialPrice = item?.price || 0

    cus?.customizationOptions?.forEach((cusOption: any) => {
        const itemCustomization = item?.customizations?.find(
            (option: any) => option.type === cusOption.type
        )
      if (itemCustomization) {
        const selectedIndex = itemCustomization?.options?.findIndex(
          (option: any) => option?.name === cusOption?.selectedOption?.name,
        );
        if (selectedIndex !== -1) {
          defaultSelectedOption[cusOption?.type] = selectedIndex;
        }
      }
    });

    setData(prevData => ({
      ...prevData,
      selectedOption: defaultSelectedOption,
    }));

  }, [item, cus]);



  const calculatePrice = (
    quantity: number,
    selectedOption: Record<string, number>
  ) => {
    const basePrice = item?.price || 0;
    let customizationPrice = 0;

    Object.keys(selectedOption).forEach(type => {
      const optionIndex = selectedOption[type];
      const optionPrice = item?.customizationOptions?.find((c: any) => c.type === type)?.options?.[optionIndex]?.price || 0;
      customizationPrice += optionPrice;
    });
    return (basePrice + customizationPrice) * quantity;
  };

  const selectOptionHandler = (type: string, index: number) => {
    setData(prevData => {
      const updatedSelectedOption = { ...prevData.selectedOption, [type]: index };
      const updatedPrice = calculatePrice(
        prevData?.quantity,
        updatedSelectedOption,
      );

      return {
        ...prevData,
        selectedOption: updatedSelectedOption,
        price: updatedPrice,
      }
    })
  }


  const addCartHandler = () => {
    setData(prevData => ({
      ...prevData,
      quantity: prevData?.quantity + 1,
      price: calculatePrice(prevData?.quantity + 1, prevData?.selectedOption)
    }))
  }

  const removeCartHandler = () => {
    if (data?.quantity > 1) {
      setData(prevData => ({

        ...prevData,
        quantity: prevData?.quantity - 1,
        price: calculatePrice(prevData?.quantity - 1, prevData?.selectedOption)
      }));
    } else {
      onClose();
    }
  };


  const updateItemIntoCart = async () => {
    const customizationOptions = transformSelectedOptions(
      data?.selectedOption,
      item?.customizationOptions,
    ).sort((a, b) => a.type.localeCompare(b.type));

    const customizedData = {
      restaurant_id: restaurant?.id,
      itemId: item?.id,
      customizationId: cus?.id,
      newCustomization:{
        quantity: data?.quantity,
        price: data?.price,
        customizationOptions: customizationOptions,
      },
    };

    dispatch(updateCustomizableItem(customizedData));
    onClose();
  }


  return (
    <View>
      <View style={modelStyles.headerContainer}>
        <View style={modelStyles.flexRowGap}>
          <Image source={{ uri: item?.image }}
            style={modelStyles.headerImage} />
            <View>

          <CustomText fontFamily='Okra-Medium' fontSize={12}> {item?.name}</CustomText>
          <CustomText fontFamily='Okra-Medium' fontSize={12}> Edit </CustomText>
            </View>
        </View>

        <View style={modelStyles.flexRowGap}>
          <TouchableOpacity style={modelStyles.icon}>
            <Icon
              name='bookmark-outline'
              iconFamily='Ionicons'
              color={Colors.primary}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity style={modelStyles.icon}>
            <Icon
              name='share-outline'
              iconFamily='Ionicons'
              color={Colors.primary}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={modelStyles.scrollContainer}>
        {item?.customizationOptions?.map((customizations: any, index: number) => {
          return (
            <View style={modelStyles.subContainer} key={index}>
              <CustomText fontFamily='Okra-Bold'>
                {customizations?.type}
              </CustomText>
              <CustomText fontFamily='Okra-Medium' variant='h7' color='#686666'>
                {customizations?.required
                  ? "Required • Select any 1 option"
                  : `Add on your ${customizations?.type}`}
              </CustomText>
              <DottedLine />

              {
                customizations?.options?.map((option: any, i: number) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      style={modelStyles.optionContainer}
                      onPress={() => {
                        selectOptionHandler(customizations?.type, i)
                      }}>
                      <CustomText fontFamily='Okra-Medium' fontSize={12}>
                        {option?.name}
                      </CustomText>
                      <View style={modelStyles.flexRowGap}>
                        <CustomText fontSize={12} fontFamily='Okra-Bold' > ₹{option?.price}</CustomText>
                        <Icon
                          name={
                            data?.selectedOption[customizations.type] === i
                              ? 'radio-button-on-outline'
                              : 'radio-button-off-outline'
                          }
                          iconFamily='Ionicons'
                          color={
                            data?.selectedOption[customizations.type] === i
                              ? Colors.active
                              : "#444343"
                          }
                          size={16}
                        />
                      </View>
                    </TouchableOpacity>
                  )
                })
              }

            </View>
          )
        })}
      </ScrollView>

      <View style={modelStyles.footerContainer}>
        <View style={modelStyles.selectedContainer}>
          <ScalePress onPress={removeCartHandler}>
            <Icon
              iconFamily='FontAwesome'
              color={Colors.active}
              name='minus'
              size={RFValue(13)}
            />
          </ScalePress>
          <AnimatedNumber
            includeComma={false}
            animationDuration={300}
            animateToNumber={data?.quantity}
            fontStyle={modelStyles.animatedCount}
          />
          <ScalePress onPress={addCartHandler}>
            <Icon
              iconFamily='FontAwesome'
              color={Colors.active}
              name='plus'
              size={RFValue(13)}
            />
          </ScalePress>
        </View>
        <TouchableOpacity
          style={[modelStyles.addButtonContainer, { margin: 12 }]}
          onPress={updateItemIntoCart}
        >
          <CustomText color='#fff' fontFamily='Okra-Medium' variant='h5'>
            Update Item - ₹{data?.price}
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditItemModal

