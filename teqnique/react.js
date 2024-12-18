import React, { useState } from "react";

function WeatherDashboard() {
  const [weather,setWeather]=useState(null);
  const [buttons,setButtons]=useState([]);
  // Mock weather data
  const mockWeatherData = {
    "New York": {
      temperature: "22°C",
      humidity: "56%",
      windSpeed: "15 km/h",
    },
    "Los Angeles": {
      temperature: "27°C",
      humidity: "45%",
      windSpeed: "10 km/h",
    },
    London: {
      temperature: "15°C",
      humidity: "70%",
      windSpeed: "20 km/h",
    },
  };

  const fetchCity=(cityName)=>{
    setWeather(null);
    for(const weather in mockWeatherData){
      if(cityName.toLowerCase()===weather.toLowerCase()){
        setWeather(mockWeatherData[weather])
      }
    }
  }

  const searchCity=(e)=>{
    const city=document.getElementById('citySearch').value;
    fetchCity(city);
    setButtons([...buttons,city]);
  }

  return (
    <div>
      <input type="text" id="citySearch" placeholder="Search for a city..." />
      <button id="searchButton" onClick={searchCity}>Search</button>
      <div id="weatherData">
      {weather &&
          <>
            <div>Temperature: {weather.temperature}</div>
            <div>Humidity: {weather.humidity}</div>
            <div>Wind Speed: {weather.windSpeed}</div>
            </>
      }
      {!weather &&
      <div>City not found.</div>
      }
      </div>
      <div id="previousSearches">
        {
          buttons.forEach((button)=>{
            <button type="button" onClick={()=>fetchCity(button)}>{button}</button>
          })
        }
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
