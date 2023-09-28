import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home",
          tabBarIcon: ({size, color})=>{
            return <Ionicons name="md-home" size={size} color={color}/>
          }
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "Notifications",
          title: "Notifications",
          tabBarIcon: ({size, color})=>{
            return <Ionicons name="md-notifications" size={size} color={color}/>
          }
        }}
        
      />
    </Tabs>
  );
}