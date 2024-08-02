import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme, useTheme } from "tamagui";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../tamagui-web.css";

import { config } from "../tamagui.config";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import ROUTES from "../constants/routes";
import ContextProvider from "../context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "home",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const theme = useTheme()
  const colorScheme = useColorScheme();

  return (
    <ContextProvider>
      <TamaguiProvider config={config} >
        <Theme name={colorScheme} >
          <SafeAreaProvider>
            <Stack>
              <Stack.Screen name={ROUTES.index.name} options={{ headerShown: false }} />
              <Stack.Screen
                name={ROUTES.signUp.name}
              // options={{ headerShown: false }}
              />
              <Stack.Screen name={ROUTES.dashboard.name} options={{ headerShown: false }} />
              <Stack.Screen name={'placeOrder'} options={{
                presentation: "modal",
                headerShown: false,
                // title: 'Place Orders',
              }} />
            </Stack>
          </SafeAreaProvider>
        </Theme>
      </TamaguiProvider>
    </ContextProvider>
  );
}
