import { useEffect, useState } from "react";

const useGetPkmns = (type: string) => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      const pokemonsJSON = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon/type/" + type
      );

      const pokemonsList = await pokemonsJSON.json();
      setPokemons(pokemonsList);
    })();
  }, []);

  return pokemons;
};

export default useGetPkmns;
