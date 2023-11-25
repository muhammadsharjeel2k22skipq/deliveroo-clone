import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { Categories, FeaturedRow } from '../components';
import { client } from '../sanity';


const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    useEffect(() => {
       client.fetch(
        `*[_type == "featured"] {
            ...,
            restaurants[] -> {
              ...,
              dishes[] -> {
                ...,
              },
              type {
                name
              }
            }
        }`
       ).then((res) => setFeaturedCategories(res));
    }, [featuredCategories]);


    
    
  return (
    <SafeAreaView className='bg-white pt-5'>

        {/* Header */}
        <View className='flex-row items-center pb-3 mx-4 space-x-2'>
            <Image
              source={{ uri: 'https://links.papareact.com/wru' }} 
              className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <View className='flex-1'>
                <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
                <Text className='font-bold text-xl'>
                    Current Location
                    <ChevronDownIcon  size={20} color={'#00CCBB'} />
                </Text>
            </View>
            <UserIcon size={35} color='#00CCBB' />
        </View>

        {/* Search */}
        <View className='flex-row items-center space-x-2 mx-4 pb-2'>
            <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
                <MagnifyingGlassIcon color='#00CCBB' size={20} />
                <TextInput placeholder='Restaurants and Cusines' keyboardType='default' />
            </View>
            <AdjustmentsVerticalIcon color='#00CCBB' />
        </View>

        {/* Body */}
        <ScrollView>
            <Categories />

            {featuredCategories?.map((category, key) => (
                <FeaturedRow 
                  key={key}
                  id={category?._id}
                  title={category?.name}
                  description={category?.short_description}
                />
            ))}

        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;
