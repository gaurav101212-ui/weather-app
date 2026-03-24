import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "12b5ee5e83174bc693165135262303"; // 👈 yaha apni new key daalo

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getBackground = () => {
  if (!weather) return "bg-light";

  const condition = weather.current.condition.text.toLowerCase();

  if (condition.includes("sun")) return "bg-warning";
  if (condition.includes("cloud")) return "bg-secondary";
  if (condition.includes("rain")) return "bg-dark text-white";

  return "bg-info";
};

  return (
    <div className={`container-fluid vh-100 d-flex justify-content-center align-items-center ${getBackground()}`}>
      <h1 className="text-center mb-4">Weather App 🌦️</h1>

      <SearchBox onSearch={handleSearch} />

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-danger text-center">{error}</p>}
      

      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;