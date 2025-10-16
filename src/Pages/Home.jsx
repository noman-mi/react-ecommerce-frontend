import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) =>{
    setSearchTerm(e.target.value);
  }
  return (
    <div>
      <Header />
      <Hero searchTerm={searchTerm} onSearchChange={handleSearch}/>
      <Cards searchTerm={searchTerm}/>
      <Footer/>
    </div>
  );
}

export default Home;
