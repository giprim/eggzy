import { useNavigation } from "expo-router"
import { ArrowLeft } from "lucide-react-native"
import { Button } from "tamagui"


const BackBtn = () => {
  const navigate = useNavigation()
  return <Button
    w={'$8'}
    size={'$2'}
    icon={<ArrowLeft />}
    onPress={() => navigate.goBack()}
    bg={'$color3'}
  >back</Button>
}

export default BackBtn
