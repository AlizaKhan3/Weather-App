const userLocation = document.getElementById("userLocation");
const convertUnit = document.getElementById("convertUnit");
const weatherIcon = document.querySelector(".weatherIcon");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feelsLike");
const description = document.querySelector(".description");
const date = document.querySelector(".date");
const city = document.querySelector(".city");
const HumidityValue = document.getElementById("HumidityValue");
const windSpeedValue = document.getElementById("windSpeedValue");
const sunRiseValue = document.getElementById("sunRiseValue");
const sunSetValue = document.getElementById("sunSetValue");
const cloudValue = document.getElementById("cloudValue");
const uvValue = document.getElementById("uvValue");
const pressureValue = document.getElementById("pressureValue");
const forecast = document.querySelector(".forecast")
const updates = document.querySelector(".updates");

const API_KEY = '9f1d66f984eff1d963ba3dfeca9d0611';

findUserLocation();
function findUserLocation() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
        let { latitude, longitude } = success.coords;
        // city.innerHTML = data.name + "," + data.sys.country;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                function findWeatherByCity(city) {
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            showWeatherData(data);
                        })
                }

                const inputBar = document.getElementById('userLocation');

                inputBar.addEventListener('input', (e) => {
                    const city = e.target.value;
                    findWeatherByCity(city);
                    weatherIcon.style.image = `url(https://openweathermap.org/img/wn/10d@2x.png)`
                });
                // showWeatherData(data);
            })
    })
}

function showWeatherData(data) {
    let { weather, main, wind, sys, name } = data;
    let { description } = weather[0];
    let { temp, feels_like, humidity, pressure } = main;
    let { speed } = wind;
    let { sunrise, sunset } = sys;
    // let { all } = weather;
    weatherIcon.innerHTML = ` <h2 class="temperature"> ${temp}</h2>
                <div class="feelsLike"> ${feels_like}</div>
                <div class="description"> ${description}</div>
                <hr>
                <div class="city"> ${name}</div>`



    updates.innerHTML = ` <div class="card p-4" style="width: 18rem;">
                    <h5 class="card-text humidity">Humidity</h5>
                    <i class="fa-solid fa-water" style="color: rgba(245, 245, 245, 0.865);"></i>
                    <div class="card-body">
                        <h1 class="card-title" id="HumidityValue" style="color: #000;" >${humidity}</h1>
                    </div>
                </div>
                <div class="card p-4" style="width: 18rem;">
                    <h5 class="card-text humidity">Wind Speed</h5>
                    <i class="fa-solid fa-wind" style="color: darkcyan;"></i>
                    <div class="card-body">
                        <h1 class="card-title" id="windSpeedValue">${speed}</h1>
                    </div>
                </div>
                <div class="card p-2" style="width: 18rem;">
                    <div class="card-body sun">
                        <span class="my-3">
                            <i class="fa-solid fa-sun" style="color: #f6d245;"></i>
                            <p><span class="card-title" id="sunRiseValue">${moment(sunrise * 1000).format('HH:mm a')}</span>Sunrise</p>
                        </span>
                        <span class="my-3">
                            <i class="fa-solid fa-cloud-sun" style="color: #f6d245;"></i>
                            <p><span class="card-title" id="sunSetValue">${moment(sunset * 1000).format('HH:mm a')}</span>Sunset</p>
                        </span>
                    </div>
                </div>
                <div class="card p-4" style="width: 18rem;">
                    <h5 class="card-text clouds">Clouds</h5>
                    <i class="fa-solid fa-cloud" style="color: grey;"></i>
                    <div class="card-body">
                        <h1 class="card-title" id="cloudValue">${weather[0].clouds}%</h1>
                    </div>
                </div>
                
                <div class="card p-4" style="width: 18rem;">
                    <h5 class="card-text pressure">Pressure</h5>
                    <i class="fa-solid fa-volcano" style="color: darkslategrey;"></i>
                    <div class="card-body">
                        <h1 class="card-title" id="pressureValue">${pressure}</h1>
                    </div>
                </div>`
}








// let finduserLoaction = (() => {
//     fetch(WEATHER_API_ENDPOINT + userLocation.value)
//     .then((res) => res.json())
//     .then((data) => {
//         if(data.cod!='' && data.cod!=200){
//             alert(data.message);
//             return;
//         }
//         console.log(data);
//         fetch(WEATHER_DATA_ENDPOINT + `lon=${data.coord.lon}&lat=${data.coord.lat}`)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         });
//     });
// });
// finduserLoaction();









// const WEATHER_API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
// const WEATHER_DATA_ENDPOINT = "https://api.openweathermap.org/data/2.5/onecall";

// function findUserLocation(){
//     const apiUrl = `${WEATHER_API_ENDPOINT}?q=${userLocation.value}&appid=af9ee1243c88a0dceb4152ee480f69d6`;
//     fetch(apiUrl)
//    .then((res) => res.json())
//    .then((data) => {
//         if(data.cod!='' && data.cod!=200){
//             alert(data.message);
//             return;
//         }
//         console.log(data);
//         const weatherDataUrl = `${WEATHER_DATA_ENDPOINT}?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=af9ee1243c88a0dceb4152ee480f69d6&exclude=minutely&units=metrics`;
//         fetch(weatherDataUrl)
//        .then((res) => res.json())
//        .then((data) => {
//             console.log(data);
//         });
//     });
// }
