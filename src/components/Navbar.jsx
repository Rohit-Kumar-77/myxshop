import React from 'react'
import "./Navbar.css"

export default function Navbar() {


  function iconDark(){

 const Dark = document.getElementById("navbar");
 const DarkResponsive = document.querySelector(".navResponsive");
 const heroSection = document.querySelector(".heroSection");
 const NewSection = document.querySelector("#Category");
 const CollectionSection = document.querySelector("#Collection");
 const ProductsSection = document.querySelector("#Product");
 const FooterSection = document.querySelector("#Footer");

    if(Dark || DarkResponsive || heroSection){

      document.getElementById("Dark").style.display = "none"
      document.getElementById("Light").style.display = "block"

      Dark.style.backgroundColor = "hsl(220, 18%, 13%, 0.766)";
      DarkResponsive.style.backgroundColor = "hsl(220, 18%, 13%, 0.9)";
      DarkResponsive.style.boxShadow = "5px 5px 5px 5px rgba(0, 0, 0, 0.444)";
      
      document.querySelector("h3").style.color = "hsl(220, 18%, 86%)";


      /////////////// All Anchor/////////////////

      const anchor = document.querySelectorAll("a");

      anchor.forEach((list) => {
        list.style.color = "hsl(220, 18%, 86%)"
      });

      /////////////// All H1/////////////////

      const Heading1 = document.querySelectorAll("h1");

      Heading1.forEach((list) => {
        list.style.color = "hsl(220, 18%, 86%)"
      });

      /////////////// All H2/////////////////

      const Heading2 = document.querySelectorAll("h2");

      Heading2.forEach((list) => {
        list.style.color = "hsl(220, 18%, 86%)"
      });

      /////////////// All H3/////////////////

      const Heading3 = document.querySelectorAll("h3");

      Heading3.forEach((list) => {
        list.style.color = "hsl(220, 18%, 86%)"
      });

      
      /////////////// All P/////////////////

      const Paragraph = document.querySelectorAll("p");

      Paragraph.forEach((list) => {
        list.style.color = "hsl(214, 3%, 53%)"
      });
      

      ///////////////// Hero Section /////////////

      heroSection.style.backgroundColor = "hsl(220, 18%, 13%)";

      ///////////////// New Section /////////////

      NewSection.style.backgroundColor = "hsl(220, 18%, 23%)";

      ///////////////// Collection Section /////////////

      CollectionSection.style.backgroundColor = "hsl(220, 18%, 13%)";


      ///////////////// Products Section /////////////

      ProductsSection.style.backgroundColor = "hsl(220, 18%, 23%)";

      ///////////////// Footer Section /////////////

      FooterSection.style.backgroundColor = "hsl(220, 18%, 13%)";
    }
 }

 function iconLight(){


  const Light = document.getElementById("navbar");
 const LightResponsive = document.querySelector(".navResponsive");
 const heroSection = document.querySelector(".heroSection");
 const NewSection = document.querySelector("#Category");
 const CollectionSection = document.querySelector("#Collection");
 const ProductsSection = document.querySelector("#Product");
 const FooterSection = document.querySelector("#Footer");

    if(Light || LightResponsive || heroSection){

      document.getElementById("Light").style.display = "none"
      document.getElementById("Dark").style.display = "block"

      Light.style.backgroundColor = " hsl(220, 18%, 78%)";
      LightResponsive.style.backgroundColor = " hsl(220, 18%, 78%)";
      
      document.querySelector("h3").style.color = "hsl(220, 8%, 10%)";


      /////////////// All Anchor/////////////////

      const anchor = document.querySelectorAll("a");

      anchor.forEach((list) => {
        list.style.color = "hsl(220, 8%, 10%)"
      });

      /////////////// All H1/////////////////

      const Heading1 = document.querySelectorAll("h1");

      Heading1.forEach((list) => {
        list.style.color = "hsl(220, 8%, 10%)"
      });

      /////////////// All H2/////////////////

      const Heading2 = document.querySelectorAll("h2");

      Heading2.forEach((list) => {
        list.style.color = "hsl(220, 8%, 10%)"
      });

      /////////////// All H3/////////////////

      const Heading3 = document.querySelectorAll("h3");

      Heading3.forEach((list) => {
        list.style.color = "hsl(220, 8%, 10%)"
      });

      
      /////////////// All P/////////////////

      const Paragraph = document.querySelectorAll("p");

      Paragraph.forEach((list) => {
        list.style.color =  "hsl(220, 4%, 32%)"
      });
      

      ///////////////// Hero Section /////////////

      heroSection.style.backgroundColor = " hsl(220, 18%, 78%)";

      ///////////////// New Section /////////////

      NewSection.style.backgroundColor = "hsl(220, 18%, 86%)";

      ///////////////// Collection Section /////////////

      CollectionSection.style.backgroundColor = " hsl(220, 18%, 78%)";


      ///////////////// Products Section /////////////

      ProductsSection.style.backgroundColor = "hsl(220, 18%, 86%)";

      ///////////////// Footer Section /////////////

      FooterSection.style.backgroundColor = " hsl(220, 18%, 78%)";
    }
 
     }

  return (

    <div>

    <div className='navbar' id='navbar'>
      <div>
        <h3>Shop.</h3>
      </div>
      <div className='navList'>
        <ul>
        <ul>
        <li><a className='active' href="#Hero">Home</a></li>
          <li><a href="#Category" >New</a></li>
          <li><a href="#Collection" >Collection</a></li>
          <li><a href="#Product" >Products</a></li>
        </ul>

      
        </ul>
      </div>
      <div>
       <a href='#icon' onClick={iconDark} style={{display:"block"}} id='Dark' ><i class="fa-solid fa-moon" ></i></a>
       <a href='#icon' onClick={iconLight} style={{display:"none"}} id='Light'><i class="fa-solid fa-sun"></i></a>
      </div>

    </div>




    <div className='navResponsive'>

        <ul>
        <li><a className='active' href="#Hero">Home</a></li>
          <li><a href="#Category" >New</a></li>
          <li><a href="#Collection" >Collection</a></li>
          <li><a href="#Product" >Products</a></li>
        </ul>

    </div>



    </div>
  )
}
