import { Link, router } from "expo-router";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Text,
  Button,
  YStack,
  Input,
  Label,
  Anchor,
  H4,
  useTheme,
} from "tamagui";

const Landing = () => {
  const insets = useSafeAreaInsets();
  const handleLogin = () => {
    router.push("/(tabs)");
    // router.push("/(signup)");
  };

  const keyboardVerticalOffset = Platform.OS === "ios" ? 4 : 0;

  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
    >
      <View
        onPress={Keyboard.dismiss}
        bg={'$background'}
        accessible={false}
        flex={1}
        justifyContent="center"
        pt={insets.top}
      >
        <View p="$4" maxWidth={500} w={"100%"} alignSelf="center">
          <H4>Welcome back</H4>
          <YStack space="$2">
            <View>
              <Label htmlFor="username">Username</Label>
              <Input placeholder="Username" id="username" size={'$5'} />
            </View>
            <View>
              <Label htmlFor="password">Password</Label>
              <Input placeholder="Password" id="password" size={'$5'} />
            </View>
            <Button
              mt="$4"
              theme={'accent'}
              fontWeight={"bold"}
              onPress={handleLogin}
            >
              Login
            </Button>
          </YStack>
          <Anchor
            href="/signup"
            style={{ paddingTop: 16 }}
          >
            Don't have an account?
          </Anchor>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Landing;
