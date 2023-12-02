import "./styles.css"
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,
}: {
  searchInput: string;
  setSearchInput: (value: string) => void;
  setFiltered: (value: any) => void; 
  setCountries: (value: any) => void;
  countries: any[];
}) => {
  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  // Prevent page reload when submitting the form
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  // Search countries
  const searchCountries = (searchValue: any) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country: any) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  // Filter by region

  const filterRegions = async (region: any = "All") => {
    const url = "https://restcountries.com/v3.1/region/{region}";

    try {
      const res = await fetch(`${url}/${region}`);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    filterRegions();
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <form className="input-group" id="form" onSubmit={handleSubmit}>
        <div className="search-group">
          <FontAwesomeIcon  className="icon" icon={faSearch} />
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="off"
            placeholder="Search for a Country..."
            onChange={(e) => searchCountries(e.target.value)}
          />
        </div>

        <div className="search-group">
          <select
            name="select"
            id="select"
            className="select"
            onChange={(e) => filterRegions(e.target.value)}
            value={searchInput}
          >
            <option value="Africa">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filter;
