import { router } from "expo-router";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Button,
  YStack,
  Input,
  Label,
  Anchor,
  H4,
  H5,
  H6,
} from "tamagui";
import ROUTES from "../constants/routes";
import { Twitter } from 'lucide-react-native'

const Landing = () => {
  const insets = useSafeAreaInsets();
  const handleLogin = () => {
    router.push(ROUTES.dashboard.path);
  };

  const signup = () => {
    router.push(ROUTES.signUp.path)
  }

  const handleGoogleLogin = () => {
    router.push(ROUTES.dashboard.path);
  }

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
          <H6 textAlign="center">Authentication</H6>

          <View pt='$3'>
            <Button onPress={handleGoogleLogin} bg={'$backgroundHover'} color={'$red10Dark'} borderColor={'$red10Dark'} size={'$5'}>Continue with Google</Button>
          </View>

          <YStack gap="$2" pt='$3' display="none">
            <View>
              <Label htmlFor="username">Username</Label>
              <Input placeholder="Username" id="username" size={'$5'} />
            </View>
            <View>
              <Label htmlFor="password">Password</Label>
              <Input
                autoComplete="password"
                textContentType="password"
                secureTextEntry
                autoCorrect={false}
                spellCheck={false}
                inlineImageLeft="search_icon"
                placeholder="Password"
                id="password"
                size={'$5'} />
            </View>
            <Button
              mt="$4"
              theme={'dark_accent'}
              fontWeight={"bold"}
              onPress={handleLogin}
            >
              Login
            </Button>
          </YStack>
          <Anchor
            onPress={signup}
            style={{ paddingTop: 16 }}
            display="none"
          >
            Don't have an account?
          </Anchor>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Landing;
