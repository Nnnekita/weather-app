export default function Forecast({ items }) {
  return (
    <div className="forecast">
      <div className="forecast-title">Прогноз на 5 дней</div>
      <div className="forecast-grid">
        {items.map((day, i) => (
          <div className="forecast-day" key={i}>
            <div className="day">{day.date}</div>
            <div className="icon">{day.icon}</div>
            <div className="temp">
              <span className="temp-max">{day.max}°</span>
              {' '}
              <span className="temp-min">{day.min}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
