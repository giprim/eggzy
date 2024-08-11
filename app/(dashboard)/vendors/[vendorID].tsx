import { Link, useLocalSearchParams } from 'expo-router';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text, View, XStack } from 'tamagui'
import ROUTES from '../../../constants/routes';
import { ArrowLeft } from 'lucide-react-native';

const VendorProfile = () => {
  const insets = useSafeAreaInsets();
  const { vendorID } = useLocalSearchParams()
  return (
    <>
      <View bg={'$background'} h={'100%'} p={16} pt={insets.top + 24}>
        <XStack>
          <Link href={ROUTES.vendors.path} asChild>
            <Button size={'$2'} icon={<ArrowLeft />}></Button>
          </Link>
        </XStack>
        <Text>vendor profile {vendorID}</Text>
      </View>
    </>
  )
}

export default VendorProfile