import React from 'react';
import '../styles/Forecast.css';

const Forecast = ({ forecastData }) => {
  if (!forecastData) return <p className="forecast-empty">Aucune prévision disponible</p>;

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">Prévisions pour les prochains jours</h3>
      <ul className="forecast-list">
        {forecastData.list.slice(0, 5).map((day, index) => (
          <li key={index} className="forecast-item">
            <p className="forecast-date">Date : {new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p className="forecast-temp">Température min : {day.temp.min}°C</p>
            <p className="forecast-temp">Température max : {day.temp.max}°C</p>
            <p className="forecast-condition">Condition : {day.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
