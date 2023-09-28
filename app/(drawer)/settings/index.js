import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: "SETTINGS",
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Text>Settings Page for Drawer</Text>
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
