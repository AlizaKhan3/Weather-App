const userLocation = document.getElementById("userLocation");
// console.log(userLocation)
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

WEATHER_API_ENDPOINT =`https://api.openweathermap.org/data/2.5/weather?appid=9f1d66f984eff1d963ba3dfeca9d0611&q=`;
WEATHER_DATA_ENDPOINT = '';

let finduserLoaction = (() => {
    // alert("Hello")
    fetch(WEATHER_API_ENDPOINT + "London")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });
});
finduserLoaction();


