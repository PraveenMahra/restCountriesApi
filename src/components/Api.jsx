/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  margin: auto 80px;
`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
`;

const Searchbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 80px 48px 80px;
`;

const SearchFilter = ({ onSearch, onFilter }) => {
  return (
    <Searchbar>
      <label>
        <input
          type="text"
          placeholder="Search for a country"
          onChange={(e) => onSearch(e.target.value)}
        />
      </label>

      <label>
        <select onChange={(e) => onFilter(e.target.value)}>
          <option value="" disabled selected>
            Filter by region
          </option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </label>
    </Searchbar>
  );
};

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Error fetching country data");
        }

        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter countries based on the search query and selected continent
    const filtered = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase()) &&
        (selectedContinent === "" || country.region === selectedContinent)
    );

    setFilteredCountries(filtered);
  };

  const handleFilter = (continent) => {
    setSelectedContinent(continent);

    // Filter countries based on the search query and selected continent
    const filtered = countries.filter((country) => {
      // return (
      //   country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) &&
      //   (continent === "" || country.region === continent)
      // );

      return country.continents.includes(continent);
    });

    setFilteredCountries(filtered);
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />

      <Ul>
        {filteredCountries.map((country) => (
          <Li key={country.cca3}>
            {country.flags && (
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                style={{ width: "267px", height: "auto" }}
              />
            )}
            <br />
            <strong>{country.name.common}</strong>
            <br />
            Capital: {country.capital ? country.capital.join(", ") : "N/A"}
            <br />
            Population: {country.population}
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default CountryList;
