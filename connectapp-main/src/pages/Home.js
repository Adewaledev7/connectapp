import React from "react";
import Info from "../components/Info/Info";
import Navbar from "../components/Navbar/Navbar";
import Article from "../components/Article/Article";
import Query from "../components/Query/Query";
import Cdk from "../components/Cdk/Cdk";
import Simple from "../components/Simple/Simple";
import Feature from "../components/Feature/Feature";
import Build from "../components/Build/Build";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      {" "}
      <Info />
      <Navbar />
      <Article />
      <Query />
      <Cdk />
      <Simple />
      <Feature />
      <Build />
      <Footer />
    </>
  );
}

export default Home;
