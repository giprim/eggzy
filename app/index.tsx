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
  H6,
  Text,
} from "tamagui";
import ROUTES from "../constants/routes";

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
          <Text fontSize={20} fontWeight={600} textAlign="center">Authentication</Text>
          <View pt='$3'>
            <Button onPress={handleGoogleLogin} bg={'$backgroundHover'} color={'$red10Dark'} borderColor={'$red10Dark'} size={'$5'}>Continue with Google</Button>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Landing;
