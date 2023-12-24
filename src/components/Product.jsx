import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div id="Product">
      <h1 className="head1">Best Products</h1>

      <div className="productSection">
        <div>
          <img src="./image/product4.png" alt="" />
          <h2>Blue Sport Pants</h2>
          <p>$69.99</p>
        </div>
        <div>
          <img src="./image/product3.png" alt="" />
          <h2>Hoodie & Sweatshirt</h2>
          <p>Winder collection</p>
        </div>
        <div>
          <img src="./image/product2.png" alt="" />
          <h2>Hoodie & Sweatshirt</h2>
          <p>Winder collection</p>
        </div>
        <div>
          <img src="./image/product1.png" alt="" />
          <h2>Blue Sport Pants</h2>
          <p>$69.99</p>
        </div>
      </div>
    </div>
  );
}
