import React from "react";
import "./Category.css"

export default function Category() {
  return (
    <div id="Category">

      <h1 className="head1">New Categories</h1>

      <div className="categorySection">
        <div>
          <img src="./image/new1.png" alt="" />
          <h2>Hoodie & Sweatshirt</h2>
          <p>Winder collection</p>
        </div>
        <div>
          <img src="./image/new2.png" alt="" />
          <h2>Hoodie & Sweatshirt</h2>
          <p>Winder collection</p>
        </div>
        <div>
          <img src="./image/new3.png" alt="" />
          <h2>Hoodie & Sweatshirt</h2>
          <p>Winder collection</p>
        </div>
      </div>
    </div>
  );
}
