import { X } from "lucide-react-native"
import { Button, Text, View } from "tamagui"

type Props = {
  title: string,
  message: string,
  closeAction: () => void
}

const CustomAlertCard = (props: Props) => {
  const { closeAction, title = 'Alert', message } = props
  return (
    <View p={16} backgroundColor={'$color3'} borderRadius={10} mt={8}>
      <View flexDirection='row' alignItems='center' display='flex' justifyContent='space-between'>
        <Text fontWeight={800} >{title}</Text>
        <Button onPress={closeAction} size={18} mt={-10} icon={<X />}></Button>
      </View>

      <Text fontWeight={400} pt={4}>
        {message}
      </Text>
    </View>
  )
}

export default CustomAlertCard