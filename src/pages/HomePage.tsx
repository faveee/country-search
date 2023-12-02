
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import Header from "../components/Header";
import CountrySearch from "../components/countrySearch";


const HomePage = () => {
  return (
    <div>
      <div className="header-page">
        <Header />
        <CountrySearch />
      </div>
    </div>
  );
};


export default HomePage;
