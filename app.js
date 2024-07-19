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
WEATHER_DATA_ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?appid=9f1d66f984eff1d963ba3dfeca9d0611&exclude=minutely&units=metrics&`;

let finduserLoaction = (() => {
    fetch(WEATHER_API_ENDPOINT + userLocation.value)
    .then((res) => res.json())
    .then((data) => {
        if(data.cod!='' && data.cod!=200){
            alert(data.message);
            return;
        }
        console.log(data);
        fetch(WEATHER_DATA_ENDPOINT + `lon=${data.coord.lon}&lat=${data.coord.lat}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
    });
});
finduserLoaction();


