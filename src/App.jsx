import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import axios from "axios"

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios.get(`${API_URL}` + "assets")
      .then((data) => {
        console.log(data);
        setCriptos(data.data.data);
      })
      .catch(() => {
        console.error("La peticion fallo");
      });
  }, []);

  if (!criptos)
    return (
      <>
        <span>Cargando...</span>
      </>
    );

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        {criptos.map(({id, name, priceUsd, symbol }) => (
          <Card id={id} name={name} priceUsd={priceUsd} key={id} symbol={symbol} />
        ))}
      </ol>
      
    </>
  );
}

export default App;
