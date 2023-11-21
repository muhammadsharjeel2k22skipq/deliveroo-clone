import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/solid';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>

      <View className='flex-row mt-4 items-center justify-between px-4'>
        <Text className='font-bold text-lg'> {title} </Text>
        <ArrowRightIcon color={'#00CCBB'} />
      </View>

      <Text className='text-xs px-4 text-gray-500'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
       >
        <RestaurantCard 
          id={123}
          imgUrl={'http://links.papareact.com/gn7'}
          title={'Yo! Sushi'}
          rating={4.5}
          genre={'Japanese'}
          address={'123 Main St.'}
          short_description={'This is test description'}
          dishes={[]}
          long={20}
          lat={32}
        />

        <RestaurantCard 
          id={123}
          imgUrl={'http://links.papareact.com/gn7'}
          title={'Yo! Sushi'}
          rating={4.5}
          genre={'Japanese'}
          address={'123 Main St.'}
          short_description={'This is test description'}
          dishes={[]}
          long={20}
          lat={32}
        />

      </ScrollView>

    </View>
  )
}

export default FeaturedRow;
