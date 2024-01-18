import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

import { selectBasketItems, selectBasketTotalPrice, selectBasketTotalQuantity } from '../features/basketSlice';


const BasketIcon = () => {
    const basketTotalPrice = useSelector(selectBasketTotalPrice);
    const basketTotalQuantity = useSelector(selectBasketTotalQuantity);
    const basketItems = useSelector(selectBasketItems);
    const navigation = useNavigation();

    if (basketItems?.length === 0) return null;

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'
        onPress={() => navigation.navigate('Basket')}
      >
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{basketTotalQuantity}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>{'View Basket'}</Text>
        <Text className='text-lg text-white font-extrabold'>
            <Currency quantity={basketTotalPrice} currency='GBP' />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon;
