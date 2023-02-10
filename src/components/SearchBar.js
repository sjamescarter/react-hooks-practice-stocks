import React, { useState } from "react";

function SearchBar({ setSortBy, filter, setFilter }) {
  const [alphabetically, setAlphabetically] = useState(false);
  const [price, setPrice] = useState(false);

  function handleSort(e) {
    const value = e.target.value
    setSortBy(value)
    if(value === "Alphabetically"){
      setAlphabetically(true);
      setPrice(false);
    } else if(value === "Price") {
      setAlphabetically(false);
      setPrice(true);
    }
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphabetically}
          onChange={handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={price}
          onChange={handleSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
