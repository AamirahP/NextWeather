// app/main/page.tsx

"use client";
import React from "react";
import WeatherInfoTable from "@/Components/WeatherInfoTable";
import { useRouter } from "next/navigation";

interface WeatherData {
  sunrise: number;
  sunset: number;
  feelsLike: number;
  maxTemp: number;
  minTemp: number;
}

const Page = () => {
  const router = useRouter();

  // Retrieve weather data from local storage
  const weatherDataString = localStorage.getItem("weatherData");
  const weatherData: WeatherData | null = weatherDataString
    ? JSON.parse(weatherDataString)
    : null;

  return (
    <div>
      {weatherData ? (
        <WeatherInfoTable
          sunrise={weatherData.sunrise}
          sunset={weatherData.sunset}
          feelsLike={weatherData.feelsLike}
          maxTemp={weatherData.maxTemp}
          minTemp={weatherData.minTemp}
        />
      ) : (
        <p>Cannot retrieve data</p>
      )}
    </div>
  );
};

export default Page;

/* checklist:
dynamic route 
normal route 
api call 
server side and client side rendering 
testing  */
