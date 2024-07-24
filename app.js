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
const icon = document.querySelector(".icon");

const API_KEY = '9f1d66f984eff1d963ba3dfeca9d0611';

findUserLocation();

function findUserLocation() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
        let { latitude, longitude } = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
           .then(res => res.json())
           .then(data => {
                showWeatherData(data);
            })
    })
}

// function findWeatherByCity(city) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
//        .then(res => res.json())
//        .then(data => {
//             console.log(data);
//             icon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
//             showWeatherData(data);
//         })
// }

function showWeatherData(data) {
    let { weather, main, wind, sys, name } = data;
    let { description } = weather[0];
    let { temp, feels_like, humidity, pressure } = main;
    let { speed } = wind;
    let { sunrise, sunset } = sys;
    weatherIcon.innerHTML = `<h3 class="temperature"> ${temp}</h3>
                <div class="feelsLike"> ${feels_like}</div>
                <div class="description"> ${description}</div>
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

const inputBar = document.getElementById('userLocation');

inputBar.addEventListener('input', (e) => {
    const city = e.target.value;
    findWeatherByCity(city);
});

// function showWeatherData(data) {
//     let { weather, main, wind, sys, name } = data;
//     let { description } = weather[0];
//     let { temp, feels_like, humidity, pressure } = main;
//     let { speed } = wind;
//     let { sunrise, sunset } = sys;
//     // let { all } = weather;
//     weatherIcon.innerHTML = `<h3 class="temperature"> ${temp}</h3>
//                 <div class="feelsLike"> ${feels_like}</div>
//                 <div class="description"> ${description}</div>
//                 <div class="city"> ${name}</div>`

//     updates.innerHTML = ` <div class="card p-4" style="width: 18rem;">
//                     <h5 class="card-text humidity">Humidity</h5>
//                     <i class="fa-solid fa-water" style="color: rgba(245, 245, 245, 0.865);"></i>
//                     <div class="card-body">
//                         <h1 class="card-title" id="HumidityValue" style="color: #000;" >${humidity}</h1>
//                     </div>
//                 </div>
//                 <div class="card p-4" style="width: 18rem;">
//                     <h5 class="card-text humidity">Wind Speed</h5>
//                     <i class="fa-solid fa-wind" style="color: darkcyan;"></i>
//                     <div class="card-body">
//                         <h1 class="card-title" id="windSpeedValue">${speed}</h1>
//                     </div>
//                 </div>
//                 <div class="card p-2" style="width: 18rem;">
//                     <div class="card-body sun">
//                         <span class="my-3">
//                             <i class="fa-solid fa-sun" style="color: #f6d245;"></i>
//                             <p><span class="card-title" id="sunRiseValue">${moment(sunrise * 1000).format('HH:mm a')}</span>Sunrise</p>
//                         </span>
//                         <span class="my-3">
//                             <i class="fa-solid fa-cloud-sun" style="color: #f6d245;"></i>
//                             <p><span class="card-title" id="sunSetValue">${moment(sunset * 1000).format('HH:mm a')}</span>Sunset</p>
//                         </span>
//                     </div>
//                 </div>
//                 <div class="card p-4" style="width: 18rem;">
//                     <h5 class="card-text clouds">Clouds</h5>
//                     <i class="fa-solid fa-cloud" style="color: grey;"></i>
//                     <div class="card-body">
//                         <h1 class="card-title" id="cloudValue">${weather[0].clouds}%</h1>
//                     </div>
//                 </div>
                
//                 <div class="card p-4" style="width: 18rem;">
//                     <h5 class="card-text pressure">Pressure</h5>
//                     <i class="fa-solid fa-volcano" style="color: darkslategrey;"></i>
//                     <div class="card-body">
//                         <h1 class="card-title" id="pressureValue">${pressure}</h1>
//                     </div>
//                 </div>`
// }








