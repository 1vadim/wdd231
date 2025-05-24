async function fetchWeather() {
  try {
    const response = await fetch('https://wttr.in/Vienna?format=j1');
    const data = await response.json();

    const current = data.current_condition[0];
    document.getElementById('weather-description').textContent = `Condition: ${current.weatherDesc[0].value}`;
    document.getElementById('temperature').textContent = `Temperature: ${current.temp_C}°C`;
    document.getElementById('humidity').textContent = `Humidity: ${current.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind: ${current.windspeedKmph} km/h`;

    const forecast = document.getElementById('forecast');
    forecast.innerHTML = '';

    for (let i = 0; i < 3; i++) {
      const day = data.weather[i];
      const forecastItem = document.createElement('div');
      forecastItem.textContent = `${day.date}: High ${day.maxtempC}°C / Low ${day.mintempC}°C`;
      forecast.appendChild(forecastItem);
    }
  } catch (error) {
    console.error('Failed to fetch weather:', error);
    document.getElementById('weather-description').textContent = 'Unable to load weather.';
  }
}

fetchWeather();
