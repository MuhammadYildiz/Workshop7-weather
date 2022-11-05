Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@MuhammadYildiz 
MuhammadYildiz
/
Workshop7-weather
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Workshop7-weather/index.js /
@MuhammadYildiz
MuhammadYildiz first commit
Latest commit 864d5a9 2 days ago
 History
 1 contributor
35 lines (33 sloc)  1.36 KB

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
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Workshop7-weather/index.js at main · MuhammadYildiz/Workshop7-weather