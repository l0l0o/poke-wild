import { useEffect, useState } from "react";

const useGetPkmnByName = (pokemonName: string) => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      const pokemonsJSON = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon/" + pokemonName
      );

      const pokemonsList = await pokemonsJSON.json();
      setPokemons(pokemonsList);
    })();
  }, []);

  return pokemons;
};

export default useGetPkmnByName;
