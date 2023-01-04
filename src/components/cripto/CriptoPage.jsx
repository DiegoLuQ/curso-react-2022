import { useParams } from "react-router-dom";
import usePetition from "../hooks/usePetition";
import "./CriptoPage.css";
import CriptoInfo from "./info/CriptoInfo";
import CriptoHistory from "./info/CriptoHistory";

function CriptoPage() {
  const params = useParams();

  // cuando usemos useEffect, aveces no es neecsario crear dos useEffect ya que dependera de lo uqe pongamos en el array [], en caso de no
  // poner nada, ya que no se actualizara nada, podemos poner los dos AXIOS en un solo useEffect

  const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`);
  const [history, cargandoHistory] = usePetition(
    `assets/${params.id}/history?interval=d1`
  );

  if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>;

  return (
    <div className="cripto-page-container">
      {cripto && <CriptoInfo cripto={cripto} />}
      {/* solo se renderizara && la tabla si HISTORY es verdadero*/}
      {history && <CriptoHistory history={history} />}
    </div>
  );
}

export default CriptoPage;
