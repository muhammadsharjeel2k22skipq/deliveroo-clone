import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';


const DeliveryScreen = () => {
  const navigation = useNavigation();
  const { id, imgUrl, title, rating, genre, address, dishes, long, lat } = useSelector(selectRestaurant);


  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row items-center justify-between p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color={'white'} size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help!</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-gray-400 text-lg'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>45-55 Minutes</Text>
            </View>
            <Image source={{ uri: 'https://links.papareact.com/fls' }}  className='w-20 h-20' />
          </View>

          <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />
          <Text className='mt-3 text-gray-500'>
            {`Your order at ${title} is being prepared`}
          </Text>
        </View>

      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen;
