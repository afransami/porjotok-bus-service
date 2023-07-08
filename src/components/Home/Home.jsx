import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NewsHeading from "../NewsHeading/NewsHeading";
import Forms from "../Forms/Forms";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Porjotok Bus Service | Home</title>
      </Helmet>
      <Banner></Banner>
      {/* <NewsHeading></NewsHeading> */}
      <Forms></Forms>
      <Login></Login>
    </div>
  );
};

export default Home;
