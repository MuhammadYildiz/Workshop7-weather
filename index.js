const url = 'https://api.openweathermap.org/data/2.5/';
const localUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,SE&appid={2610ad3e6cfb7b6ecff33e2ee436fd93}'
const key = '2610ad3e6cfb7b6ecff33e2ee436fd93';
let content = document.querySelector('.content')
let city = document.querySelector('.city')
let temp = document.querySelector('.temp')
let descript = document.querySelector('.desc')
let MinMax = document.querySelector('.minmax')
let weatherIcon = document.querySelector('.icon')
const searchCity = document.querySelector('#searchCity');

searchCity.addEventListener('keypress', sreach);
function sreach(e){
    if(e.keyCode=='13')
    getResult(searchCity.value);    
}
function getResult(cityName){
    let cityURL = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=sv`
    fetch(cityURL)
    .then(weather => {
        return weather.json()
    })
    .then(outResult)
}

 function outResult(weather){
    city.textContent = `${weather.name}, ${weather.sys.country}`
    temp.textContent = `${Math.round(weather.main.temp)}°C`
    let IconContent = weather.weather[0].icon
    let IconURL = 'http://openweathermap.org/img/wn/'+ IconContent+ '@2x.png'
    weatherIcon.src = IconURL
    descript.textContent = weather.weather[0].description
    MinMax.textContent = `${Math.round(weather.main.temp_min)}°C /
    ${Math.round(weather.main.temp_max)}°C`
 }