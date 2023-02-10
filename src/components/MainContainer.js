import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:3001/stocks"

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState("All");

  console.log(stocks)
  console.log(filter)
  console.log(sortBy)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setStocks(data))
  }, []);

  function onTransaction(id) {
    const newStock = stocks.find(stock => stock.id === id);
    
    portfolio.find(stock => stock.id === id) 
      ? setPortfolio(portfolio.filter(stock => stock.id !== id))
      : setPortfolio([...portfolio, newStock]);
  }

  const filteredStocks = [...stocks].filter(stock => stock.type === filter)
  const showStocks = filter === "All" ? [...stocks] : [...filteredStocks]
  const sortAlphabetically = [...showStocks].sort((a, b) => {
    if(a.ticker < b.ticker){
      return -1;
    }
    if(a.ticker > b.ticker){
      return 1;
    }
    return 0
  })

  const sortPrice = [...showStocks].sort((a, b) => a.price - b.price)

  const displayStocks = sortBy === "" 
    ? stocks 
    : sortBy === "Alphabetically" 
      ? sortAlphabetically 
      : sortPrice

console.log(showStocks)
console.log(sortAlphabetically)
console.log(sortPrice)
  return (
    <div>
      <SearchBar 
        setSortBy={setSortBy}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={displayStocks} 
            onTransaction={onTransaction} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio} 
            onTransaction={onTransaction} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
