import { Tabs } from "expo-router";

export default function HubLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="pokedex/index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="wilds"
        options={{ title: "Wilds", headerShown: false }}
      />
    </Tabs>
  );
}
