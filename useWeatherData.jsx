import { useEffect, useState } from "react";

function useWeatherData(apiKey) {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    if (!apiKey) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}`
        );
        if (!response.ok) throw new Error("Failed to fetch weather data");
        const data = await response.json();

        setWeatherData([
          {
            title: data.weather[0].main,
            description: data.weather[0].description,
            severity: "watch",
            type: "flood",
            timestamp: new Date().toLocaleString(),
          },
        ]);
        setLastUpdate(new Date());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60000);
    return () => clearInterval(interval);
  }, [apiKey]);

  return { weatherData, loading, error, lastUpdate };
}

export default useWeatherData;