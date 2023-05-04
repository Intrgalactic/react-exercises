import './App.css';
import Home from './pages/Home/home';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { fetchCountries } from 'lib/fetch';
import Country from 'pages/Country/country';
function App() {
  const [countries, setCountries] = useState([]);
  const [initialCountries, setInitCountries] = useState([]);
  const [chosenCountry, setChosenCountry] = useState([]);
  useEffect(() => {
    fetchCountries(setCountries);
    fetchCountries(setInitCountries);
  }, []);

  function handleRedirect(country) {
    setChosenCountry(country);
  }
  function handleFilterAndWrite(e, type) {
    let filteredCountries;
    type === "write" ? filteredCountries = initialCountries.filter(country => country.name.toLowerCase().includes(e.target.value.toLowerCase())) : filteredCountries = initialCountries.filter(country => e.target.value === country.region);
    setCountries(filteredCountries);
  }
  return (
    <Routes>
      <Route path="/" exact element={<Home countries={countries} handleFilterAndWrite={handleFilterAndWrite} handleRedirect={handleRedirect} />}> </Route>
      <Route path="/country" exact element={<Country country={chosenCountry} ></Country>}> </Route>
    </Routes>
  );
}

export default App;
