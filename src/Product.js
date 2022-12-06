import React from "react";

function Product({ data }) {
  return (
    <>
      {data.map((nm, idx) => {
        return (
          <div className="col-4" key={idx}>
            <div>
              <img src={nm.img} alt="pic"></img>
            </div>
            <div>
              <h3>{nm.name}</h3>
              <p> {nm.price}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Product;
