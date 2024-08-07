import React from 'react'
import { StatusBar } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from 'tamagui'

const Vendors = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View bg={'$background'} h={'100%'} p={16} pt={insets.top + 24}>
        <Text>vendors</Text>
      </View>
    </>
  )
}

export default Vendors