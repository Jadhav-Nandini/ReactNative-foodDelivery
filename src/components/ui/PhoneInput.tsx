// import { Pressable, StyleSheet, Text, View } from 'react-native'
// import React, {FC} from 'react'
// import { phoneStyles } from '@unistyles/phoneStyles';


// interface PhoneInputProps {
//     value: string;
//     onChangeText: (text: string) => void;
//     onFocus?: () => void;
//     onBlur?: () => void;
// }

// const PhoneInput:FC<PhoneInputProps> = ({
//     value,
//     onChangeText,
//     onBlur,
//     onFocus,
// }) => {
//   return (
//     <View style={phoneStyles.container}>
//         <Pressable>

//         </Pressable>
//     </View>
//   )
// }

// export default PhoneInput

// const styles = StyleSheet.create({})




import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {FC} from 'react'
import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import CustomText from '@components/global/CustomText';


interface PhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const PhoneInput = ({
    value,
    onChangeText,
    onBlur,
    onFocus,
}: PhoneInputProps) => {
  return (
    <View style={phoneStyles.container}>
        <Pressable style={phoneStyles.countryPickerContainer}>
            <CustomText variant='h2'>🇮🇳</CustomText>
            <Icon
            iconFamily='Ionicons'
            name='caret-down-sharp'
            color={Colors.lightText}
            size={18}
          />
        </Pressable>

        <View style={phoneStyles.phoneInputContainer}>
            <CustomText fontFamily='Okra-Bold'>+91</CustomText>
            <TextInput
            placeholder='Enter Mobile Number'
            keyboardType='phone-pad'
            value={value}
            maxLength={10}
            placeholderTextColor={Colors.lightText}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            style={phoneStyles.input}
            />

        </View>
        
    </View>
  )
}

export default PhoneInput

const styles = StyleSheet.create({})