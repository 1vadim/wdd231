const city = document.querySelector('#city');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const forecastDiv = document.querySelector('#forecast');

const urlWeather = 'https://api.openweathermap.org/data/2.5/forecast?id=703448&appid=41de10cc104017bff4e7c2fdc89f812f&units=metric';

async function apiFetch() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  city.innerHTML = `<strong>${data.city.name}<strong>`
  currentTemp.innerHTML = `Temperature: ${data.list[0].main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  let desc = data.list[0].weather[0].description;
  const fig = document.querySelector("figure");
  let imageIcon = document.createElement("img");
  let figcapt = document.createElement("figcaption");
  imageIcon.setAttribute("src", iconsrc);
    imageIcon.setAttribute("alt", desc);
    imageIcon.setAttribute("loading", "lazy");
    imageIcon.setAttribute("width", "100");
    imageIcon.setAttribute("height", "100");
    fig.appendChild(imageIcon);
    fig.appendChild(figcapt);
  figcapt.textContent = `${desc}`;
  
  const forecast = data.list
  .filter(item => item.dt_txt.includes("12:00:00"))
  .slice(0, 3);

  forecastDiv.innerHTML = forecast.map(day => {
    const date = new Date(day.dt_txt).toLocaleDateString(undefined, { dateStyle: 'medium' });
    return `<div class="forecast-day">
      <strong>${date}</strong>: ${day.main.temp.toFixed(1)} °C
    </div>`;
  }).join('');
}