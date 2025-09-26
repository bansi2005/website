import React, { useState } from "react";
import ApiKeySetup from "./components/ApiKeySetup";
import Dashboard from "./components/Dashboard";
import useWeatherData from "./components/useWeatherData";

function App() {
  const [apiKey, setApiKey] = useState("");
  const { weatherData, loading, error, lastUpdate } = useWeatherData(apiKey);

  if (!apiKey) {
    return <ApiKeySetup onSetApiKey={setApiKey} />;
  }

  return (
    <Dashboard
      weatherData={weatherData}
      loading={loading}
      error={error}
      lastUpdate={lastUpdate}
    />
  );
}

export default App;