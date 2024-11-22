import { useEffect, useState } from "react";

const useGetPkmnByGeneration = (generation: number) => {
  const [pokemons, setPokemons] = useState([]);
  //   useEffect(() => {
  //   }, []);
  (async () => {
    const pokemonsJSON = await fetch(
      "https://pokebuildapi.fr/api/v1/pokemon/generation/" + generation
    );

    const pokemonsList = await pokemonsJSON.json();
    setPokemons(pokemonsList);
  })();

  return pokemons;
};

export default useGetPkmnByGeneration;
