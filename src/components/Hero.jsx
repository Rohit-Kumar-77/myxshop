import React from "react";
import "./Hero.css"



export default function Hero() {
  return (
    <div className="container-fluid d-flex justify-content-around align-items-center heroSection flex-wrap " id="Hero">
      <div className="content">
        <h1>New Clothing Collection</h1>
        <p>The new collection of clothing from the best brands this year.</p>
        <a href="#Explore">Explore</a>
      </div>

      <div>
        <img src="./image/home1.png" alt="home" />


      </div>
    </div>
  );
}
