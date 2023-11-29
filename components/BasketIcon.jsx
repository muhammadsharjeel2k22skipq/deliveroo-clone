import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { selectBasketItems, selectBasketTotalPrice, selectBasketTotalQuantity } from '../features/basketSlice';


const BasketIcon = () => {
    const basketTotalPrice = useSelector(selectBasketTotalPrice);
    const basketTotalQuantity = useSelector(selectBasketTotalQuantity);
    const items = useSelector(selectBasketItems);

    const navigation = useNavigation();  console.log(basketTotalPrice, basketTotalQuantity);
    
  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  )
}

export default BasketIcon;
