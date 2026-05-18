export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <div className="weather-icon">{weather.icon}</div>
      <div className="weather-temp">{weather.temp}°C</div>
      <div className="weather-city">{weather.city}</div>
      <div className="weather-country">{weather.country}</div>
      <div className="weather-desc">{weather.desc}</div>
      
      <div className="weather-details">
        <div className="detail-item">
          <div className="detail-label">Ощущается</div>
          <div className="detail-value">{weather.feelsLike}°C</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Влажность</div>
          <div className="detail-value">{weather.humidity}%</div>
        </div>
        <div className="detail-item">
          <div className="detail-label">Ветер</div>
          <div className="detail-value">{weather.wind} км/ч</div>
        </div>
      </div>
    </div>
  )
}
