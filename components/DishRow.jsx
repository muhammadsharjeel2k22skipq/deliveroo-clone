import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false);

  return (
    <>
       <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
         className={`bg-white border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}
         > 
            <View className='flex-row gap-4'>
                <View className='max-w-[80%] flex-1'>
                    <Text className='text-lg mb-1'>{name}</Text>
                    <Text className='text-gray-400'>{description}</Text>
                    <Text className='text-gray-400 mt-2'>
                        <Currency quantity={price} currency='GBP'  />
                    </Text>
                </View>

                <View>
                    <Image source={{ uri: urlFor(image).url() }} className='w-20 h-20 rounded-md bg-gray-300 p-4' 
                    style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
                    />
                </View>
            </View>
        </TouchableOpacity>

        {isPressed && (
            <View className='bg-white px-4 pt-2'>
                <View className='flex-row items-center space-x-2 pb-3'>
                    <TouchableOpacity>
                        <MinusCircleIcon size={40} color={'#00CCBB'} />
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity>
                        <PlusCircleIcon size={40} color={'#00CCBB'} />
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>
  )
}

export default DishRow;
