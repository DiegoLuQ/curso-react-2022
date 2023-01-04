import { Link } from "react-router-dom";
import "./Cripto.css";

function Card({ priceUsd, name, id, symbol, changePercent24Hr }) {
  return (
    <Link to={`/criptomonedas/${id}`}>
    <div key={id} className="cripto">
      <div className="info">
        <b className="label">Nombre:</b> {name}
      </div>
      <div className="info">
        <div>
          <b className="label">El precio es</b>: {parseFloat(priceUsd).toFixed(2)}
        </div>
        <div>
          <b className="label">Symbol</b>: {symbol}
        </div>
        <div>
          <b className="label">Change % in 24Hr</b>: 
          <span className={parseFloat(changePercent24Hr) > 0 ? "positive" : "negative"}>
          {parseFloat(changePercent24Hr).toFixed(2)} %
          </span> 
        </div>
      </div>
      <br />
    </div>
    </Link>
  );
}

export default Card;
