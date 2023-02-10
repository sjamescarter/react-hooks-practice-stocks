import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onTransaction }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => {
        return (
          <Stock 
            key={stock.id} 
            stock={stock} 
            onTransaction={onTransaction} 
          />
        ) 
      })}
    </div>
  );
}

export default StockContainer;
