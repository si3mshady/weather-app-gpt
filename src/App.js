import { useState, useEffect } from "react";
// import "./App.css"; // Import CSS file for styling
import "./Matrix.css"
// import "./SpiderMan.css"
// import "./WizKalifa.css"


const API_KEY = "e1a86fb0740d40ce8bd202845231103";
const CITY = "Dallas";
const DAYS = 14;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY}&days=${DAYS}`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <h1>{DAYS} -Day Weather Forecast for {CITY}</h1>
      <div className="weather-cards-container">
        {weatherData &&
          weatherData.forecast.forecastday.map((forecast) => (
            <div className="weather-card" key={forecast.date}>
              <h2>{forecast.date}</h2>
              <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} />
              <p>{forecast.day.condition.text}</p>
              <p>Avg. Temperature: {forecast.day.avgtemp_f} F</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
