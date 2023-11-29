import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat } = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen;
