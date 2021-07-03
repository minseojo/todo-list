// 현재 사용하지 않음 -> css에서 큰 화면 고정 사용
const images = ["0.jpg", "1.jpg"];

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = document.createElement("img");

bgImage.src= `img/${chosenImage}`;

document.body.appendChild(bgImage);