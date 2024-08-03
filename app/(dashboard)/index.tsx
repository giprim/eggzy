import { Avatar, Button, Text, useTheme, View } from 'tamagui'
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BellDot } from 'lucide-react-native'
import CustomAlertCard from '../../components/customAlertCard';
import ROUTES from '../../constants/routes';
import { useAppContext } from '../../context';
import HistoryItem from '../../components/historyItem';


const DashboardHomeScreen = () => {
  const { orders } = useAppContext()
  const insets = useSafeAreaInsets();
  const theme = useTheme()
  const [showAlert, setShowAlert] = useState(true)

  return (
    <>
      <StatusBar />
      <View display='flex' flex={1} padding={16} pt={insets.top} bg={'$background'}>

        <View
          display='flex'
          justifyContent='space-between'
          flexDirection='row'
          py={10}
          px={10}
          borderRadius={16}
          shadowRadius={16}
          shadowColor={'$borderColor'}
          shadowOpacity={0.6}
          shadowOffset={{ height: 16, width: 10 }}
          bg={'$color4'}
          elevationAndroid={16}
          alignItems='center'
        >
          <Avatar circular size="$3">
            <Avatar.Image
              accessibilityLabel="Nate Wienert"
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
            />
            <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
          </Avatar>

          <View display='flex' gap={20} flexDirection='row' alignItems='center'>
            <BellDot color={theme.red10Dark.val} />
            <Link href={ROUTES.order.path} asChild>
              <Button>Order</Button>
            </Link>
          </View>
        </View>


        {
          showAlert && <CustomAlertCard
            title='Update'
            bgColor='error'
            closeAction={() => setShowAlert(false)}
            message="placeat ullam similique eligendi deserunt soluta omnis sint modi est consectetur quibusdam quasi corporis, eius numquam eum? Ipsam, veniam perferendis."
          />
        }


        {/* History */}
        <View mt={24} py={16} borderRadius={8}>
          <Text pb='$3' >
            History
          </Text>
          <FlatList
            data={orders ?? []}
            style={styles.flatList}
            renderItem={({ item }) => <HistoryItem order={item} status='pending' />}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />
        </View>
      </View>
    </>
  );
};

export default DashboardHomeScreen;


const styles = StyleSheet.create({
  flatList: {
    height: 'auto',
    paddingTop: 10,
  },
});
