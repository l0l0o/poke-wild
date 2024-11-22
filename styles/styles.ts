import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Couleur de fond claire pour un design propre
    paddingTop: 20,
    paddingHorizontal: 10,
    gap: 24,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#app/hub/pokedex/index.tsx", // Jaune Pokémon
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff", // Fond blanc pour chaque carte Pokémon
    marginRight: 20,
    borderRadius: 10, // Coins arrondis pour un design moderne
    elevation: 5, // Ombre pour un effet de profondeur
    shadowColor: "#000", // Ombre sous l'élément
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100, // Taille d'image ajustée
    height: 100,
    borderRadius: 10, // Coins arrondis pour les images
    marginBottom: 10,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Couleur sombre pour le texte
    textAlign: "center",
  },
});

export default styles;
