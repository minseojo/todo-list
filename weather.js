const API_KEY = "6cb461023b1bb705be6cc923732b4ed9";

function onGeoOk(position) { // 성공시 자체적으로 현재 포지션을 줌.
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} \ ${data.main.temp}°`;
            city.innerText = data.name;
    });
}

function onGeoError() {
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 성공 실패시 파라미터