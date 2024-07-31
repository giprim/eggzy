import { Stack } from "expo-router";
import ROUTES from "../../constants/routes";

export default function AuthLayout() {

  return (
    <Stack>
      <Stack.Screen name={'index'} options={{
        headerTitle: 'Sign up'
      }} />
    </Stack>
  )
}