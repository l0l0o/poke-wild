import { useEffect, useState } from "react";

const useGetTypes = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    (async () => {
      const typesJSON = await fetch("https://pokebuildapi.fr/api/v1/types");

      const typesList = await typesJSON.json();
      setTypes(typesList);
    })();
  }, []);

  return types;
};

export default useGetTypes;
