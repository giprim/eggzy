import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, XStack, YStack, Separator, Button, H6, Tabs } from 'tamagui';
import { useAppContext } from '../../context';
import { formatCurrency } from '../../utils/formatCurrency';
import moment from 'moment'
import { Equal, Plus, X } from 'lucide-react-native';
import { AlertColor, Status } from '../../constants/records';
import { useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ROUTES from '../../constants/routes';

export default function DetailsScreen() {
  const { orderID } = useLocalSearchParams();
  const { orders } = useAppContext()
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme()
  const value = orders.filter(item => item.id === orderID)[0]
  return (
    <View bg={'$background'} h={'100%'} p={16}>
      <XStack justifyContent='space-between' gap={16} pb={16}>
        <XStack alignItems='center' gap={16} >
          <View
            borderRadius={200}
            h={50}
            w={50}
            display='flex'
            justifyContent='center'
            alignItems='center'
            bg={'$color3'}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text fontWeight={600} pb={2}>{value.quantity}</Text>
              <Text fontWeight={600} pb={2}>c</Text>
            </View>
          </View>
          <View>
            <Text >{moment(value.createdAt).fromNow(true)}</Text>
            <Text fontSize={12}>{value.quantity} crate{value.quantity > 1 ? 's' : ''}</Text>
          </View>
        </XStack>
        <View>
          <View px={10} py={4} borderRadius={4} bg={Status[value.status!][colorScheme!]}>
            <Text textTransform="capitalize">{value.status}</Text>
          </View>
        </View>
      </XStack>

      <YStack gap={10} pb={24}>

        <XStack gap={8} alignItems='center'>
          <Text fontWeight={700} fontSize={18}>Quantity:  </Text>
          <Text fontSize={18}>{value.quantity} </Text>
        </XStack>

        <XStack gap={8} alignItems='center'>
          <Text fontWeight={700} fontSize={18}>Price Per Crate: </Text>
          <Text fontSize={18}>{formatCurrency(value.pricePerCrate)}</Text>
        </XStack>

        {value.isDelivery && <XStack gap={8} alignItems='center'>
          <Text fontWeight={700} fontSize={18}>Delivery Fee: </Text>
          <Text fontSize={18}>{formatCurrency(value.deliveryFee)}</Text>
        </XStack>
        }

        <View p={16} my={10} bg={'$accentBackground'} borderRadius={8}>
          <XStack gap={4} alignItems='center'>

            {
              value.isDelivery && <>
                <Text fow={700}>{value.deliveryFee}</Text>
                <Plus color={'white'} size={12} /></>
            }
            <XStack gap={4} alignItems='center'>
              <Text>(</Text>
              <Text fow={700}>{value.quantity}</Text>
              <X color={'white'} size={12} />
              <Text fow={700}>{value.pricePerCrate}</Text>
              <Text>)</Text>
            </XStack>

            <Equal color={'white'} size={12} />
            <Text fow={700}>{value.totalCost}</Text>
          </XStack>
        </View>

        <XStack gap={8} alignItems='center'>
          <Text fontWeight={700} fontSize={18}>Total Cost: </Text>
          <Text color={'$red10Dark'} fontSize={18} fontWeight={700}>{formatCurrency(value.totalCost)}</Text>
        </XStack>

      </YStack>
      <Separator />
      <XStack py={10} columnGap={8} rowGap={4} alignItems='center' flexWrap='wrap'>
        <Text fontWeight={700} fontSize={18}>{value.isDelivery ? 'Delivery' : 'Pickup'} Address: </Text>
        <Text fontSize={18} fontStyle='italic'>{value.deliveryAddress || value.pickAddress} </Text>
      </XStack>

      {value.status === 'pending' && <>

        <View pt={20}>
          <H6>Payment method</H6>

        </View>

        <View
          position='absolute'
          left={insets.left}
          right={insets.right}
          bottom={insets.bottom}
          px={16}
        >

          <YStack gap={16}>
            <Link href={ROUTES.vendors.path + '2'} asChild>
              <Button size={'$5'} bg={'$color3'}>View vendor</Button>
            </Link>
            <Button fontWeight={800} size={'$5'} bg={AlertColor.warning[colorScheme!]} >Pay {formatCurrency(value.totalCost)}</Button>
          </YStack>
        </View>
      </>}
    </View>
  );
}