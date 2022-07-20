
function buildCurrentWeather(weatherdata) {
    const container = document.querySelector("#weathercard");

    let temp = document.querySelector("#currenttemp");
    let condition = document.querySelector("#currentcondition");
    let humidity = document.querySelector("#currenthumidity");
    let icon = document.querySelector("#currentimg");

    temp.textContent = `Temperature: ${Math.round(weatherdata.current.temp)}`;
    condition.textContent = weatherdata.current.weather[0].description;
    humidity.textContent = `Humidity: ${weatherdata.current.humidity}`;
    icon.setAttribute("src", `https://openweathermap.org/img/w/${weatherdata.current.weather[0].icon}.png`);
    icon.setAttribute("alt", weatherdata.current.weather[0].description);
};

function buildForecastCard(weatherdata, weatherindex, card) {
    const container1 = document.querySelector(`#forecastcard${card}`);

    let temp = document.querySelector(`#forecasttemp${card}`);
    let condition = document.querySelector(`#forecastcondition${card}`);
    let humidity = document.querySelector(`#forecasthumidity${card}`);
    let icon = document.querySelector(`#forecastimg${card}`);

    temp.textContent = `Temperature: ${Math.round(weatherdata.daily[weatherindex].temp.day)}`;
    condition.textContent = weatherdata.daily[weatherindex].weather[0].description;
    humidity.textContent = `Humidity: ${weatherdata.daily[weatherindex].humidity}`;
    icon.setAttribute("src", `https://openweathermap.org/img/w/${weatherdata.daily[weatherindex].weather[0].icon}.png`);
    icon.setAttribute("alt", weatherdata.daily[weatherindex].weather[0].description);
};
