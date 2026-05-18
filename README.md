# Прогноз погоды

Приложение для просмотра погоды в любом городе мира. Использует бесплатный API Open-Meteo без ключа.

## 📸 Скриншоты

![Поиск города](./screenshots/search.png)

*Поиск города и текущая погода*

![Прогноз на 5 дней](./screenshots/forecast.png)

*Прогноз погоды на 5 дней*

## ✨ Возможности

- 🔍 Поиск города по названию
- 🌡️ Текущая температура и ощущаемая
- 💨 Влажность и скорость ветра
- 📅 Прогноз на 5 дней
- 🌍 Автоматическое определение страны
- 📱 Адаптивный дизайн
- 🎨 Synthwave стиль

## 🛠 Стек

- **React 19** — библиотека интерфейса
- **Vite** — сборщик
- **Open-Meteo API** — бесплатные данные о погоде
- **CSS3** — стили с CSS-переменными

## 🚀 Быстрый старт

### Требования
- Node.js 18+
- npm или yarn

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/Nnnekita/weather-app.git
cd weather-app

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## 📁 Структура проекта

```
src/
├── components/
│   ├── Search.jsx        # Поиск города
│   ├── WeatherCard.jsx   # Карточка погоды
│   └── Forecast.jsx      # Прогноз на 5 дней
├── App.jsx               # Главный компонент
├── App.css               # Стили
└── main.jsx              # Точка входа
```

## 🌐 Демо

[Живая демонстрация](https://nnnekita.github.io/weather-app/) *(после деплоя)*

## 📝 Лицензия

MIT

## 👤 Автор

**Nnnekita**
- GitHub: [@Nnnekita](https://github.com/Nnnekita)

---

© 2026 Nnnekita. Создано на React и Vite.
