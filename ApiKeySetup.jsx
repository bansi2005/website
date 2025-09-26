import React, { useState } from "react";

function ApiKeySetup({ onSetApiKey }) {
  const [inputKey, setInputKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputKey.trim()) {
      onSetApiKey(inputKey);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-md space-y-4 w-96">
        <h2 className="text-xl font-bold text-center">FloodWatch Setup</h2>
        <input
          type="text"
          placeholder="Enter your API Key"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Save API Key
        </button>
      </form>
    </div>
  );
}

export default ApiKeySetup;