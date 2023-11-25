import { View, Text, ScrollView, } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CategoryCard } from '../components';
import { client } from '../sanity';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const query = `
      *[_type == "category"] {
        ...,
      }
    `;
    client.fetch(query).then((res) => setCategories(res));
  }, []);

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
        {categories?.map((item) => <CategoryCard title={item?.name} imgUrl={item?.image} key={item?._id} />)}
      </View>

    </ScrollView>
  )
}

export default Categories;
