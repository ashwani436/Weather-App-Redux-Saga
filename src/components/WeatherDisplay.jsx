import React from 'react';

const WeatherDisplay = ( data ) => {
  return (
    <div  style={{fontSize:"20px",fontWeight:'600'}}>
      <p>Temperature: {data.weather?.temp_c}°C</p>
      <p>Humidity: {data.weather?.humidity}%</p>
      <p>Weather Condition: {data.weather?.condition?.text}</p>
    </div>
  )
}

export default WeatherDisplay;
