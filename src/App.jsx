import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'

const WMO_CODES = {
  0: { desc: 'Ясно', icon: '☀️' },
  1: { desc: 'Преимущественно ясно', icon: '🌤️' },
  2: { desc: 'Переменная облачность', icon: '⛅' },
  3: { desc: 'Пасмурно', icon: '☁️' },
  45: { desc: 'Туман', icon: '🌫️' },
  48: { desc: 'Изморозь', icon: '🌫️' },
  51: { desc: 'Лёгкая морось', icon: '🌦️' },
  53: { desc: 'Морось', icon: '🌦️' },
  55: { desc: 'Сильная морось', icon: '🌧️' },
  61: { desc: 'Небольшой дождь', icon: '🌧️' },
  63: { desc: 'Дождь', icon: '🌧️' },
  65: { desc: 'Сильный дождь', icon: '⛈️' },
  71: { desc: 'Небольшой снег', icon: '🌨️' },
  73: { desc: 'Снег', icon: '❄️' },
  75: { desc: 'Сильный снег', icon: '❄️' },
  80: { desc: 'Ливень', icon: '🌧️' },
  81: { desc: 'Сильный ливень', icon: '⛈️' },
  82: { desc: 'Очень сильный ливень', icon: '⛈️' },
  95: { desc: 'Гроза', icon: '⛈️' },
  96: { desc: 'Гроза с градом', icon: '⛈️' },
  99: { desc: 'Гроза с сильным градом', icon: '⛈️' },
}

function getWeatherInfo(code) {
  return WMO_CODES[code] || { desc: 'Неизвестно', icon: '🌡️' }
}

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city) => {
    setLoading(true)
    setError('')
    try {
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=ru`)
      const geoData = await geoRes.json()
      
      if (!geoData.results || geoData.results.length === 0) {
        setError('Город не найден')
        setLoading(false)
        return
      }

      const { latitude, longitude, name, country } = geoData.results[0]
      
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,apparent_temperature&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`
      )
      const data = await weatherRes.json()

      setWeather({
        city: name,
        country,
        temp: Math.round(data.current.temperature_2m),
        feelsLike: Math.round(data.current.apparent_temperature),
        humidity: data.current.relative_humidity_2m,
        wind: data.current.wind_speed_10m,
        ...getWeatherInfo(data.current.weather_code),
      })

      setForecast(data.daily.time.map((day, i) => ({
        date: new Date(day).toLocaleDateString('ru-RU', { weekday: 'short', day: 'numeric' }),
        max: Math.round(data.daily.temperature_2m_max[i]),
        min: Math.round(data.daily.temperature_2m_min[i]),
        ...getWeatherInfo(data.daily.weather_code[i]),
      })))
    } catch {
      setError('Ошибка загрузки данных')
    }
    setLoading(false)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Прогноз погоды</h1>
        <p className="subtitle">Узнай погоду в любом городе мира</p>
      </header>

      <main className="container">
        <Search onSearch={fetchWeather} />
        
        {loading && <div className="loading">Загрузка...</div>}
        {error && <div className="error">{error}</div>}
        
        {weather && (
          <WeatherCard weather={weather} />
        )}
        
        {forecast && (
          <Forecast items={forecast} />
        )}
      </main>

      <footer className="footer">
        <p>© 2026 <a href="https://github.com/Nnnekita" target="_blank" rel="noopener noreferrer">Nnnekita</a></p>
      </footer>
    </div>
  )
}

export default App
