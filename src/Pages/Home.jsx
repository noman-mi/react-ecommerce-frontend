import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <Navbar />
    </div>
  );
}

export default Home;
