import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, StarIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch } from 'react-redux';

import { BasketIcon, DishRow } from '../components';
import { setRestaurant } from '../features/restaurantSlice';
import { urlFor } from '../sanity';


const RestaurantScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { params: {
    id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
  } } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
     headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(setRestaurant({
      id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
    }))
  }, [dispatch]);
  
  return (
    <>
      <BasketIcon />
      <ScrollView>

        <View className='relative'>
          <Image source={{ uri: urlFor(imgUrl).url() }} className='w-full h-56 p-4 bg-gray-300' />

          <TouchableOpacity className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full' onPress={navigation.goBack}>
            <ArrowLeftIcon size={20} color='#00CCBB' />
          </TouchableOpacity>
        </View>

        {/* Store text */}
        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>

            <View className='flex-row space-x-2 my-1 max-w-[62%]'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon color={'green'} size={22} opacity={0.5} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-green-500'>{rating}</Text> • {genre}
                </Text>
              </View>

              <View className='flex-row space-x-1 items-center'>
                <MapPinIcon color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>Nearby • {address}</Text>
              </View>
            </View>

            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
          </View>

          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={22} />
            <Text className='flex-1 pl-2 text-sm font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color='#00CCBB' />
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <View className='pb-36'>
          <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Menu</Text>
          {dishes?.map((dish, key) => (
            <DishRow 
              key={key}
              id={dish?._id}
              name={dish?.name}
              description={dish?.short_description}
              price={dish?.price}
              image={dish?.image}
            />
          ))}
        </View>

      </ScrollView>
    </>
  )
}

export default RestaurantScreen;
