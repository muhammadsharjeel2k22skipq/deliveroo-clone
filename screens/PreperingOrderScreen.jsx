import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Loader } from '../components';

const PreperingOrderScreen = () => {
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 items-center justify-center'>
      <Loader text={'Sharjeel'} />
      <Text>PreperingOrderScreen</Text>
    </SafeAreaView>
  )
}

export default PreperingOrderScreen;
