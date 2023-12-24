import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
 
    <div className="main" id="Footer">
      <h1 className="head1">Brands We Sell</h1>

      <div className="brandsImage">
        <div>
          <img src="./image/logo1.png" alt="" />
        </div>
        <div>
          <img src="./image/logo2.png" alt="" />
        </div>
        <div>
          <img src="./image/logo3.png" alt="" />
        </div>
        <div>
          <img src="./image/logo4.png" alt="" />
        </div>
      </div>

      <div className="brandsContent">
        <div>
          <h2>Shop.</h2>
          <p>
            Committed to bringing you the best clothing from popular brands.
          </p>
        </div>
        <div>
          <h2>Company</h2>
          <p>Shop</p>
          <p>Category</p>
          <p>Contact info</p>
        </div>
        <div>
          <h2>Blog</h2>
          <p>Events</p>
          <p>Popular news</p>
          <p>Recent news</p>
        </div>

        <div>
          <h2>Office</h2>
          <p>Monday - Saturday</p>
        </div>
        <div>
          <h2>Contact us</h2>
          <p>
                <a href="https://www.instagram.com/rohit_r.singhani/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://wa.me/923170268157" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
          </p>
        </div>
      </div>

      <div className="copyright">
        <p>© Rohit Kumar. All rigths reserved</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
}
