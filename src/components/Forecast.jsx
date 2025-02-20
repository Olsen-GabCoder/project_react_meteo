import React from 'react';

const Forecast = ({ forecastData }) => {
  if (!forecastData) return <p>Aucune prévision disponible</p>;

  return (
    <div>
      <h3>Prévisions pour les prochains jours</h3>
      <ul>
        {forecastData.list.slice(0, 5).map((day, index) => (
          <li key={index}>
            <p>Date : {new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>Température min : {day.temp.min}°C</p>
            <p>Température max : {day.temp.max}°C</p>
            <p>Condition : {day.weather[0].description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
