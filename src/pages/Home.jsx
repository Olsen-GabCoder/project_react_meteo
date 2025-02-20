import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import Forecast from '../components/Forecast';
import LocationButton from '../components/LocationButton';
import { fetchWeatherByCity, fetchWeatherByCoords } from '../api/weatherService';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de la météo :", error);
    }
  };

  const handleLocationFetch = async (lat, lon) => {
    try {
      const data = await fetchWeatherByCoords(lat, lon);
      setWeatherData(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de la météo par localisation :", error);
    }
  };

  return (
    <div>
      <h1>Application Météo</h1>
      <SearchBar onSearch={handleSearch} />
      <LocationButton onLocationFetch={handleLocationFetch} />
      <WeatherDisplay weatherData={weatherData} />
      <Forecast forecastData={forecastData} />
    </div>
  );
};

export default Home;
