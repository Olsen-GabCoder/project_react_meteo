import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = import.meta.env.VITE_API_KEY;

// Fonction pour récupérer la météo d'une ville
export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Température en Celsius
        lang: 'fr',      // Résultats en français
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de la météo :", error);
    throw error;
  }
};

// Fonction pour récupérer la météo via géolocalisation
export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'fr',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération de la météo par coordonnées :", error);
    throw error;
  }
};