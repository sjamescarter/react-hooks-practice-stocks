import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onTransaction }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(stock => {
          return(
            <Stock key={stock.id} stock={stock} onTransaction={onTransaction} />
          )
        })
      }
    </div>
  );
}

export default PortfolioContainer;
