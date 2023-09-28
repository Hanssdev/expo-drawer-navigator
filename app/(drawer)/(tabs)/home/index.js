import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: "HOME",
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Text>Index Page of Home Tab</Text>
      <Link href={'/(drawer)/home/next-page'}>
      <Text>Go to next page</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
