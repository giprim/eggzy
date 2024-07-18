import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../tamagui-web.css";

import { config } from "../tamagui.config";
import { useFonts } from "expo-font";
import { useEffect } from "react";

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
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config} >
      <Theme name={colorScheme} >
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="signup/index"
              options={{ headerTitle: "Sign up" }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  );
}
