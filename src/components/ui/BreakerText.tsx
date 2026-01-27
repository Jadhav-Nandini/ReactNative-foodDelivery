// import { StyleSheet, Text, View } from 'react-native'
// import React, {FC} from 'react'
// import { loginStyles } from '@unistyles/authStyles'
// import CustomText from '@components/global/CustomText'


// const BreakerText: FC <{ text: string }> = ({ text }) => {
//   return (
//     <View style={loginStyles.bottomContainer}>
//         <View  style={loginStyles.horizontalLine}/>
//         <CustomText
//         fontSize={12}
//         fontFamily='Okra-Medium'
//         // style={loginStyles.breakerText}
//         style={loginStyles.footerText}
//         >
//             {text}
//         </CustomText>
//     <View style={loginStyles.horizontalLine} />
//     </View>
//   )
// }

// export default BreakerText





import { View } from 'react-native'
import React from 'react'
import { loginStyles } from '@unistyles/authStyles'
import CustomText from '@components/global/CustomText'

interface BreakerTextProps {
  text: string
}

function BreakerText({ text }: BreakerTextProps) {
  return (
    <View style={loginStyles.breakerContainer}>
      <View style={loginStyles.horizontalLine} />

      <CustomText
        fontSize={12}
        fontFamily="Okra-Medium"
        style={loginStyles.title}
      >
        {text}
      </CustomText>

      <View 
      style={loginStyles.horizontalLine} />
    </View>
  )
}

export default BreakerText




// import { View } from 'react-native';
// import React from 'react';
// import { splashStyles } from '@unistyles/authStyles';
// import { useUnistyles } from 'react-native-unistyles';

// import CustomText from '@components/global/CustomText';

// interface BreakerTextProps {
//   text: string;
// }

// function BreakerText({ text }: BreakerTextProps) {
//   const { styles } = useUnistyles(splashStyles); // ✅ v3 way

//   return (
//     <View style={styles.breakerContainer}>
//       <View style={styles.horizontalLine} />
//       <CustomText fontSize={12} fontFamily="Okra-Medium" style={styles.title}>
//         {text}
//       </CustomText>
//       <View style={styles.horizontalLine} />
//     </View>
//   );
// }

// export default BreakerText;
