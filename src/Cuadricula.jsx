import Cripto from "./components/cripto/Cripto";
import "./main.css"
import "./components/Cuadricula.css"
import usePetition from "./components/hooks/usePetition";

function Cuadricula() {
  
  const [criptos] = usePetition("assets")
  if (!criptos)
    return (
      <>
        <span>Cargando...</span>
      </>
    );

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas 2022</h1>
      <div className="cripto-container">
        {criptos.map(({id, name, priceUsd, symbol, changePercent24Hr }) => (
          <Cripto 
          id={id} 
          name={name} 
          priceUsd={priceUsd} 
          key={id} symbol={symbol} 
          changePercent24Hr={changePercent24Hr} />
        ))}
      </div>
      
    </div>
  );
}

export default Cuadricula;
