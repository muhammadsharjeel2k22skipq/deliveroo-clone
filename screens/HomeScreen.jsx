import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { Categories } from '../components';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);
    
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
        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;
