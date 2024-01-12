"use client";
import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import WeatherData from "../Components/WeatherData";
import Wind from "../Components/Wind";
import Humidity from "../Components/Humidity";
import WeatherImage from "../Components/WeatherImage";
import WeatherDescription from "../Components/WeatherDescription";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  sys: {
    sunrise: number;
    sunset: number;
  };
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("London");

  const search = async (searchCity?: string) => {
    try {
      const apiUrl = `/api/page?city=${encodeURIComponent(searchCity || city)}`;

      console.log("API URL:", apiUrl);

      const response = await fetch(apiUrl);
      console.log("Response status:", response.status);

      if (!response.ok) {
        console.error("Failed to fetch data:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Response from OpenWeatherMap:", data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="Container">
      <SearchBar
        search={(searchCity?: string) => search(searchCity)}
        city={city}
        setCity={setCity}
      />

      {weatherData && weatherData.main && weatherData.wind && (
        <>
          <WeatherData
            temperature={Math.round(weatherData.main.temp)}
            location={weatherData.name}
          />
          <p className="info">
            <a href="http://localhost:3000/info">
              {" "}
              Click for more info {">"}
              {">"}
              {">"}
            </a>
          </p>

          <div className="weather-image">
            <WeatherImage iconCode={weatherData?.weather[0].icon} />
          </div>

          <div className="description">
            <WeatherDescription
              description={weatherData.weather[0].description}
            />
          </div>

          <div className="elements">
            <Wind windSpeed={weatherData.wind.speed} />
            <Humidity humidity={weatherData.main.humidity} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
