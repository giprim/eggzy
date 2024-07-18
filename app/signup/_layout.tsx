import { Stack } from "expo-router";

const SignUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="signup/index" options={{ headerTitle: "Sign up" }} />
    </Stack>
  );
};

export default SignUpLayout;
