import React from 'react';

const LocationButton = ({ onLocationFetch }) => {
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationFetch(latitude, longitude);
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
        }
      );
    } else {
      alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
    }
  };

  return <button onClick={handleLocation}>Météo actuelle</button>;
};

export default LocationButton;
