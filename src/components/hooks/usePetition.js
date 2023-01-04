import axios from "axios";
import { useEffect, useState } from "react";

const usePetition = (endpoint) => {
  const API_URL = import.meta.env.VITE_API_URL;

  //en este caso es mejor que useState(aqui no inicie con nada, a menos que lo usemos en un .jsx)
  const [data, setData] = useState();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);

    axios
      .get(`${API_URL}${endpoint}`)
      .then((data) => {
        setData(data.data.data);
        setCargando(false);
      })
      .catch((e) => {
        setCargando(false);
        console.error(e);
      });
  }, []);
  return [data, cargando];
};

export default usePetition;
