import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addStockToPortfolio }) {

  const renderStocks = stocks.map( stock =>
    <Stock 
      key = { stock.id }
      stock = { stock }
      moveStock = { addStockToPortfolio }
    />)

  return (
    <div>
      <h2>Stocks</h2>
      { renderStocks }
    </div>
  );
}

export default StockContainer;
