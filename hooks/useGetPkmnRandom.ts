import { useEffect, useState } from "react";

const useGetPkmnRandom = () => {
  const [pokemonName, setPokemonName] = useState("");

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const random = getRandomNumber(0, 897);
    (async () => {
      console.log("🚀 ~ random:", random);

      const pokemonJSON = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon/" + random
      );
      const pokemonData = await pokemonJSON.json();

      setPokemonName(pokemonData.name);
      console.log("🚀 ~ useGetPkmnRandom ~ pokemon:", pokemonName);
    })();
  }, []);

  return pokemonName;
};

export default useGetPkmnRandom;
