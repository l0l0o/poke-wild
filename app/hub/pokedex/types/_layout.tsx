import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="allTypes"
        options={{ title: "allPokemons", headerShown: false }}
      />
      <Stack.Screen
        name="details/[type]"
        options={{ title: "pokemon", headerShown: false }}
      />
    </Stack>
  );
}
