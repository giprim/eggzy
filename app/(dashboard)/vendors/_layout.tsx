import { Stack } from 'expo-router'
import React from 'react'

const VendorLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name='[vendorID]'
        options={{
          headerShown: false,
        }} />
    </Stack>
  )
}

export default VendorLayout