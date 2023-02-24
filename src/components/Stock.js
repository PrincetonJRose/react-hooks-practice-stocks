import React from "react";

function Stock({ stock, moveStock }) {

  const { id, name, ticker, price, type } = stock

  return (
    <div onClick={
      ()=> moveStock(stock)
    }>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
