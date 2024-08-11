import { Stack, Tabs } from "expo-router";
import { useTheme, } from "tamagui";
import { Home, MessageCircle, Settings, ShoppingBasket } from 'lucide-react-native';
import ROUTES from "../../constants/routes";


export default function TabLayout() {
  const theme = useTheme()
  return (
    <>
      <Tabs
        screenOptions={{
          headerTransparent: true,
          headerTintColor: theme.color.val,
          tabBarActiveTintColor: theme.color.val,
          tabBarInactiveTintColor: theme.color7.val,
          tabBarStyle: { backgroundColor: theme.background.val }
        }}
      >
        <Tabs.Screen
          name={'index'}
          options={{
            title: ROUTES.dashboard.title,
            headerShown: false,
            tabBarIcon: ({ color }) => <Home color={color} />,
          }}
        />
        <Tabs.Screen
          name={ROUTES.vendors.name}
          options={{
            title: ROUTES.vendors.title,
            headerShown: false,
            tabBarIcon: ({ color }) => <ShoppingBasket color={color} />,
          }}
        />
        <Tabs.Screen
          name={ROUTES.messages.name}
          options={{
            title: ROUTES.messages.title,
            tabBarIcon: ({ color }) => <MessageCircle color={color} />,
          }}
        />
        <Tabs.Screen
          name={ROUTES.settings.name}
          options={{
            title: ROUTES.settings.title,
            tabBarIcon: ({ color }) => <Settings color={color} />,
          }}
        />

      </Tabs>
    </>
  );
}
