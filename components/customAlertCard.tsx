import { X } from "lucide-react-native"
import { useColorScheme } from "react-native"
import { Button, Text, View } from "tamagui"
import { alertType, AlertColor } from "../constants/records"

type Props = {
  title: string,
  message: string,
  closeAction: () => void
  bgColor?: alertType
}



const CustomAlertCard = (props: Props) => {
  const colorScheme = useColorScheme();
  const { closeAction, title = 'Alert', message } = props
  const backgroundColor = props.bgColor ? AlertColor[props.bgColor][colorScheme!] : AlertColor.default[colorScheme!]
  return (
    <View p={16} backgroundColor={backgroundColor} borderRadius={10} mt={8}>
      <View flexDirection='row' alignItems='center' display='flex' justifyContent='space-between'>
        <Text fontWeight={800} >{title}</Text>
        <Button onPress={closeAction} size={18} mt={-10} icon={<X />}></Button>
      </View>

      <Text fontWeight={400} fontSize={18} pt={4}>
        {message}
      </Text>
    </View>
  )
}

export default CustomAlertCard