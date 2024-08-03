
import { router } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { useTheme } from 'tamagui'
import ROUTES from '../../constants/routes'
import { useAppContext } from '../../context'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export type addressType = 'pickup' | 'delivery'
export const address: Record<addressType, { title: string, address: string }> = {
  delivery: { title: 'Delivery address', address: `3rd floor Opposite my neighbor's house, close to the road` },
  pickup: { title: 'Pickup address', address: `10th block close chief's house` }
}

export const usePlaceOrder = () => {
  
  const { setOrder, availableCrates, setAvailableCrates } = useAppContext()
  const theme = useTheme()
  const [pricePerCrate, setPricePerCrate] = useState(5000)

  const [quantity, setQuantity] = useState(1)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleChange = (input: string) => {
    const value = Number(input)
    setQuantity(value)
  }

  const validate = () => {
    if (quantity >= availableCrates!) {
      setQuantity(availableCrates!)
    }
    if (quantity <= 1) {
      setQuantity(1)
    }
    return true
  }

  const isValid = useMemo(() => quantity <= availableCrates! && quantity > 0, [quantity, availableCrates])

  const typeOfAddress: addressType = isEnabled ? 'delivery' : 'pickup'

  const cratesAndPrice = useMemo(() => quantity * pricePerCrate, [quantity])
  const delivery = useMemo(() => {
    const result = cratesAndPrice * 0.1
    if (result <= 2000) return 2000
    return result
  }, [cratesAndPrice])

  const totalAmount = isEnabled ? delivery + cratesAndPrice : cratesAndPrice

  const handleSubmit = () => {
    setOrder({
      deliveryAddress: isEnabled ? address[typeOfAddress].address : '',
      deliveryFee: isEnabled ? delivery : 0,
      isDelivery: isEnabled,
      pickAddress: !isEnabled ? address[typeOfAddress].address : '',
      quantity: quantity,
      totalCost: totalAmount,
      createdAt: new Date().toUTCString(),
      id: uuidv4()
    })

    setAvailableCrates(prev => prev - quantity)
    router.navigate(ROUTES.dashboard.name)
  }

  
  return {
    address,
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
    delivery,
    typeOfAddress,
  }
}
