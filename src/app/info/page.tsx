import React from "react";
import Info from "../../Components/Info";

const InfoPage = () => {
  if (typeof localStorage === "undefined") {
    return <div>Error getting the data</div>;
  }
  const storedData = localStorage.getItem("weatherData");
  const extractedData = storedData ? JSON.parse(storedData) : null;
  return (
    <div>
      {extractedData && (
        <>
          <Info
            sunrise={extractedData.sunrise}
            sunset={extractedData.sunset}
            feelsLike={extractedData.feels_like}
            maxTemp={extractedData.temp_max}
            minTemp={extractedData.temp_min}
          />
        </>
      )}
    </div>
  );
};

export default InfoPage;
