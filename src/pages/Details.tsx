import axios from "axios";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function Details() {
  const { countryName } = useParams<{ countryName: string }>();
  const [countryDetails, setCountryDetails] = useState<any>({});
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        setCountryDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountryDetails();
  }, [countryName]);
console.log("details", countryDetails)
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
        <Header />
      <button onClick={goBack}>Go back</button>
      <div>
        {" "}
        {countryDetails.flags && (
          <img
            src={countryDetails.flags.svg}
            alt={`${countryDetails.name?.common} flag`}
            width="100"
            height="60"
          />
        )}
      </div>
      <div>
        <h3>{countryDetails.name?.common}</h3>
        <h3> Native Name:{countryDetails.name?.native?.prs?.common} </h3>
        <h3> Population: {countryDetails.population}</h3>
        <h3> Region: {countryDetails.region}</h3>
        <h3>Subregion: {countryDetails.subregion}</h3>
        <h3>Capital: {countryDetails.capital}</h3>
        <h3>Top Level Domain: {countryDetails.tld} </h3>
        <h3>
          Currencies:{" "}
          {countryDetails.currencies &&
            Object.values(countryDetails.currencies).join(", ")}
        </h3>
        <h3>
          Language:{" "}
          {countryDetails.languages &&
            Object.values(countryDetails.languages).join(", ")}{" "}
        </h3>
        <h3>
          Border Countries:{" "}
          {countryDetails.borders && countryDetails.borders.join(", ")}
        </h3>
      </div>
    </div>
  );
}

export default Details;
