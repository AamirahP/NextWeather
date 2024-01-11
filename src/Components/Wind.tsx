import { TiWeatherWindy } from "react-icons/ti";

interface Props {
  windSpeed: number;
}

const Wind = ({ windSpeed }: Props) => {
  return (
    <div className="wind">
      <div className="wind-rate"> {windSpeed} km/h</div>
      <div className="text">Wind Speed</div>
      <TiWeatherWindy size="50" />
    </div>
  );
};

export default Wind;
