import { Input, Select, Text, View, XStack, YStack } from "tamagui";

export default function ModalScreen() {
  return <View backgroundColor={'$background'} display="flex" flexDirection="column" h={'100%'} >

    <YStack gap='$2' p='$3'>
      <XStack gap='$2' >
        <Input placeholder="quantity" flexBasis={'49%'} size={'$5'} />
        <Input placeholder="quantity" flexBasis={'49%'} size={'$5'} />
      </XStack>
      <Input placeholder="quantity" />
      <Input placeholder="quantity" />
    </YStack>
  </View>
}
