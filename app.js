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


const API_KEY = '9f1d66f984eff1d963ba3dfeca9d0611';
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


findUserLocation();
function findUserLocation() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
        let{lat, lon} = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(res => res.json()).then(data => {
            console.log(data);
        })
    })
}







// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'Sign Up for Key',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// async function fetchData() {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.text();
// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// fetchData(); // Call the async function














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
