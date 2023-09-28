import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, View } from "react-native";

export default function NextPage() {
  return (
    <View style={styles.container}>
      <Text>Next Page for Drawer</Text>
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
