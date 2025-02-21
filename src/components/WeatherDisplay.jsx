import React from 'react';
import '../styles/WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <p className="weather-empty">Aucune donnée disponible</p>;

  return (
    <div className="weather-container">
      <h2 className="weather-location">{weatherData.name}, {weatherData.sys.country}</h2>
      <div className="weather-info">
        <p>🌡 Température : {weatherData.main.temp}°C</p>
        <p>☁ Condition : {weatherData.weather[0].description}</p>
        <p>💧 Humidité : {weatherData.main.humidity}%</p>
        <p>💨 Vent : {weatherData.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
