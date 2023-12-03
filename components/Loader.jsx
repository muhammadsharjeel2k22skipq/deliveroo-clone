import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View>
       <LottieView source={require('../assets/LoaderAnimation.json')} autoPlay loop style={{ width: 300, height: 300 }} />
    </View>
  )
}

export default Loader;
