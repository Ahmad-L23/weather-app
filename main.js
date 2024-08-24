const apiKey = "8fddd9f127ad7e669fb9275a958df322";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;

  
    const tempInCelsius = (data.main.temp - 273.15).toFixed(2);
    document.querySelector(".temp").innerHTML = tempInCelsius + "°C";

    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-value").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
