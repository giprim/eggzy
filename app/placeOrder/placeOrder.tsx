import { Link } from "expo-router";
import { Button, H2, Input, Text, View, XStack, YStack, Label, Separator } from "tamagui";
import { formatCurrency } from "../../utils/formatCurrency";
import { Switch } from "react-native";
import ROUTES from "../../constants/routes";
import { usePlaceOrder } from "./usePlaceOrder";

export default function ModalScreen() {
  const {
    delivery,
    availableCrates,
    handleChange,
    handleSubmit,
    pricePerCrate,
    validate,
    quantity,
    isEnabled,
    isValid,
    cratesAndPrice,
    toggleSwitch,
    totalAmount,
    theme,
    address,
    typeOfAddress
  } = usePlaceOrder()

  return <View backgroundColor={'$background'} display="flex" flexDirection="column" h={'100%'} >

    <YStack gap={16} p='$3'>
      <View display="flex" flexDirection="row" alignItems="baseline">
        <H2>{availableCrates}</H2>
        <Text top={-2} pl={4} color={'$color10'}>crate(s) in stock</Text>
      </View>
      <XStack gap='$2' justifyContent="space-between" alignItems="center">
        <Input
          keyboardType="number-pad"
          value={`${quantity}`}
          placeholder="Quantity"
          onChangeText={handleChange}
          onBlur={validate}
          returnKeyType="done"
          flexBasis={'49%'}
          size={'$5'} />
        <Text fontWeight={800} fontSize={18}>1 crate = N{pricePerCrate} </Text>
      </XStack>

      <XStack pt={16} justifyContent="center" mx='auto' alignItems="center" gap="$4">
        <Label htmlFor={'delivery'}>Pickup</Label>

        <Switch
          trackColor={{ false: theme.accentColor.val, true: theme.color4.val }}
          thumbColor={isEnabled ? theme.color7.val : theme.gray5Light.val}
          ios_backgroundColor={theme.background.val}
          onValueChange={toggleSwitch}
          value={isEnabled}
          nativeID="delivery"
        />
        <Label htmlFor={'delivery'}>Delivery</Label>
      </XStack>

      <Separator minHeight={20} />
      <XStack pb={1} justifyContent="space-between">
        <Text >{quantity} crate </Text>
        <Text > = {formatCurrency(cratesAndPrice)} </Text>
      </XStack>
      {isEnabled && <XStack justifyContent="space-between">
        <Text >Delivery </Text>
        <Text > = {formatCurrency(delivery)} </Text>
      </XStack>}
      <XStack justifyContent="space-between">
        <Text >Total </Text>
        <Text fontWeight={800} fontSize={18}> = {formatCurrency(totalAmount)} </Text>
      </XStack>
      <Separator minHeight={2} />

      <View py={6}>
        <Text fontWeight={700} pb={2}>{address[typeOfAddress].title}</Text>
        <Text fontWeight={400} fontStyle="italic" >{address[typeOfAddress].address}</Text>
        {isEnabled &&
          <Link href={ROUTES.settings.path} asChild>
            <Text
              color={'$red10Light'}
              textDecorationLine="underline" py={16}>Change address</Text>
          </Link>
        }
      </View>

      <Button bg={'$color7'} disabled={!isValid}
        disabledStyle={{ backgroundColor: theme.gray10Dark.val }}
        color={'$white1'} onPress={handleSubmit}>Place order</Button>
    </YStack>
  </View>
}
