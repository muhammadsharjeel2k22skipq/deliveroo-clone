import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';
import FeaturedRow from './FeaturedRow';

const dummayArray = [
    {id: 1, title: 'Testing', imgUrl: 'https://links.papareact.com/gn7'},
    {id: 2, title: 'Testing', imgUrl: 'https://links.papareact.com/wru'},
    {id: 3, title: 'Testing', imgUrl: 'https://links.papareact.com/wru'}
];

const Categories = () => {
  return (
    <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{
          paddingHorizontal: 15, 
          paddingTop: 10
       }}
    >
      <View className='flex-row'>
        {dummayArray?.map((item) => <CategoryCard title={item?.title} imgUrl={item?.imgUrl} key={item?.id} />)}
      </View>

    </ScrollView>
  )
}

export default Categories;
