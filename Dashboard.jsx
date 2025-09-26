import React from "react";
import { AlertTriangle, CloudRain, Activity, Loader2 } from "lucide-react";

function Dashboard({ weatherData, loading, error, lastUpdate }) {
  const getAlertColor = (severity) => {
    switch (severity) {
      case "emergency": return "bg-red-600";
      case "warning": return "bg-yellow-500";
      case "watch": return "bg-blue-500";
      default: return "bg-green-600";
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "cloudburst": return <CloudRain className="w-6 h-6" />;
      case "flood": return <Activity className="w-6 h-6" />;
      default: return <AlertTriangle className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🌊 FloodWatch Alert System</h1>
        {loading && <Loader2 className="animate-spin" />}
      </header>

      {error && <div className="bg-red-600 p-4 rounded">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {weatherData.map((alert, idx) => (
          <div key={idx} className={`p-4 rounded-xl shadow ${getAlertColor(alert.severity)}`}>
            <div className="flex items-center space-x-2">
              {getAlertIcon(alert.type)}
              <h2 className="text-lg font-semibold">{alert.title}</h2>
            </div>
            <p className="mt-2">{alert.description}</p>
            <p className="text-sm mt-2">⏰ {alert.timestamp}</p>
          </div>
        ))}
      </div>

      <footer className="mt-8 text-sm text-gray-400">
        Last Updated: {lastUpdate ? lastUpdate.toLocaleString() : "N/A"}
      </footer>
    </div>
  );
}

export default Dashboard;