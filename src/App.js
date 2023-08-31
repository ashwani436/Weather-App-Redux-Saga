import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSelectedCity } from './components/redux/action';
import CitySelection from './components/CitySelection';
import WeatherContainer from './components/WeatherContainer';
import { cities } from './components/citiesdata';

const App = () => {
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.selectedCity);

  const handleCitySelect = (city) => {
    dispatch(setSelectedCity(city));
  };

  return (
    <div className="app" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <h1>Weather Forecast App</h1>
      <CitySelection cities={cities} selectedCity={selectedCity} onSelectCity={handleCitySelect} />
      <WeatherContainer />
    </div>
  );
};

export default App;
