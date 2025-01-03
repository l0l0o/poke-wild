import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  StatusBar.setHidden(true);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen name="hub" options={{ title: "hub", headerShown: false }} />
    </Stack>
  );
}
