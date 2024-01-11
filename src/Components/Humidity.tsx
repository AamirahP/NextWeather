import { WiHumidity } from "react-icons/wi";

interface Props {
  humidity: number;
}

const Humidity = ({ humidity }: Props) => {
  return (
    <div className="humidity">
      <div className="humidity-percent">{humidity}%</div>
      <div className="text">Humidity</div>
      <WiHumidity size="50" />
    </div>
  );
};

export default Humidity;
