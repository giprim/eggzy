import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'tamagui';
import { useAppContext } from '../../context';
import { formatCurrency } from '../../utils/formatCurrency';

export default function DetailsScreen() {
  const { orderID } = useLocalSearchParams();
  const { orders } = useAppContext()
  const value = orders.filter(item => item.id === orderID)[0]
  return (
    <View bg={'$background'} h={'100%'}>
      {/* <Text>Details of user {orderID} </Text> */}
      <Text>{value.createdAt} </Text>
      <Text>{value.deliveryAddress || value.pickAddress} </Text>
      <Text>{value.quantity} </Text>

      {/* {value.deliveryFee && <Text> {formatCurrency(value.deliveryFee)} </Text>} */}
      <Text>{formatCurrency(value.totalCost)}</Text>
    </View>
  );
}