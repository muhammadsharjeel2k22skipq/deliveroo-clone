import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

import { Loader } from '../components';
import { useNavigation } from '@react-navigation/native';


const PreperingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000);
  }, []);

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 items-center justify-center'>
      <Loader />
      <Animatable.Text 
        animation='slideInUp'
        iterationCount={1}
        className='text-lg text-white font-bold text-center p-10 mt-10'
       >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={30} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreperingOrderScreen;
