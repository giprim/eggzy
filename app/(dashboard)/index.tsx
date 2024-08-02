import { Avatar, Button, Text, useTheme, View } from 'tamagui'
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BellDot, X } from 'lucide-react-native'
import CustomAlertCard from '../../components/customAlertCard';
import ROUTES from '../../constants/routes';

type order = {
  date: string;
  cost: number;
  quantity: number;
  measurement: "crate" | "piece";
};

const DATA: order[] = [
  {
    date: "2024-03-15",
    cost: 30000,
    quantity: 12,
    measurement: "crate",
  },
  {
    date: "2024-05-28",
    cost: 25000,
    quantity: 130,
    measurement: "piece",
  },
];

const DashboardHomeScreen = () => {
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
            <Link href={ROUTES.placeOrder.path} asChild>
              <Button>Order</Button>
            </Link>
          </View>
        </View>

        {
          showAlert && <CustomAlertCard
            title='Update'
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
            data={DATA}
            style={styles.flatList}
            renderItem={({ item }) => <Card {...item} />}
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
    height: 200,
    paddingTop: 10,
  },
});

const Card = (props: order) => {
  const theme = useTheme()
  const handlePress = () => { };
  return (
    <TouchableHighlight
      onPress={handlePress}
      underlayColor={theme.accentBackground.val}
      activeOpacity={0.8}
      style={{ borderRadius: 8 }}
    >
      <View bg={'$color2'} px={16} py={10} borderRadius={8}>
        <View
          display='flex'
          flexDirection='row'
          alignItems='center'
          gap={8}
        >
          <View
            borderRadius={200}
            minWidth={50}
            minHeight={50}
            display='flex'
            justifyContent='center'
            alignItems='center'
            bg={'$color3'}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text fontWeight={600} pb={2}>{props.quantity}</Text>
              <Text fontWeight={600} pb={2}>
                {props.measurement === "crate" ? "c" : "p"}
              </Text>
            </View>
          </View>
          <View display='flex' >
            <Text fontWeight={600} pb={2}>
              {new Date(props.date).toDateString()}
            </Text>
            <Text color={'$red9Dark'}>
              N{props.cost}
            </Text>
            <Text >{props.measurement}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};
