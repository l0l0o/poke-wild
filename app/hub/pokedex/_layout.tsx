import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="pokemons"
        options={{ title: "pokemons", headerShown: false }}
      />
      <Stack.Screen
        name="types"
        options={{ title: "types", headerShown: false }}
      />
    </Stack>
  );
}
