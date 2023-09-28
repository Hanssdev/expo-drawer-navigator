import { Drawer } from "expo-router/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false, swipeEdgeWidth: 0 }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({size, color})=>{
            return <Ionicons name="md-home" size={size} color={color}/>
          }
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: ({size, color})=>{
            return <Ionicons name="md-settings" size={size} color={color}/>
          }
        }}
      />
    </Drawer>
  );
}
