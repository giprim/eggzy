import { useLocalSearchParams } from 'expo-router';
import { View, Text, XStack } from 'tamagui';
import { useAppContext } from '../../context';
import { formatCurrency } from '../../utils/formatCurrency';
import moment from 'moment'

export default function DetailsScreen() {
  const { orderID } = useLocalSearchParams();
  const { orders } = useAppContext()
  const value = orders.filter(item => item.id === orderID)[0]
  return (
    <View bg={'$background'} h={'100%'} p={16}>
      <XStack>
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
            <Text fontWeight={600} pb={2}>
              {/* {order.measurement === "crate" ? "c" : "p"} */}
              c
            </Text>
          </View>
        </View>

        <Text>{moment(value.createdAt).fromNow()}</Text>
      </XStack>
      {/* <Text>Details of user {orderID} </Text> */}
      {/* <Text>{value.createdAt} </Text> */}
      <Text>{value.deliveryAddress || value.pickAddress} </Text>
      <Text>{value.quantity} </Text>

      {/* {value.deliveryFee && <Text> {formatCurrency(value.deliveryFee)} </Text>} */}
      <Text>{formatCurrency(value.totalCost)}</Text>
    </View>
  );
}