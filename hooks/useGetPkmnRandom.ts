import { useEffect, useState } from "react";

const useGetPkmnRandom = () => {
  const [pokemon, setPokemon] = useState("");
  const [randomNumber, setRandomNumber] = useState(Number);

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setRandomNumber(getRandomNumber(0, 897));

  useEffect(() => {
    (async () => {
      const pokemonJSON = await fetch(
        "https://pokebuildapi.fr/api/v1/pokemon/" + randomNumber
      );

      const pokemonData = await pokemonJSON.json();
      setPokemon(pokemonData);
    })();
  }, []);

  return pokemon;
};

export default useGetPkmnRandom;
