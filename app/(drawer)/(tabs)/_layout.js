import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "Notifications",
          title: "Notifications"
        }}
      />
    </Tabs>
  );
}