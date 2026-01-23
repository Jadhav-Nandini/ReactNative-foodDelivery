


import { View, Text, Image } from 'react-native';
import React from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated'
import { splashStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';

const SplashScreen = () => {
  return (
    <View style={splashStyles.container}>
      {/* <Text style={splashStyles.msgText}>The App is Started...</Text> */}
      <Image 
      source={require('@assets/images/logo_t.png')}
      style={splashStyles.logoImage}
      />
      <Animated.View style={splashStyles.animatedContainer}
      entering={FadeInDown.delay(400).duration(800)}
      >
        <Image 
        source={require('@assets/images/tree.png')}
        style={splashStyles.treeImage}
        />

        <CustomText
        variant='h5'
        style={splashStyles.msgText}
        fontFamily='Okra-Medium'
        color='#fff'
        >
          From Kitchen to doorstep, Your cravings, delivered!

        </CustomText>
      </Animated.View>
      
    </View>
  );
};

export default SplashScreen;
