import React from "react";

function Card({ priceUsd, name, id, symbol }) {
  return (
    <div key={id}>
      <div>Nombre: {name}</div>
      <div>
        <b>El precio es</b>: {priceUsd}
      </div>
      <div>
        <b>symbol</b>: {symbol}
      </div>
      <br />
    </div>
  );
}

export default Card;
