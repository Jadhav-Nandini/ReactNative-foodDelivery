// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { useUnistyles } from 'react-native-unistyles'
// import { splashStyles } from '@unistyles/authStyles'

// const SplashScreen = () => {
//     const {styles} = useUnistyles(splashStyles)
    
//   return (
//     <View>
//       <Text>SplashScreen</Text>
//     </View>
//   )
// }

// export default SplashScreen

// const styles = StyleSheet.create({})


import { View, Text } from 'react-native';
import React from 'react';
import { splashStyles } from '@unistyles/authStyles';

const SplashScreen = () => {
  return (
    <View style={splashStyles.container}>
      <Text style={splashStyles.msgText}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
