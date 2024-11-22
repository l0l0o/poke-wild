import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="allPokemons"
        options={{ title: "allPokemons", headerShown: false }}
      />
      <Stack.Screen
        name="[generation]"
        options={{ title: "PokemonByGeneration", headerShown: false }}
      />
      <Stack.Screen
        name="details/[name]"
        options={{ title: "pokemon", headerShown: false }}
      />
    </Stack>
  );
}
