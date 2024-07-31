import { Tabs } from "expo-router";
import { useTheme, } from "tamagui";
import { Home, MessageCircle, Settings } from 'lucide-react-native';


export default function TabLayout() {
  const theme = useTheme()
  return (

    <Tabs
      screenOptions={{
        headerTransparent: true,
        headerTintColor: theme.color.val,
        tabBarActiveTintColor: theme.color.val,
        tabBarInactiveTintColor: theme.outlineColor.val,
        tabBarStyle: { backgroundColor: theme.color1.val }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => <MessageCircle color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Settings color={color} />,
        }}
      />
    </Tabs>

  );
}
