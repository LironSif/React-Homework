import React, { useState, useEffect } from 'react';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter countries..."
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredCountries.map(country => (
          <li key={country.alpha3Code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
