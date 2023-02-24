import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, portfolio, removeStockFromPortfolio }) {

  const renderStocks = stocks.filter( stock => portfolio.includes( stock.id ) ).map( stock =>
    <Stock
      key = { stock.id }
      stock = { stock }
      moveStock = { removeStockFromPortfolio }
    />)
  // console.log( renderStocks )
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        //render your portfolio stocks here
        renderStocks
      }
    </div>
  );
}

export default PortfolioContainer;
