const api_key = "5e0d79d511e1ab5f09cd6435c9e76dcb";

export async function fetchWeatherData(city: string) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
    const response = await fetch(apiUrl);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      const errorMessage = await response.text();
      console.error("Failed to fetch data:", errorMessage);
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
}
