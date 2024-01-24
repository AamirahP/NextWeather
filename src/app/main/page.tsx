"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WeatherData from "@/Components/WeatherData";
import SearchBar from "@/Components/SearchBar";
import WeatherImage from "@/Components/WeatherImage";
import WeatherDescription from "@/Components/WeatherDescription";
import Wind from "@/Components/Wind";
import Humidity from "@/Components/Humidity";
import { fetchWeatherData } from "@/api/page";

interface WeatherData {
  main: {
    temp: number;

    humidity: number;
  };
  name: string;
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  const search = async (searchCity?: string) => {
    try {
      const data = await fetchWeatherData(searchCity || city);
      setWeatherData(data);
    } catch (error: any) {
      if (error instanceof Error && error.message) {
        console.error("Error fetching data:", error.message);
      } else {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    search();
  }, []);

  const handleMoreInfoClick = (searchCity?: string) => {
    setCity(searchCity || city);
    search(searchCity);
  };

  return (
    <>
      <div className="Container">
        <SearchBar
          search={(searchCity?: string) => search(searchCity)}
          city={city}
          setCity={setCity}
        />

        {weatherData &&
          weatherData.main &&
          weatherData.wind &&
          weatherData.sys && (
            <>
              <WeatherData
                temperature={Math.round(weatherData.main.temp)}
                location={weatherData.name}
              />
              <Link
                className="info"
                href={`/main/data?name=${encodeURIComponent(
                  weatherData?.name || city
                )}`}
                onClick={() => handleMoreInfoClick(weatherData?.name || city)}
              >
                Click for more info {">"} {">"} {">"}
              </Link>

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
    </>
  );
}

export default App;
