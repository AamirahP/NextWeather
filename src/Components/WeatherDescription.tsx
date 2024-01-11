import React from "react";

interface WeatherDescriptionProps {
  description: string;
}

const WeatherDescription: React.FC<WeatherDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="weather-description">
      <b>
        {" "}
        <i>{description}</i>
      </b>
    </div>
  );
};

export default WeatherDescription;
