import { Stack } from "expo-router"
import ROUTES from "../../constants/routes"

const PlaceOrderLayout = () => {
  return <Stack>
    <Stack.Screen
      name={ROUTES.order.name}
      options={{
        headerShown: false,
        title: 'Place Orders',
      }}
    />
    <Stack.Screen
      name={ROUTES.details.name}
      options={{
        presentation: "fullScreenModal",
        headerShown: false,
        title: 'Details',
      }}
    />
  </Stack>
}

export default PlaceOrderLayout