function WeatherCard({ data }) {
  return (
    <div className="card p-4 text-center shadow-lg" style={{
  width: "300px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.2)",
  backdropFilter: "blur(10px)",
  color: "white"
}}>
      
      <h2 className="mb-3">{data.location.name}</h2>

      <img
        src={data.current.condition.icon}
        alt="weather icon"
        style={{ width: "100px" }}
      />

      <h1 className="my-3">{data.current.temp_c}°C</h1>

      <p className="fs-5">{data.current.condition.text}</p>

      <p>Humidity: {data.current.humidity}%</p>
      <p>Wind: {data.current.wind_kph} kph</p>

    </div>
  );
}

export default WeatherCard;