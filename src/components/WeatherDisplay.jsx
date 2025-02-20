import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <p>Aucune donnée disponible</p>;

  return (
    <div>
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p>Température : {weatherData.main.temp}°C</p>
      <p>Condition : {weatherData.weather[0].description}</p>
      <p>Humidité : {weatherData.main.humidity}%</p>
      <p>Vent : {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
