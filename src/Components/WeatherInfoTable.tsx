import React from "react";

interface WeatherInfo {
  sunrise: number;
  sunset: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;
}

const WeatherInfoTable = ({
  sunrise,
  sunset,
  minTemp,
  maxTemp,
  feelsLike,
}: WeatherInfo) => {
  return (
    <div className="table-container">
      <table className="weather-table">
        <tbody>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Sunrise</td>
            <td>{new Date(sunrise * 1000).toLocaleTimeString()}</td>
          </tr>
          <tr>
            <td>Sunset</td>
            <td>{new Date(sunset * 1000).toLocaleTimeString()}</td>
          </tr>
          <tr>
            <td>Min Temperature</td>
            <td>{Math.round(minTemp)}°C</td>
          </tr>
          <tr>
            <td>Max Temperature</td>
            <td>{Math.round(maxTemp)}°C</td>
          </tr>
          <tr>
            <td>Feels Like</td>
            <td>{Math.round(feelsLike)}°C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherInfoTable;
