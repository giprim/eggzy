import { Link } from "expo-router";
import { useMemo, useState, } from "react";
import { Button, H2, Input, Text, View, XStack, YStack, Label, Separator, useTheme } from "tamagui";
import { formatCurrency } from "../../utils/formatCurrency";
import { Switch } from "react-native";
import ROUTES from "../../constants/routes";

export default function ModalScreen() {
  const theme = useTheme()
  const [pricePerCrate, setPricePerCrate] = useState(5000)
  const [availableCrates, setAvailableCrates] = useState(28)
  const [quantity, setQuantity] = useState(1)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleChange = (input: string) => {
    const value = Number(input)
    setQuantity(value)
  }

  const validate = () => {
    if (quantity >= availableCrates) {
      setQuantity(availableCrates)
      return
    }
    if (quantity <= 1) {
      setQuantity(1)
      return
    }
  }


  const cratesAndPrice = useMemo(() => quantity * pricePerCrate, [quantity])
  const delivery = useMemo(() => {
    const result = cratesAndPrice * 0.1
    if (result <= 2000) return 2000
    return result
  }, [cratesAndPrice])

  const totalAmount = isEnabled ? delivery + cratesAndPrice : cratesAndPrice


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

      {isEnabled ? <View py={6}>
        <Text fontWeight={700} pb={2}>My address:</Text>
        <Text fontWeight={400} fontStyle="italic" >3rd floor Opposite my neighbor's house, close to the road</Text>
        <Link href={ROUTES.settings.path} asChild>
          <Text
            color={'$red10Light'}
            textDecorationLine="underline" py={16}>Change address</Text>
        </Link>
      </View>
        : <View py={6}>
          <Text fontWeight={700} pb={2}>Pickup location:</Text>
          <Text fontWeight={400} fontStyle="italic" >10th block close chief's house</Text>
        </View>
      }

      <Button bg={'$color7'} color={'$white1'}>Place order</Button>
    </YStack>
  </View>
}
