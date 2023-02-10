import React from "react";

function Stock({ stock, onTransaction }) {
  const { id, ticker, name, price } = stock

  return (
    <div>
      <div className="card" onClick={() => onTransaction(id)} >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
