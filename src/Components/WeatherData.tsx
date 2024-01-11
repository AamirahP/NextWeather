interface Props {
  temperature: number;
  location: string;
}

const WeatherData = ({ temperature, location }: Props) => {
  return (
    <>
      <div className="weatherTemp">{temperature} °C</div>
      <div className="weatherLocation"> {location} </div>{" "}
    </>
  );
};

export default WeatherData;
