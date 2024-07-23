 
const apiKey = '0ce65b5305795b423553e5fa201d9cd8'; 


 async function fetchWeatherData(city) {
    try {
 const response =  await fetch(
    
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

 );

 if(!response.ok){
    throw new Error('City not found');
 }
 const data =  await response.json();
 console.log(data);
 //console.log(data.main.temp);
 //console.log(data.name);
 //console.log(data.wind.speed);
 //console.log(data.main.humidity);
 //console.log(data.visibility);
updateWeatherUI(data);
    }
    catch (error) {
        console.log(error);
    }
}

const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const windElement = document.querySelector(".wind-speed");
const humidityElement = document.querySelector(".humidity");
const visibilityElement = document.querySelector(".visibility-distance");
const descriptionText = document.querySelector('.description-text');
const date = document.querySelector(".date");
const descriptionIcon = document.querySelector(".description i");

//fetchWeatherData();

function updateWeatherUI(data)  {
    cityElement.textContent = data.name;
    tempElement.textContent = `${Math.round(data.main.temp)}`;
    windElement.textContent = `${data.wind.speed} Km/h`;
    humidityElement.textContent = `${data.main.humidity}%`;
    visibilityElement.textContent = `${Math.round(data.visibility / 1000)} Km`;
    descriptionText.textContent = data.weather[0].description;

    const currentDate = new Date();
    date.textContent = currentDate.toDateString();
    const weatherIconName = getWeatherIconName(data.weather[0].main);
    descriptionIcon.innerHTML = `<i class="material-icons">${weatherIconName}</i>`;

}

const formElement = document.querySelector(".search-form");
const inputElement = document.querySelector('.city-input');

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    const city = inputElement.value;
    if(city!==''){
        fetchWeatherData(city);
        inputElement.value='';
    }
});

function getWeatherIconName(weatherCondition) {
    const iconMap = {
        Clear: "sunny",
        Clouds: "cloudy",
        Rain: "rain",
        Snow: "snow",
      Thunderstorm: "flash_on",
      Drizzle: "wc_rain",
      Mist: "cloud",
      Smoke: "cloud",
      Haze:"cloud",
      Fog:"cloud",
    };

    return iconMap[weatherCondition] || "help"
}