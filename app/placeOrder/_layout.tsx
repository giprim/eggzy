import { Stack } from "expo-router"
import ROUTES from "../../constants/routes"

const PlaceOrderLayout = () => {
  return <Stack>
    <Stack.Screen
      name={ROUTES.placeOrder.name}
      options={{
        headerShown: false,
        title: 'Place Orders',
        presentation: 'modal'
      }}
    />
  </Stack>
}

export default PlaceOrderLayout