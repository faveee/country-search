import React from "react";

interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
}

const CustomCard= ({ }) => {
  return (
    <div className="card-main">
      <div className="card-group">
        <div className="card-media">
          {/* <img src={`${country.flags.png.slice(0, -3)}webp`} alt="" /> */}
        </div>
        <div className="card-body">
          {/* <h3>{country.name}</h2> */}
          <p>
            {/* Population: <span>{country.population.toLocaleString()}</span> */}
          </p>
          <p>
            {/* Region: <span>{country.region}</span> */}
          </p>
          <p>
            {/* Capital: <span>{country.capital}</span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
