"use client";
import WeatherInfoTable from "@/Components/WeatherInfoTable";
import { fetchWeatherData } from "@/api/page";
import { useEffect, useState } from "react";

interface MoreInfoProps {
  params: {
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
  } | null;
}

export default function MoreInfo({ params }: MoreInfoProps) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(params?.name || "London");

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

  useEffect(() => {
    console.log("City in MoreInfo:", city); // Add this line for debugging
  }, [city]);

  return (
    <main>
      {weatherData && (
        <>
          <h1>{weatherData.name}</h1>
          <WeatherInfoTable
            sunrise={weatherData.sys?.sunrise || 0}
            sunset={weatherData.sys?.sunset || 0}
            minTemp={weatherData.main?.temp_min || 0}
            maxTemp={weatherData.main?.temp_max || 0}
            feelsLike={weatherData.main?.feels_like || 0}
          />
        </>
      )}
    </main>
  );
}
