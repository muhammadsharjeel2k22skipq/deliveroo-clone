import { View, Text, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/solid';
import RestaurantCard from './RestaurantCard';
import { client } from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const query = `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
          type -> {
            name,
          }
        }
      }[0]
    `;
    client.fetch(query, { id }).then((res) => setRestaurants(res?.restaurants));
  }, []);

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

        {/* Restaurants */}
        {restaurants?.map((restaurant, key) => (
            <RestaurantCard 
              key={key}
              id={restaurant?._id}
              imgUrl={restaurant?.image}
              title={restaurant?.name}
              rating={restaurant?.rating}
              genre={'Japanese'}
              address={restaurant?.address}
              short_description={restaurant?.short_description}
              dishes={restaurant?.dishes || []}
              long={restaurant?.long}
              lat={restaurant?.lat}
          />
        ))}

      </ScrollView>

    </View>
  )
}

export default FeaturedRow;
