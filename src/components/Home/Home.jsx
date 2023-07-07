import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NewsHeading from "../NewsHeading/NewsHeading";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Porjotok Bus Service | Home</title>
      </Helmet>
      <Banner></Banner>
      <NewsHeading></NewsHeading>
    </div>
  );
};

export default Home;
