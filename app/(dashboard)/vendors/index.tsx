import React from 'react'
import { Dimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, XStack, ScrollView } from 'tamagui'
import CategoryCard from '../../../components/categoryCard';

const Vendors = () => {
  const insets = useSafeAreaInsets();
  const { width, height } = Dimensions.get('window')
  return (
    <ScrollView bg={'$background'} p={16} pt={insets.top + 24} pb={'$20'}>
      <Text pb={16}>Categories</Text>
      <XStack flexDirection='row' flexWrap='wrap' gap={'$2'} >
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </XStack>
    </ScrollView>
  )
}

export default Vendors