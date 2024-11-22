import { useEffect, useState } from "react";

const useGetPkmns = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    (async () => {
      const pokemonsJSON = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon"
      );

      const pokemonsList = await pokemonsJSON.json();
      setPokemons(pokemonsList);
    })();
  }, []);

  return pokemons;
};

export default useGetPkmns;
