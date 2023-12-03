import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';;
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { XCircleIcon } from 'react-native-heroicons/solid';
import Currency from 'react-currency-formatter';

import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotalPrice } from '../features/basketSlice';
import { urlFor } from '../sanity';


const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const subTotal = useSelector(selectBasketTotalPrice);
  

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-md'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>{title}</Text>
          </View>

          <TouchableOpacity 
            className='rounded-full text-gray-100 absolute top-3 right-5'
            onPress={navigation.goBack}
          >
            <XCircleIcon color={'#00CCBB'} width={50} height={50} />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image source={{ uri: 'https://links.papareact.com/wru' }} 
            className='w-7 h-7 bg-gray-300 p-4 rounded-full' 
          />
          <Text className='flex-1'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {items?.map((item) => (
            <View key={item?.id} className='flex-row items-center space-x-3 bg-white px-5 py-2'>
              <Text className='text-[#00CCBB]'>{item?.quantity} x</Text>
              <Image 
                source={{ uri: urlFor(item?.image).url() }}
                className='w-12 h-12 rounded-full'
              />
              <Text className='flex-1'>{item?.name}</Text>
              <Text className='text-gray-600'>
                <Currency quantity={item?.price} currency='GBP' />
              </Text>

              <TouchableOpacity onPress={() => dispatch(removeFromBasket(item))}>
                <Text className='text-[#00CCBB] text-xs'>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subotal</Text>
            <Text className='text-gray-400'>
              <Currency quantity={subTotal} currency='GBP' />
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery</Text>
            <Text className='text-gray-400'>
              <Currency quantity={3.99} currency='GBP' />
            </Text>
          </View>

          <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text className='font-extrabold'>
              <Currency quantity={subTotal + 3.99} currency='GBP' />
            </Text>
          </View>

          <TouchableOpacity className='items-center rounded-lg bg-[#00CCBB] p-4'
            onPress={() => navigation.navigate('PreperingOrderScreen')}
           >
            <Text className='text-white font-bold text-lg'>Place Order</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen;
