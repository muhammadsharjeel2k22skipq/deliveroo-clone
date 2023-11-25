import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/style';
import { urlFor } from '../sanity';


const RestaurantCard = ({id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity className='bg-white mr-3 shadow w-64' 
      onPress={() => navigation.navigate('Restaurant', {
        id, imgUrl, title, rating, genre, address, short_description, dishes, lat, long
      })}
     >
      <Image 
        source={{ uri: urlFor(imgUrl)?.url() }}
        className='w-64 h-36 rounded-sm'
      />

      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'> {title} </Text>
        
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

    </TouchableOpacity>
  )
}

export default RestaurantCard;
