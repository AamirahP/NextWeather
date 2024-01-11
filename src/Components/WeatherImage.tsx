import React from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiNightClear,
  WiNightCloudy,
} from "react-icons/wi";

interface Props {
  iconCode?: string;
}

const weatherIcons: { [key: string]: JSX.Element } = {
  "01d": <WiDaySunny size={300} color="orange" />,
  "02d": <WiCloud size={300} />,
  "03d": <WiCloud size={300} />, // For cloudy conditions
  "04d": <WiCloud size={300} />, // For broken clouds
  "09d": <WiRain size={300} />,
  "10d": <WiRain size={300} />, // For rain
  "11d": <WiThunderstorm size={300} />,
  "13d": <WiSnow size={300} />,
  "50d": <WiFog size={300} />, // For foggy conditions
  "01n": <WiNightClear size={300} />, // For clear night
  "02n": <WiNightCloudy size={300} />, // For cloudy night
};

const WeatherImage: React.FC<Props> = ({ iconCode }) => {
  const defaultIcon = <WiDaySunny size={300} />;

  const selectedIcon = iconCode
    ? weatherIcons[iconCode] || defaultIcon
    : defaultIcon;

  return <div className="weather-icon">{selectedIcon}</div>;
};

export default WeatherImage;
