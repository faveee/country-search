import React, { useEffect, useState } from "react";
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
  const [localSearchInput, setLocalSearchInput] = useState<string>("");
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const searchCountries = (searchValue: string) => {
    setLocalSearchInput(searchValue);

    if (searchValue) {
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

  const filterRegions = async (region: string = "All") => {
    const url = `https://restcountries.com/v3.1/region/${region.toLowerCase()}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    filterRegions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <form className="input-group" id="form" onSubmit={handleSubmit}>
        <div className="search-group">
          <FontAwesomeIcon className="icon" icon={faSearch} />
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
            value={localSearchInput}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region === "All" ? "Filter by Region" : region}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
};

export default Filter;
