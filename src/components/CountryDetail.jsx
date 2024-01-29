/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CountryDetail = ({ match }) => {
  // Get the country code from the URL params
  const countryCode = match.params.countryCode;

  // Fetch country details based on the country code
  // You can implement this logic based on your API or data structure

  return (
    <div>
      {/* Display country details here */}
      <h2>Country Details for {countryCode}</h2>
      {/* Add more details as needed */}
    </div>
  );
};

export default CountryDetail;
