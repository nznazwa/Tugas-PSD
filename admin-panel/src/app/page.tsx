"use client";
import Banner from "@/components/front-end/Banner";
import Cart from "@/components/front-end/Cart";
import Feature from "@/components/front-end/Feature";
import Footer from "@/components/front-end/Footer";
import Hero from "@/components/front-end/Hero";
import Navbar from "@/components/front-end/Navbar";
import TrendingProduct from "@/components/front-end/TrendingProduct";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [showCart, setShowCart] = useState(false);  

  return (
    <main>
         <Navbar setShowCart={setShowCart} />
         {showCart && <Cart setShowCart={setShowCart} />}
         < Hero />
         <Feature />
         <TrendingProduct />
         <Banner />
         <Footer />
    </main>
  );
};

export default Home;
