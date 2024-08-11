import { TouchableHighlight, useColorScheme, } from "react-native";
import { useTheme, View, Text } from "tamagui";
import { order } from "../context";
import { formatCurrency } from "../utils/formatCurrency";
import { Link } from "expo-router";
import ROUTES from "../constants/routes";
import moment from "moment";
import { Status, TStatus } from "../constants/records";


type Props = { order: order, status: TStatus }



const HistoryItem = (props: Props) => {
  const { order, status } = props
  const colorScheme = useColorScheme()
  const theme = useTheme()
  const handlePress = () => { };
  return (
    <Link asChild href={ROUTES.details.path(order.id!)}>
      <TouchableHighlight
        onPress={handlePress}
        underlayColor={theme.accentBackground.val}
        activeOpacity={0.8}
        style={{ borderRadius: 8 }}
      >
        <View
          bg={'$color2'}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          px={16} py={10} borderRadius={8}>
          <View
            display='flex'
            flexDirection='row'
            alignItems='center'
            gap={8}
          >
            <View
              borderRadius={200}
              minWidth={50}
              minHeight={50}
              display='flex'
              justifyContent='center'
              alignItems='center'
              bg={'$color3'}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text fontWeight={600} pb={2}>{order.quantity}</Text>
                <Text fontWeight={600} pb={2}>
                  {/* {order.measurement === "crate" ? "c" : "p"} */}
                  c
                </Text>
              </View>
            </View>
            <View display='flex' >
              <Text fontWeight={600} fontSize={12} pb={2}>
                {moment(order.createdAt).fromNow(true)}
              </Text>
              <Text color={'$red9Dark'}>
                {formatCurrency(order.totalCost)}
              </Text>
              {/* <Text >{order.measurement}</Text> */}
              <Text fontSize={10}>{order.quantity} crate{order.quantity > 1 ? 's' : ''}</Text>
            </View>
          </View>

          <View px={10} py={4} borderRadius={4} bg={Status[status][colorScheme!]}>
            <Text textTransform="capitalize">{status}</Text>
          </View>

        </View>
      </TouchableHighlight>
    </Link>
  );
};

export default HistoryItem
