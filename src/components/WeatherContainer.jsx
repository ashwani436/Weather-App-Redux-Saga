
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherRequest } from './redux/action';
import WeatherDisplay from './WeatherDisplay';
import { cities } from './citiesdata';

const WeatherContainer = () => {
  const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.weatherData);
    const selectedCity = useSelector((state) => state.selectedCity?state.selectedCity:cities[0]);

    useEffect(() => {
    if (selectedCity) {
      dispatch(fetchWeatherRequest(selectedCity));
    }
  }, [dispatch, selectedCity]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <WeatherDisplay weather={data} />;
};

export default WeatherContainer;
