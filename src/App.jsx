import React from "react";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Collection from "./components/Collection";
import Product from "./components/Product";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., loading CSS)
    const asyncTask = async () => {
      // Your loading logic goes here

      // Simulate a delay (remove this in a real-world scenario)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set loading to false after the CSS has been loaded or any other loading logic
      setIsLoading(false);
    };

    // Call the asynchronous task
    asyncTask();
  }, []);
  return (
    <>
      <div>
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="your-component-content">
            <Navbar />
           
            <Hero />
            <Category />
            <Collection />
            <Product />
          
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
