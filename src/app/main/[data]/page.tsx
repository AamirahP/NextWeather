"use client";
import { useEffect, useState } from "react";
import WeatherInfoTable from "@/Components/WeatherInfoTable";
import { fetchWeatherData } from "@/api/page";

interface WeatherData {
  main: {
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
}

function MoreInfo({ params }: { params: { name: string } }) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(params.name);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [params.name]);

  return (
    <main>
      <h1>Location: {params.name}</h1>
      {weatherData && (
        <WeatherInfoTable
          sunrise={weatherData.sys?.sunrise || 0}
          sunset={weatherData.sys?.sunset || 0}
          minTemp={weatherData.main?.temp_min || 0}
          maxTemp={weatherData.main?.temp_max || 0}
          feelsLike={weatherData.main?.feels_like || 0}
        />
      )}
    </main>
  );
}

export default MoreInfo;
