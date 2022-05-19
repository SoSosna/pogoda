const apiKey = "8a646787b47cb9681c355f076782daf4"
const ConvertToCelsius = (temp) => {
    const result = `${(temp - 273.15).toFixed()}°C`;
    return result;




}
const showWeather = (weather) => {
    console.log(weather)
    const city = document.getElementById("CityName")
    city.textContent = weather.name
    const country = document.getElementById("country")
    country.textContent = weather.sys.country;
    const clouds = document.getElementById("clouds")
    clouds.textContent = weather.clouds.all
    const temp = document.getElementById("temp")
    temp.textContent = ConvertToCelsius(weather.main.temp)
    const feels_like = document.getElementById("feels_like")
    feels_like.textContent = ConvertToCelsius(weather.main.feels_like)
    const temp_min = document.getElementById("temp_min")
    temp_min.textContent = ConvertToCelsius(weather.main.temp_min)
    const temp_max = document.getElementById("temp_max")
    temp_max.textContent = ConvertToCelsius(weather.main.temp_max)
}
const getWeatherByLocation = (info) => {
    const lon = info.coords.longitude
    const lat = info.coords.latitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


    fetch(url)
        .then((res) => res.json())
        .then((res) => showWeather(res))
}

const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => getWeatherByLocation(pos))
}
getMyLocation()